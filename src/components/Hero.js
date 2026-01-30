import React from "react";
import { Link as LinkIcon, RefreshCcw } from "lucide-react";

export default function Hero({ url, setUrl, handleFetch, loading }) {
  return (
    <section className="text-center mb-12">
      
      {/* linear Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight 
        bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        TikTok Downloader
      </h1>

      <p className="text-gray-500 text-sm mb-10">
        High-quality video downloads without watermark.
      </p>

      <form onSubmit={handleFetch} className="max-w-2xl mx-auto w-full">
        <div className="bg-[#161616] p-1.5 rounded-xl border border-white/10 
          flex flex-col md:flex-row gap-2 shadow-xl 
          focus-within:border-purple-500/50 transition-all">
          
          <div className="flex-1 flex items-center px-4">
            <LinkIcon className="text-purple-400 mr-3" size={18} />
            <input
              type="text"
              placeholder="Paste video link here..."
              className="w-full bg-transparent border-none focus:ring-0 text-white py-3 text-sm outline-0"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          {/* linear Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-linear-to-r from-purple-500 to-pink-500 
              text-white px-8 py-3 rounded-lg font-semibold
              hover:opacity-90 transition-all active:scale-95 
              disabled:opacity-50 flex items-center justify-center min-w-[120px] cursor-pointer"
          >
            {loading ? (
              <RefreshCcw className="animate-spin" size={18} />
            ) : (
              "DOWNLOAD"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
