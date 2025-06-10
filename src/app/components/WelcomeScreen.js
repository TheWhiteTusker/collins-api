"use client";

import { useEffect } from "react";
import WeatherWidget from "./WeatherWidget";
import Ticker from "./Ticker";
import "../globals.css"; // Keep minimal or remove if causing issues

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
    backgroundColor: "#d9d9d9",
    padding: "20px",
    fontFamily: "Arial, Helvetica, sans-serif",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "12px",
    marginBottom: "15px",
  },
  videoSection: {
    marginBottom: "20px",
  },
  video: {
    width: "90%",
    maxWidth: "1000px",
  },
  weatherSection: {
    marginBottom: "20px",
  },
  newsTicker: {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "10px",
    fontSize: "16px",
  },
};

export default WelcomeScreen;
