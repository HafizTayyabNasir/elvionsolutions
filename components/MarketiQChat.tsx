"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Loader, X, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMarketiQChat } from "@/lib/hooks";

interface MarketiQChatProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export function MarketiQChat({ isOpen = true, onClose }: MarketiQChatProps) {
    const [message, setMessage] = useState("");
    const [isMinimized, setIsMinimized] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { messages, isLoading, error, sendMessage } =
        useMarketiQChat();

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            await sendMessage(message, uploadedImage || undefined);
            setMessage("");
            setUploadedImage(null);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUploadedImage(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed bottom-6 right-6 z-50 w-96 bg-elvion-card rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                style={{ maxHeight: isMinimized ? "60px" : "600px" }}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-elvion-primary to-elvion-accent p-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-white font-bold">MarketiQ</h3>
                        {!isMinimized && (
                            <p className="text-xs text-black/70">AI Marketing Expert</p>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                            title={isMinimized ? "Expand" : "Minimize"}
                        >
                            {isMinimized ? "▲" : "▼"}
                        </button>
                        <button
                            onClick={onClose}
                            className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Chat Messages */}
                {!isMinimized && (
                    <>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
                            {messages.length === 0 ? (
                                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                                    <p>Hi! I&apos;m MarketiQ. Ask me about our services!</p>
                                </div>
                            ) : (
                                messages.map((msg: { role: string; content: string }, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-xs px-4 py-2 rounded-lg ${msg.role === "user"
                                                    ? "bg-elvion-primary text-white rounded-br-none"
                                                    : "bg-elvion-dark/50 text-gray-300 rounded-bl-none border border-white/10"
                                                }`}
                                        >
                                            <p className="text-sm">{msg.content}</p>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-elvion-dark/50 px-4 py-2 rounded-lg border border-white/10">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-2 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Image Preview */}
                        {uploadedImage && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="px-4 py-2 border-t border-white/10 flex items-center gap-2"
                            >
                                <img
                                    src={uploadedImage}
                                    alt="uploaded"
                                    className="w-12 h-12 rounded object-cover"
                                />
                                <button
                                    onClick={() => setUploadedImage(null)}
                                    className="ml-auto text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </motion.div>
                        )}

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="border-t border-white/10 p-3">
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                    title="Upload image"
                                >
                                    <Upload size={18} />
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-elvion-dark/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-elvion-primary"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !message.trim()}
                                    className="p-2 rounded-lg bg-elvion-primary text-white hover:bg-elvion-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isLoading ? (
                                        <Loader size={18} className="animate-spin" />
                                    ) : (
                                        <Send size={18} />
                                    )}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
