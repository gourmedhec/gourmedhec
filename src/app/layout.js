import "./globals.css";

export const metadata = {
  title: "Gourm'Edhec",
  description: "Gourm'Edhec site officiel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
