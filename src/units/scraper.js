import puppeteer from "puppeteer";

export async function scrapeCollinsNews() {
  const COLLINS_NEWS_URL = "https://www.collinsaerospace.com/news";

  try {
    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");

    console.log("Navigating to:", COLLINS_NEWS_URL);
    await page.goto(COLLINS_NEWS_URL, { waitUntil: "networkidle2" });

    console.log("Waiting for news elements...");
    await page.waitForSelector("h3.esds-cards__title a", { timeout: 10000 });

    console.log("Extracting news headlines...");
    const newsHeadlines = await page.evaluate(() => {
      let headlines = [];
      document.querySelectorAll("h3.esds-cards__title a").forEach((element) => {
        headlines.push({ title: element.innerText.trim() });
      });
      return headlines.slice(0, 10); // Limit to 10 headlines
    });

    console.log("Scraped Headlines:", newsHeadlines);
    
    await browser.close();
    return { headlines: newsHeadlines };
  } catch (error) {
    console.error("Error scraping news:", error);
    return { error: "Failed to fetch news" };
  }
}
