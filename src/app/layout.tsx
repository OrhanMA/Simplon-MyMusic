import Header from "@/components/Header";
import Script from "next/script";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <div className="p-6">{children}</div>
        <Script src="https://sdk.scdn.co/spotify-player.js"></Script>
      </body>
    </html>
  );
}
