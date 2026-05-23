import "./globals.css";

export const metadata = {
  title: "NitroShift",
  description: "NitroShift Streetwear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}