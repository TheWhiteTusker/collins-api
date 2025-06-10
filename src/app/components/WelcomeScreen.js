"use client";

import { useEffect } from "react";
import WeatherWidget from "./WeatherWidget";
import Ticker from "./Ticker";
import "../globals.css";

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

      <div style={styles.mainContent}>
        <div style={styles.videoSection}>
          <video autoPlay loop muted style={styles.video}>
            <source
              src="/connected ecosystem Data-ATC short .mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div style={styles.bottomSection}>
        {/* <div style={styles.weatherSection}>
          <WeatherWidget />
        </div> */}
        <div style={styles.newsTicker}>
          <Ticker />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 50,
    backgroundColor: "#d9d9d9",
    fontFamily: "Arial, Helvetica, sans-serif",
    overflow: 'hidden',
  },
  header: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "12px",
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '20px',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
  },
  videoSection: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '90%',
    height: '100%',
    objectFit: 'contain',
  },
  bottomSection: {
    width: '100%',
    height: 'auto',
    marginTop: '30px',
  },
  newsTicker: {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "10px",
    fontSize: "16px",
    width: '100%',
    boxSizing: 'border-box',
  },
};

export default WelcomeScreen;
