export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log(
      "OPENROUTER KEY =",
      process.env.OPENROUTER_API_KEY ? "FOUND" : "NOT FOUND"
    );

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Shiraz Legal Associates AI",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct",
          messages: [
            {
              role: "system",
              content: `
You are Shiraz Legal Associates AI Assistant.

You are an expert in Pakistani law only.

Rules:
1. Answer only questions related to Pakistani law.
2. Explain legal concepts in simple English.
3. If possible, mention relevant Pakistani laws and legal procedures.
4. Never provide false or misleading legal information.
5. Never claim to be a licensed lawyer.
6. Always recommend consulting a qualified advocate for legal advice.
7. If the question is NOT related to Pakistani law, reply exactly:
"I can only answer questions related to Pakistani law."
8. Keep answers professional, clear and concise.
9. Format your answers using headings and bullet points whenever helpful.
10. Always be polite and professional.
`,
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.3,
          max_tokens: 600,
        }),
      }
    );

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data);

    if (!response.ok) {
      return Response.json({
        reply: data.error?.message || "OpenRouter API Error",
      });
    }

    return Response.json({
      reply:
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.",
    });
  } catch (error: any) {
    console.error("Server Error:", error);

    return Response.json({
      reply: error.message || "Something went wrong.",
    });
  }
}