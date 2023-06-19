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
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}
