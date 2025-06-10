"use client";

import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const loadWeatherWidget = () => {
      const existingScript = document.querySelector("script[src='https://weatherwidget.io/js/widget.min.js']");
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.src = "https://weatherwidget.io/js/widget.min.js";
      script.async = true;
      script.onload = () => console.log("Weather widget loaded successfully");
      script.onerror = () => {
        console.error("Weather widget failed to load, retrying...");
        if (reloadCount < 3) {
          setTimeout(() => setReloadCount((prev) => prev + 1), 5000);
        }
      };
      document.body.appendChild(script);
    };

    loadWeatherWidget();
  }, [reloadCount]);

  return (
    <div className="text-center my-6">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/12d9777d59/bengaluru/"
        data-label_1="BENGALURU"
        data-label_2="WEATHER"
        data-theme="mountains"
      >
        BENGALURU WEATHER
      </a>
    </div>
  );
};

export default WeatherWidget;
