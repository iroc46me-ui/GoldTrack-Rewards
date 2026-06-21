export const metadata = {
  title: "GoldTrack Rewards",
  description: "Our Community. Our Initiatives. Our Legacy."
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