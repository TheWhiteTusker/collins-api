import { scrapeCollinsNews } from "../../../../units/scraper";

export const runtime = "nodejs"; // ✅ Force Next.js to use Node.js runtime
export const dynamic = "force-dynamic"; // ✅ Ensure dynamic execution

export async function GET() {
  const result = await scrapeCollinsNews();

  if (result.error) {
    return Response.json({ error: result.error }, { status: 500 });
  }

  return Response.json(result);
}
