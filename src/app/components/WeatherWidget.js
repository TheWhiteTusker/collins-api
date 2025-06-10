"use client";

import { useEffect } from "react";
import WeatherWidget from "./WeatherWidget";
import Ticker from "./Ticker";
// import "../globals.css"; // Optional: keep minimal if needed

const WelcomeScreen = () => {
  useEffect(() => {
    const checkForErrors = async () => {
      try {
        const response = await fetch("/api/collins/news");
        if (response.status === 504) {
          console.error("504 Error: Refreshing page...");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    checkForErrors();
    const interval = setInterval(checkForErrors, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Welcome to Collins Collaboration Center - INDIA
      </div>

      <div style={styles.videoSection}>
        <video autoPlay loop muted style={styles.video}>
          <source
            src="/connected ecosystem Data-ATC short .mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div style={styles.weatherSection}>
        <WeatherWidget />
      </div>

      <div style={styles.newsTicker}>
        <Ticker />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden", // Hide scrollbars
    backgroundColor: "#d9d9d9",
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "12px 0",
  },
  videoSection: {
    width: "100%",
    textAlign: "center",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  weatherSection: {
    width: "100%",
    padding: "10px",
    textAlign: "center",
  },
  newsTicker: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
  },
};

export default WelcomeScreen;
