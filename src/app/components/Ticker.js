"use client";
import { useState, useEffect } from "react";

const Ticker = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/collins/news");
        const data = await response.json();
        setNews(data.headlines || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {news.length > 0 ? (
          news.map((item, index) => (
            <span
              key={index}
              className="ticker-item mx-[20px] font-bold"
              style={{
                fontSize: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </span>
          ))
        ) : (
          <span
            className="font-bold"
            style={{
              fontSize: "24px",
            }}
          >
            Fetching latest news...
          </span>
        )}
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"); /* Google Fonts Import */

        @keyframes scroll {
          from {
            transform: translateX(10%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .ticker-container {
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
        }

        .ticker-content {
          display: inline-flex;
          gap: 50px;
          animation: scroll 100s linear infinite;
        }

        .ticker-item {
          font-size: 35px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
