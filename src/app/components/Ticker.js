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
    <div className="ticker-container overflow-hidden bg-gray-900 text-white py-4">
      <div className="ticker-content flex gap-20 whitespace-nowrap animate-scroll">
        {news.length > 0 ? (
          news.map((item, index) => (
            <span 
              key={index} 
              className="ticker-item mx-[20px] font-bold"
              style={{ fontSize: "60px", lineHeight: "80px", fontWeight: "bold", whiteSpace: "nowrap", marginRight: "50px"}}
            >
              {item.title}
            </span>
          ))
        ) : (
            <span 
            className="font-bold"
            style={{ fontSize: "70px", lineHeight: "80px", fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            Fetching latest news...
          </span>
        )}
      </div>
      <style jsx>{`
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
          gap: 20px;
          animation: scroll 100s linear infinite;
          right: 100%;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
