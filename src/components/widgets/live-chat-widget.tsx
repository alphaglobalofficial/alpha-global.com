"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
}

const QUICK_REPLIES = [
  "I want a new website",
  "Pricing for an e-commerce store",
  "Book a free consultation",
];

let messageId = 0;
function nextId() {
  messageId += 1;
  return messageId;
}

function botReplyFor(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing")) {
    return "Our projects typically start from $499 for a Starter build, up to custom Enterprise scopes. Want me to open the Pricing page, or would you rather book a free consultation for an exact quote?";
  }
  if (lower.includes("consult") || lower.includes("call") || lower.includes("book")) {
    return "I'll get that set up — head to the Book a Free Consultation page and pick a slot that works for you. Someone from our team will confirm within a few hours.";
  }
  if (lower.includes("website") || lower.includes("shopify") || lower.includes("store")) {
    return "We'd love to help with that. Could you share a bit about your business and what you're hoping the site will do? Meanwhile, feel free to browse our Portfolio for similar builds.";
  }
  return "Thanks for reaching out! One of our team members will reply within a few hours. In the meantime, you can browse our Services or book a free consultation directly.";
}

export function LiveChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: nextId(),
      from: "bot",
      text: "Hey! 👋 I'm the Alpha Global assistant. Ask me about pricing, timelines, or how we work — or leave a message and the team will follow up.",
    },
  ]);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMessage: ChatMessage = { id: nextId(), from: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), from: "bot", text: botReplyFor(text) }]);
    }, 900 + Math.random() * 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong absolute bottom-[4.5rem] right-0 flex h-[32rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-[28px] shadow-glow-lg"
            role="dialog"
            aria-label="Live chat"
          >
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-electric text-white">
                <Sparkles className="size-[18px]" />
              </div>
              <div>
                <p className="text-sm font-semibold">Alpha Global Team</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Usually replies within a few hours
                </p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed",
                    message.from === "bot"
                      ? "bg-muted text-foreground"
                      : "ml-auto bg-gradient-electric text-white"
                  )}
                >
                  {message.text}
                </div>
              ))}
              {typing && (
                <div className="flex w-fit items-center gap-1 rounded-2xl bg-muted px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-1.5 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              )}
            </div>

            {messages.length < 3 && (
              <div className="flex flex-wrap gap-2 px-5 pb-3">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-electric/40 hover:text-foreground"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Type a message
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 rounded-full bg-muted/60 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform active:scale-95"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex size-14 items-center justify-center rounded-full bg-gradient-electric text-white shadow-glow"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
