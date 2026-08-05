import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GNEWS_API_KEY;

  console.log("GNEWS_API_KEY =", apiKey);

  const query = encodeURIComponent("Pakistan law OR Supreme Court OR FBR");

const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=pk&max=6&sortby=publishedAt&apikey=${apiKey}`;
  try {
    const response = await fetch(url);

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch legal news" },
      { status: 500 }
    );
  }
}