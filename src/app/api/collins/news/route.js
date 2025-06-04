import { scrapeCollinsNews } from "../../../../units/scraper";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const newsData = await scrapeCollinsNews();
    return new Response(JSON.stringify(newsData), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in API:", error); 
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
