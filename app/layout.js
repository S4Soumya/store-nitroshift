import "./globals.css";

export const metadata = {
  title: "NitroShift",
  description: "Motovlogging Streetwear Apparel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}