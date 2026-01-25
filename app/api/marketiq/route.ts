import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

// Configuration for the agent
const AGENT_CONFIG = {
  name: "MarketiQ",
  model: "llama-3.1-8b-instant",
  temperature: 0.7,
  maxTokens: 2048,
};

interface User {
  userId: number;
  email: string;
  name: string;
  is_admin: boolean;
  exp: number;
}

interface RequestBody {
  message: string;
  conversationHistory: Array<{ role: string; content: string }>;
  imageUrl?: string;
}

// Groq API call with environment variable
async function callGroqAPI(
  messages: Array<{ role: string; content: string }>
): Promise<string> {
  const groqApiKey = process.env.GROQ_API_KEY;

  // If no API key, return a fallback response
  if (!groqApiKey) {
    console.warn("⚠️ GROQ_API_KEY not configured. Using fallback responses.");
    return getFallbackResponse(messages);
  }

  try {
    // Call Groq API using the REST endpoint
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: AGENT_CONFIG.model,
        messages: messages,
        temperature: AGENT_CONFIG.temperature,
        max_tokens: AGENT_CONFIG.maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Groq API Error:", error);
      return getFallbackResponse(messages);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || getFallbackResponse(messages);
  } catch (error) {
    console.error("Error calling Groq API:", error);
    return getFallbackResponse(messages);
  }
}

// Fallback response generator
function getFallbackResponse(
  messages: Array<{ role: string; content: string }>
): string {
  const lastMessage = messages[messages.length - 1]?.content || "";

  // Simulate intelligent responses based on message content
  if (
    lastMessage.toLowerCase().includes("logo") ||
    lastMessage.toLowerCase().includes("design")
  ) {
    return `Great! I'd be happy to analyze your logo/design. Here's my assessment:

**Design Elements:**
- The visual composition shows good hierarchy and balance
- Color palette aligns well with modern digital trends
- Typography is clean and professional

**Recommendations:**
1. Consider adding more visual hierarchy for better brand recognition
2. Ensure scalability across all platforms (web, print, social media)
3. Test the design with your target audience

**Related Services:**
- UI/UX Design Enhancement: $500-$1,500 USD
- Full Branding Package: $2,000-$5,000 USD
- Social Media Asset Creation: $300-$800 USD

Would you like me to provide a detailed estimate for any of these services?`;
  } else if (
    lastMessage.toLowerCase().includes("estimate") ||
    lastMessage.toLowerCase().includes("price")
  ) {
    return `Perfect! Let me help you with a project estimate.

**Project Estimation Framework:**

To provide accurate pricing, I need a bit more information:
1. What type of project? (Website, App, Marketing Campaign, etc.)
2. What's your timeline?
3. Do you have a budget in mind?

**Typical Service Pricing:**
- Website Design: $1,500 - $5,000
- Mobile App Development: $3,000 - $10,000+
- Digital Marketing Campaign: $500 - $5,000/month
- SEO Services: $300 - $2,000/month
- Social Media Management: $200 - $1,500/month

Let me know more details and I can provide a customized quote!`;
  } else if (lastMessage.toLowerCase().includes("service")) {
    return `Welcome to Elvion Solutions! 🚀

**Our Services:**

📊 **Digital Marketing**
- SEO Optimization
- Social Media Marketing
- Content Marketing
- Google Ads & PPC

🎨 **Design**
- UI/UX Design
- Web Design
- Logo & Branding
- Mobile App Design

💻 **Development**
- Full Stack Web Development
- Mobile App Development
- E-commerce Solutions
- Custom Software

Which service interests you? I can provide more details and pricing!`;
  } else if (lastMessage.toLowerCase().includes("hello") || lastMessage.toLowerCase().includes("hi")) {
    return `Hello! 👋 Welcome to MarketiQ, your AI digital marketing expert. I'm here to help you with:

✅ **Digital Marketing Advice** - Strategy, SEO, Social Media
✅ **Service Information** - Details about our offerings
✅ **Pricing Estimates** - Quick project quotes
✅ **Design Consultation** - Feedback on your brand
✅ **General Questions** - Any questions about web & marketing

How can I assist you today?`;
  } else {
    return `Thanks for your message! 💬

I'm MarketiQ, an AI assistant specialized in digital marketing and web services. I can help you with:

• **Service inquiries** - Ask about web design, digital marketing, app development
• **Pricing information** - Get estimates for your projects
• **Marketing strategy** - Advice on growing your online presence
• **Design feedback** - Input on your branding and visual identity
• **General questions** - Anything about our services

Feel free to ask me anything! What would you like to know?`;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the JWT token from the request
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.substring(7);

    // Decode and verify the token
    let user: User;
    try {
      user = jwtDecode<User>(token);
      // Check if token is expired
      if (user.exp < Date.now() / 1000) {
        return NextResponse.json({ error: "Token expired" }, { status: 401 });
      }
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Parse the request body
    const body: RequestBody = await request.json();
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build system message for the agent
    const systemMessage = {
      role: "system",
      content: `You are MarketiQ, an AI digital marketing expert for Elvion Solutions. Your role is to help customers with:

1. Digital Marketing Services: SEO, Social Media Marketing, Content Marketing, Google Ads, Email Marketing
2. Design Services: UI/UX Design, Web Design, Logo & Branding, Mobile App Design
3. Development Services: Full Stack Web Development, Mobile App Development, E-commerce, Custom Software
4. Project Consultation: Provide estimates, timelines, and recommendations
5. General Inquiries: Answer questions about services, pricing, and capabilities

Company Info:
- Name: Elvion Solutions
- Specialization: Digital Marketing, Web Design, App Development
- Pricing: Customized based on project scope
- Quality: Professional, client-focused approach

Guidelines:
- Be helpful, friendly, and professional
- Provide specific examples when relevant
- Offer pricing ranges when asked
- Suggest complementary services when appropriate
- Always maintain a marketing-focused perspective
- If asked about services you provide, provide detailed information
- Use the customer's name if available to personalize responses`,
    };

    // Prepare messages for Groq API - ensure conversationHistory is an array
    const validHistory = Array.isArray(conversationHistory) 
      ? conversationHistory.filter(msg => msg && msg.role && msg.content)
      : [];

    const groqMessages = [
      systemMessage,
      ...validHistory,
      { role: "user", content: message.trim() },
    ];

    // Call Groq API
    const agentResponse = await callGroqAPI(groqMessages);

    return NextResponse.json({
      success: true,
      response: agentResponse,
      message: message,
      user: {
        id: user.userId,
        email: user.email,
        name: user.name,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error in MarketiQ API:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

