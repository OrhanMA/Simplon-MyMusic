import Header from "@/components/Header";
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
        <div className="min-h-screen p-6 bg-neutral-950 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
