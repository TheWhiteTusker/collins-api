"use client";

import { useEffect } from "react";
import "../globals.css";

const WelcomeScreen = () => {
  useEffect(() => {
    // Weather Widget Script Loading
    const loadWeatherWidget = () => {
      const script = document.createElement('script');
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      document.body.appendChild(script);
    };

    // Load weather widget
    loadWeatherWidget();

    // Error checking for news
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

  // Static news items for testing
  const newsItems = [
    "Welcome to Collins Aerospace",
    "Innovation in Aviation",
    "Building the Future of Aerospace",
    "Committed to Excellence"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Welcome to Collins Collaboration Center - INDIA
      </div>

      <div style={styles.mainContent}>
        <div style={styles.videoSection}>
          <video autoPlay loop muted playsInline style={styles.video}>
            <source
              src="/connected ecosystem Data-ATC short .mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.weatherSection}>
          {/* Direct weather widget implementation */}
          <a 
            className="weatherwidget-io" 
            href="https://forecast7.com/en/12d9777d59/bengaluru/"
            data-label_1="BENGALURU" 
            data-label_2="WEATHER" 
            data-theme="original"
            data-basecolor="#000000"
            data-textcolor="#ffffff"
          >
            BENGALURU WEATHER
          </a>
        </div>
        
        <div style={styles.newsTicker}>
          <div style={styles.tickerTrack}>
            {newsItems.map((item, index) => (
              <span key={index} style={styles.tickerItem}>
                {item} • 
              </span>
            ))}
          </div>
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
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  bottomSection: {
    width: '100%',
    marginTop: 'auto',
  },
  weatherSection: {
    width: '100%',
    marginBottom: '10px',
    backgroundColor: '#000000',
    padding: '10px',
  },
  newsTicker: {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "10px",
    fontSize: "16px",
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  tickerTrack: {
    display: 'inline-block',
    animation: 'ticker 30s linear infinite',
    whiteSpace: 'nowrap',
  },
  tickerItem: {
    margin: '0 20px',
  },
};

// Add this to your globals.css
const globalStyles = `
  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .weatherwidget-io {
    width: 100% !important;
    height: 83px !important;
    display: block !important;
  }
`;

// Add the global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

export default WelcomeScreen;