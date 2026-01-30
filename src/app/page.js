import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloaderWrapper from '../components/DownloaderWrapper';

// ✅ SEO Metadata
export const metadata = {
  title: 'TikTok Video Downloader | No Watermark | TTGrab',
  description: 'Download TikTok videos in HD without watermark for free. Fast, secure, and easy to use TikTok video and audio downloader.',
  keywords: 'tiktok downloader, tiktok video download, no watermark, tk-flow, download tiktok mp4',
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