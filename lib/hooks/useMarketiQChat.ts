import { useState, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function useMarketiQChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (message: string, imageUrl?: string) => {
      if (!message.trim()) return;

      // Add user message
      const userMessage: Message = {
        role: "user",
        content: message,
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      try {
        // Get auth token from localStorage
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("Please login to use MarketiQ");
          setIsLoading(false);
          return;
        }

        // Call the API
        const response = await fetch("/api/marketiq", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message,
            conversationHistory: messages,
            imageUrl,
          }),
        });

        if (!response.ok) {
          if (response.status === 401) {
            setError("Session expired. Please login again.");
            localStorage.removeItem("authToken");
          } else {
            setError("Failed to get response");
          }
          setIsLoading(false);
          return;
        }

        const data = await response.json();

        // Add assistant message
        const assistantMessage: Message = {
          role: "assistant",
          content: data.response,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        console.error("Error sending message:", err);
        setError("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
}
