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
    <div className="container">
      <div className="header">
        Welcome to Collins Collaboration Center - INDIA
      </div>

      <div className="content">
        <div className="video-section">
          <video autoPlay loop muted className="video">
            <source
              src="/connected ecosystem Data-ATC short .mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* <div className="guest-info">
          <div className="vertical-line"></div>
          <h2 className="welcome-text">
            GETC <br /> Welcomes
          </h2>

          <div className="guest">
            <h3>Jeanne Larsen</h3>
            <p>
              Principal Tech Fellow
              <br />
              Gen Engineering
            </p>
          </div>

          <div className="separator"></div>

          <div className="guest">
            <h3>Christopher Grant</h3>
            <p>
              Sr Tech Fellow
              <br />
              Software Engineering
            </p>
          </div>
        </div> */}
      </div>

      <div className="weather-section">
        <div className="weather-title"></div>
        <WeatherWidget />
      </div>

      <div className="news-ticker">
        <Ticker />
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @font-face {
          font-family: "Objektiv Mk2 Lite";
          src: url("/fonts/ObjektivMk2_Trial_Lt.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "Objektiv Mk2 Mid";
          src: url("/fonts/ObjektivMk2_Trial_Md.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Objektiv Mk2 Bold";
          src: url("/fonts/ObjektivMk2_Trial_Bd.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Frutiger World";
          src: url("/fonts/NeueFrutigerWorld-Medium.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        .container {
          background-color: #d9d9d9;
          padding: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .header {
          background-color: #000;
          color: white;
          top: 0;
          text-align: center;
          padding: 15px;
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          width: 100%;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          gap: 30px;
        }

        .video-section {
          width: 100%;
          padding: 0 50px;
          display: flex;
          justify-content: center;
        }

        .video {
          width: 90vw;
        }

        .vertical-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: #ce1126;
        }

        .guest-info {
          width: 25%;
          gap: 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .welcome-text {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .guest h3 {
          font-size: 1.3rem;
          font-weight: 600;
        }

        .guest p {
          color: #ce1126;
          font-size: 1rem;
          line-height: 1.2;
        }

        .separator {
          width: 50%;
          height: 2px;
          background-color: #b1b3b3;
          margin: 10px 0;
        }

        .weather-section {
          height: auto;
          width: 100%;
          padding: 0;
          margin-top: 20px;
          text-align: center;
        }

        .news-ticker {
          width: 100%;
          background-color: black;
          color: white;
          padding: 15px;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
