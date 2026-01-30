import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloaderWrapper from '../components/DownloaderWrapper';

export const metadata = {
  title: "TikTok Video Downloader | No Watermark | TTGrab",
  description:
    "Download TikTok videos in HD without watermark for free. Fast, secure, and easy-to-use TikTok video & audio downloader.",

  keywords: [
    "tiktok downloader",
    "tiktok video downloader",
    "tiktok download no watermark",
    "download tiktok mp4",
    "tiktok audio downloader",
    "save tiktok videos",
    "free tiktok downloader",
    "online tiktok downloader",
    "ttgrab",
    "tk-flow"
  ],

  authors: [
    {
      name: "Litan Molla",
      url: "https://www.litan-molla.com/",
    },
  ],
  creator: "Litan Molla",
  publisher: "TTGrab",

  metadataBase: new URL("https://tiktok-eta-one.vercel.app"),

  openGraph: {
    title: "TTGrab – TikTok Video Downloader (No Watermark)",
    description:
      "Download TikTok videos in HD without watermark using TTGrab. Simple, fast, and free.",
    url: "https://tiktok-eta-one.vercel.app",
    siteName: "TTGrab",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "TTGrab TikTok Video Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TTGrab – TikTok Video Downloader",
    description:
      "Download TikTok videos in HD without watermark using TTGrab.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://tiktok-eta-one.vercel.app",
  },
};


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-inter">
      <Navbar />
      <main className="px-4 py-12 flex-1">
        <DownloaderWrapper />
      </main>
      <Footer />
    </div>
  );
}