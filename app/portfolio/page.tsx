import { Button } from "@/components/Button";

export default function Portfolio() {
    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Our Portfolio</h1>
            <p className="text-elvion-gray text-center mb-12">Showcasing our best work in Web Development & Branding.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-elvion-card rounded-xl overflow-hidden border border-white/10 group">
                        <div className="h-48 bg-gray-800 flex items-center justify-center text-gray-600">
                            {/* Replace with <Image /> in real project */}
                            Project Preview {item}
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Project Name {item}</h3>
                            <p className="text-sm text-elvion-gray mb-4">E-commerce / Web Design</p>
                            <Button variant="outline" className="w-full text-sm py-2">View Case Study</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}