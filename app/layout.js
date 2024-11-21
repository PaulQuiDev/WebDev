import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Paul Raguet",
  description: "Ce projet est un portfolio web interactif développé avec Next.js. Il présente mon parcours académique, mes compétences, mes expériences professionnelles et mes projets techniques. Organisé avec une mise en page claire, le portfolio inclut une barre de navigation, un encart de contact avec mes informations personnelles, et plusieurs sections dédiées à mes formations, projets, et expériences professionnelles. Ce portfolio est conçu pour être à la fois informatif et visuellement attractif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
