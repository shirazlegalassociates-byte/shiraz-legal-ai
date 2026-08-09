"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim() || loading) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error("AI request failed");
      }

      const data = await res.json();

      setReply(data.reply || "Sorry, no response was received.");
    } catch (error) {
      console.error("AI Error:", error);
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessage("");
    setReply("");
  }

  async function copyResponse() {
    if (!reply) return;

    try {
      await navigator.clipboard.writeText(reply);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  return (
    <section
      id="ai"
      aria-labelledby="ai-heading"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* Heading */}
          <h2
            id="ai-heading"
            className="text-4xl font-bold text-blue-900"
          >
            AI Legal Assistant
          </h2>

          <p className="mt-3 text-gray-600">
            Ask a general question related to Pakistani law.
          </p>

          {/* Textarea Label */}
          <label
            htmlFor="legal-question"
            className="block mt-6 mb-2 font-semibold text-gray-800"
          >
            Your Legal Question
          </label>

          {/* Textarea */}
          <textarea
            id="legal-question"
            name="legal-question"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askAI();
              }
            }}
            placeholder="Example: What is bail in Pakistan?"
            aria-describedby="legal-question-help"
            className="w-full border border-gray-300 rounded-xl p-4 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-900"
          />

          {/* Help text */}
          <p
            id="legal-question-help"
            className="mt-2 text-sm text-gray-500"
          >
            Press Enter to ask your question. Press Shift + Enter for a new
            line.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button
              type="button"
              onClick={askAI}
              disabled={loading || !message.trim()}
              aria-label={
                loading
                  ? "AI is processing your question"
                  : "Ask AI your legal question"
              }
              className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "🤖 AI is thinking..." : "Ask AI"}
            </button>

            <button
              type="button"
              onClick={clearChat}
              aria-label="Clear legal question and AI response"
              className="border border-blue-900 text-blue-900 px-6 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition"
            >
              Clear Chat
            </button>
          </div>

          {/* AI Response */}
          {reply && (
            <div
              className="mt-8 bg-blue-50 border-l-4 border-blue-900 p-6 rounded-xl"
              aria-live="polite"
              aria-label="AI response"
            >
              <div className="flex flex-wrap justify-between items-center gap-3 mb-3">

                <h3 className="font-bold text-blue-900">
                  AI Response
                </h3>

                <button
                  type="button"
                  onClick={copyResponse}
                  aria-label="Copy AI response"
                  className="text-sm text-blue-700 hover:underline"
                >
                  📋 Copy Response
                </button>

              </div>

              <p className="whitespace-pre-wrap text-gray-700 leading-8">
                {reply}
              </p>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-gray-500 leading-5">
            Disclaimer: This AI assistant provides general legal information
            for educational purposes only. It does not constitute legal advice
            and does not create an advocate-client relationship.
          </p>

        </div>
      </div>
    </section>
  );
}