// Ticker.jsx
"use client";
import { useEffect, useState } from 'react';

const Ticker = () => {
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

  return (
    <div style={styles.tickerContainer}>
      <div style={styles.ticker}>
        <div style={styles.tickerContent}>
          {news.map((item, index) => (
            <span key={index} style={styles.tickerItem}>
              {item} • 
            </span>
          ))}
          {/* Duplicate the news items to create seamless loop */}
          {news.map((item, index) => (
            <span key={`duplicate-${index}`} style={styles.tickerItem}>
              {item} • 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
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
    animation: 'ticker 180s linear infinite',
  },
  tickerItem: {
    color: '#ffffff',
    fontSize: '20px',
    padding: '0 10px',
  },
};

export default Ticker;