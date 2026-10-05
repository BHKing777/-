import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
  title: "NBA",
  description: "NBA top players, teams and best of 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-100 text-black">
        <Nav />
        {children}
      </body>
    </html>
  );
}
