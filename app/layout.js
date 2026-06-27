import "./globals.css";

export const metadata = {
  title: "Social Agent | AI-Powered Social Media Automation",
  description: "Automate your social media scheduling, video uploads, and AI copywriting across LinkedIn, Facebook, Instagram, YouTube, and TikTok securely.",
  openGraph: {
    title: "Social Agent | AI-Powered Social Media Automation",
    description: "Automate your social media posting securely using local agents and AI.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
