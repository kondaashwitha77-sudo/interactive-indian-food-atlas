import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  Sparkles,
  RotateCcw,
  Copy,
  CheckCheck,
  Globe,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import {
  ChatMessage,
  DishContextInfo,
  sendChatMessageToBackend,
} from "../services/grokService";
import { FormattedAiMessage } from "./FormattedAiMessage";

interface CulinaryChatbotProps {
  dish?: DishContextInfo;
  isLight: boolean;
}

export const CulinaryChatbot: React.FC<CulinaryChatbotProps> = ({ dish, isLight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleCopyMessage = async (msgId: string, text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedMessageId(msgId);
      setTimeout(() => {
        setCopiedMessageId(null);
      }, 1500);
    } catch (err) {
      console.warn("Failed to copy message:", err);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await sendChatMessageToBackend(newMessages, dish);
      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: response.reply,
        timestamp: Date.now(),
        usedWebSearch: response.usedWebSearch,
        sources: response.sources,
        isError: response.isError,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: "Bhojan Mitra is taking a break. Please try again in a little while.",
        timestamp: Date.now(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    // Find the last user message and re-send it
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    if (lastUserMessage) {
      handleSendMessage(lastUserMessage.content);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Dynamic suggestion chips based on current dish or general food topics
  const primaryIngredient = dish?.ingredients?.[0] || "ghee";
  const suggestionChips = dish?.name
    ? [
        `What does ${primaryIngredient} mean?`,
        "How is it made?",
        `Spicy dishes from ${dish.state}`,
        "How has it changed over time?",
      ]
    : [
        "What is panch phoron?",
        "History of Dum cooking",
        "Famous street food of Mumbai",
        "Popular breakfast dishes in South India",
      ];

  const mascotSrc = isLight ? "/images/chef-bot-light.png" : "/images/chef-bot-dark.png";

  return (
    <>
      {/* ─── FLOATING TRIGGER BUTTON (BOTTOM RIGHT) ─── */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 select-none print:hidden">
        {/* "Ask me anything!" Pill Badge */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Culinary AI Chatbot"
            className={`group cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-full font-bold text-xs shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border ${
              isLight
                ? "bg-white/95 text-amber-950 border-amber-300 shadow-amber-900/10 hover:border-amber-400"
                : "bg-slate-900/95 text-amber-300 border-amber-500/40 shadow-black/50 hover:border-amber-400"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="tracking-wide">Ask me anything!</span>
          </button>
        )}

        {/* Circular Mascot Launcher */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chatbot" : "Open culinary chatbot"}
          className={`relative group cursor-pointer w-14 h-14 rounded-full p-1 shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 flex items-center justify-center overflow-hidden ${
            isOpen
              ? isLight
                ? "bg-amber-100 border-amber-500 ring-4 ring-amber-300/40"
                : "bg-amber-950/80 border-amber-400 ring-4 ring-amber-500/20"
              : isLight
              ? "bg-amber-500/10 border-amber-500 ring-4 ring-amber-400/30 hover:ring-amber-400/50"
              : "bg-slate-900 border-amber-400 ring-4 ring-amber-500/30 hover:ring-amber-400/60"
          }`}
        >
          <img
            src={mascotSrc}
            alt="Bhojan Mitra Chef AI Mascot"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:rotate-6"
          />
          <span className={`absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 rounded-full shadow-xs ${
            isLight ? "border-white" : "border-slate-900"
          }`} />
        </button>
      </div>

      {/* ─── STANDING CHAT WINDOW ─── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Culinary AI Assistant"
          className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[360px] sm:max-w-[420px] h-[560px] max-h-[82vh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
            isLight
              ? "bg-[#FCFAF7]/95 border-amber-900/15 text-slate-800 shadow-amber-950/20"
              : "bg-slate-900/95 border-amber-500/30 text-slate-100 shadow-black/70"
          }`}
        >
          {/* Header */}
          <div
            className={`p-3.5 px-4 border-b flex items-center justify-between transition-colors ${
              isLight ? "bg-amber-500/10 border-amber-900/10" : "bg-slate-800/80 border-slate-750"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500/60 overflow-hidden shadow-xs flex-shrink-0 bg-amber-500/20">
                <img src={mascotSrc} alt="Bhojan Mitra" className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <h3 className={`font-extrabold text-sm tracking-tight ${
                  isLight ? "text-amber-800" : "text-amber-300"
                }`}>
                  Bhojan Mitra
                </h3>
                <p
                  className={`text-[11px] truncate max-w-[210px] ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                  title={dish?.name ? `Viewing: ${dish.name}` : "Ask about any dish, ingredient or food word"}
                >
                  {dish?.name ? `Viewing: ${dish.name}` : "Ask about any dish, ingredient or food word"}
                </p>
              </div>
            </div>

            {/* Header Actions (Reset & Close only) */}
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  title="New chat"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    isLight
                      ? "text-slate-500 hover:bg-amber-100 hover:text-slate-800"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isLight
                    ? "text-slate-500 hover:bg-amber-100 hover:text-slate-800"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs select-text">
            {messages.length === 0 ? (
              /* Welcome Screen */
              <div className="h-full flex flex-col justify-center items-center text-center px-2 py-4">
                <div className="w-14 h-14 rounded-full border-2 border-amber-500/50 p-1 mb-2.5 bg-amber-500/10 shadow-xs">
                  <img
                    src={mascotSrc}
                    alt="Bhojan Mitra"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <p
                  className={`text-[13.5px] font-medium mb-4 max-w-[290px] leading-relaxed ${
                    isLight ? "text-slate-700" : "text-slate-200"
                  }`}
                >
                  Namaste! I'm Bhojan Mitra, your guide to Indian food history, recipes, and spices.
                </p>

                {/* 4 Tappable Suggestion Chips */}
                <div className="w-full space-y-2 text-left">
                  <p
                    className={`text-[10px] uppercase font-bold tracking-wider px-1 ${
                      isLight ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Try asking:
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {suggestionChips.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt)}
                        className={`w-full text-left p-2.5 px-3 rounded-xl border text-[12px] font-medium transition cursor-pointer flex items-center justify-between group shadow-xs ${
                          isLight
                            ? "bg-white hover:bg-amber-50 border-amber-900/10 text-slate-800 hover:border-amber-300"
                            : "bg-slate-800/80 hover:bg-slate-750 border-slate-700 text-slate-100 hover:border-amber-500/40"
                        }`}
                      >
                        <span className="truncate pr-2">{prompt}</span>
                        <span className="text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Message Thread */
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`group/msg flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-1 border border-amber-500/40">
                      <img src={mascotSrc} alt="Bot" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="relative max-w-[85%] group">
                    <div
                      className={`p-3 sm:p-3.5 rounded-2xl leading-[1.55] select-text break-words shadow-xs ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-tr-xs font-medium text-[13.5px]"
                          : isLight
                          ? "bg-white border border-amber-900/10 text-slate-800 rounded-tl-xs"
                          : "bg-slate-800/90 border border-slate-700 text-slate-100 rounded-tl-xs"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <>
                          {/* "Checked the web" Badge */}
                          {msg.usedWebSearch && (
                            <div
                              className={`mb-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10.5px] font-semibold border ${
                                isLight
                                  ? "bg-amber-100 text-amber-900 border-amber-300"
                                  : "bg-amber-500/20 text-amber-200 border-amber-500/30"
                              }`}
                            >
                              <Globe className="w-3 h-3 text-amber-500" />
                              <span>Checked the web</span>
                            </div>
                          )}

                          <FormattedAiMessage content={msg.content} isLight={isLight} />

                          {/* Sources Chips */}
                          {msg.sources && msg.sources.length > 0 && (
                            <div
                              className={`mt-2.5 pt-2 border-t flex flex-wrap gap-1.5 items-center ${
                                isLight ? "border-amber-900/10" : "border-slate-700"
                              }`}
                            >
                              <span
                                className={`text-[10px] uppercase font-bold ${
                                  isLight ? "text-slate-500" : "text-slate-400"
                                }`}
                              >
                                Sources:
                              </span>
                              {msg.sources.map((s, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={s.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] hover:underline transition-colors ${
                                    isLight
                                      ? "bg-amber-100/90 text-amber-900 border border-amber-200"
                                      : "bg-slate-700 text-amber-200 border border-slate-600"
                                  }`}
                                >
                                  <span>{s.title}</span>
                                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                                </a>
                              ))}
                            </div>
                          )}

                          {/* Retry button on error */}
                          {msg.isError && (
                            <button
                              onClick={handleRetry}
                              className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-xs cursor-pointer"
                            >
                              <RefreshCw className="w-3 h-3" />
                              <span>Retry</span>
                            </button>
                          )}
                        </>
                      ) : (
                        msg.content
                      )}
                    </div>

                    {/* Quick Copy Button on Assistant Message */}
                    {msg.role === "assistant" && !msg.isError && (
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.content)}
                        title="Copy answer"
                        className={`absolute top-2 right-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 cursor-pointer shadow-xs ${
                          isLight
                            ? "bg-amber-100/90 hover:bg-amber-200 text-amber-900 border border-amber-300"
                            : "bg-slate-700/90 hover:bg-slate-650 text-amber-200 border border-slate-600"
                        }`}
                      >
                        {copiedMessageId === msg.id ? (
                          <div className="flex items-center gap-1 text-[9px] px-0.5 font-bold">
                            <CheckCheck className="w-3 h-3 text-emerald-500" />
                            <span>Copied</span>
                          </div>
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}

            {/* Typing Indicator while waiting */}
            {isLoading && (
              <div className="flex gap-2 justify-start items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-amber-500/40">
                  <img src={mascotSrc} alt="Bot" className="w-full h-full object-cover" />
                </div>
                <div
                  className={`p-3 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1.5 shadow-xs ${
                    isLight
                      ? "bg-white border border-amber-900/10 text-slate-500"
                      : "bg-slate-800 border border-slate-700 text-slate-400"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            className={`p-3 px-3.5 border-t ${
              isLight ? "bg-white/90 border-amber-900/10" : "bg-slate-900/90 border-slate-750"
            }`}
          >
            <div className="relative flex items-center">
              <textarea
                ref={textareaRef}
                rows={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about a dish, ingredient or cooking method..."
                disabled={isLoading}
                className={`w-full pl-3.5 pr-10 py-2.5 rounded-xl border text-[13px] resize-none focus:outline-hidden transition-all select-text leading-tight ${
                  isLight
                    ? "bg-amber-50/50 border-amber-300/80 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                    : "bg-slate-800/80 border-slate-750 text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-800"
                }`}
                style={{ maxHeight: "90px" }}
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send query"
                className={`absolute right-1.5 p-1.5 rounded-lg transition-all cursor-pointer ${
                  inputValue.trim() && !isLoading
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xs hover:scale-105 active:scale-95"
                    : "opacity-40 cursor-not-allowed text-slate-400"
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="mt-1.5 text-center text-[10.5px] opacity-60">
              Food, ingredients and cooking only.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CulinaryChatbot;
