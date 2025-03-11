import Ticker from "../app/components/Ticker"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Ticker /> {/* Always show the scrolling news ticker */}
        {children}
      </body>
    </html>
  );
}
