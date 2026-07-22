"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim()) return;

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

      const data = await res.json();
      setReply(data.reply);
    } catch {
      setReply("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section id="ai" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-4xl font-bold text-blue-900">
            AI Legal Assistant
          </h2>

          <p className="mt-3 text-gray-600">
            Ask any question related to Pakistani law.
          </p>

          <textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  }}
  placeholder="Example: What is bail in Pakistan?"
  className="w-full mt-6 border rounded-xl p-4 h-40 resize-none"
 />

          <button
            onClick={askAI}
            disabled={loading}
            className="mt-6 bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "🤖 AI is thinking..." : "Ask AI"}
          </button>
<button
  onClick={() => {
    setMessage("");
    setReply("");
  }}
  className="ml-4 mt-6 border border-blue-900 text-blue-900 px-6 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition"
>
  Clear Chat
</button>
          {reply && (
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-900 p-6 rounded-xl">

              <h3 className="font-bold text-blue-900 mb-3">
                AI Response
                <button
  onClick={() => navigator.clipboard.writeText(reply)}
  className="mb-4 text-sm text-blue-700 hover:underline"
>
  📋 Copy Response
</button>
              </h3>

              <p className="whitespace-pre-wrap text-gray-700 leading-8">
                {reply}
              </p>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}