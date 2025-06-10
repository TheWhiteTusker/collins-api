"use client";

// import { useEffect } from "react";
// import WeatherWidget from "./WeatherWidget";
import "../globals.css";

const WelcomeScreen = () => {
  const news = [
    "RTX's Collins Aerospace enhances capabilities to speed Marine Corps decision-making in battle",
    "Satair and RTX's Collins Aerospace extend 50-year relationship",
    "RTX's Collins Aerospace launches Ascentia® Repeaters with Republic Airways",
    "RTX's Collins Aerospace wins Crystal Cabin Award for its galley.ai solution",
    "Heathrow AOC and RTX's Collins Aerospace ink contract extension to provide streamlined passenger experience",
    "RTX's Collins Aerospace joins the Digital Alliance for Aviation to expand predictive maintenance and health monitoring solutions",
    "RTX's Collins Aerospace unveils enhanced self-service solutions at Passenger Terminal Expo",
    "RTX's Collins Aerospace demonstrates innovative seating modification and upgrade concept"
  ];

  // useEffect(() => {
  //   const checkForErrors = async () => {
  //     try {
  //       const response = await fetch("/api/collins/news");
  //       if (response.status === 504) {
  //         console.error("504 Error: Refreshing page...");
  //         setTimeout(() => {
  //           window.location.reload();
  //         }, 3000);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   checkForErrors();
  //   const interval = setInterval(checkForErrors, 10000);
  //   return () => clearInterval(interval);
  // }, []);
  // useEffect(() => {
  //   const scriptId = "weatherwidget-io-js";
  //   if (!document.getElementById(scriptId)) {
  //     const script = document.createElement("script");
  //     script.id = scriptId;
  //     script.src = "https://weatherwidget.io/js/widget.min.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);

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

      {/* <div style={styles.weatherWidget}>
        <a
          className="weatherwidget-io"
          href="https://forecast7.com/en/12d9777d59/bengaluru/"
          data-label_1="BENGALURU"
          data-label_2="WEATHER"
          data-theme="mountains"
        >
          BENGALURU WEATHER
        </a>
      </div> */}

      {/* <div style={styles.bottomSection}> */}
      <div style={styles.tickerContainer}>
        <div style={styles.ticker}>
          <div style={styles.tickerContent}>
            {news.map((item, index) => (
              <span key={index} style={styles.tickerItem}>
                {item} •
              </span>
            ))}
            {news.map((item, index) => (
              <span key={`duplicate-${index}`} style={styles.tickerItem}>
                {item} •
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: "120px 50px",
    backgroundColor: "#d9d9d9",
    fontFamily: "Arial, Helvetica, sans-serif",
    overflow: 'hidden',
  },
  header: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "12px",
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Objektiv Mk2 Lite, Arial, sans-serif'
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
    width: '95%',
    height: '100%',
    objectFit: 'contain',
  },
  weatherWidget: {
    marginTop: '20px',
  },
  tickerContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000000',
    padding: '10px 0',
  },
  ticker: {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  tickerContent: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    animation: 'ticker 120s linear infinite',
  },
  tickerItem: {
    color: '#ffffff',
    fontSize: '24px',
    padding: '0 20px',
  },
};

export default WelcomeScreen;
