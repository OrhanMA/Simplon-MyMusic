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
        <div className="min-h-screen pt-24 p-6 bg-white dark:bg-neutral-950 dark:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
