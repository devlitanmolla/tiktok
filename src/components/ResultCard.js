import React from 'react';
import { Download, Music, User, RefreshCcw } from 'lucide-react';

export default function ResultCard({ videoData, downloading, downloadFile }) {
    if (!videoData) return null;

    return (
        <div className="bg-[#111] rounded-xl border border-white/10 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-2xl mx-auto">
            {/* 📺 Full Width Video with Auto Height */}
            <div className="w-full bg-black">
                <video
                    src={videoData.videoUrl}
                    controls
                    className="w-full h-auto block"
                    poster={videoData.cover}
                />
            </div>

            <div className="p-6">
                <div className="mb-6 text-left">
                    <h2 className="text-lg font-bold leading-snug mb-2 text-white">{videoData.title}</h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <User size={14} />
                        <span>@{videoData.author?.name}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <button
                        onClick={() =>
                            downloadFile(videoData.videoUrl, `TK-Flow-${videoData.id}.mp4`)
                        }
                        disabled={downloading}
                        className="
    w-full cursor-pointer py-4 rounded-lg
    bg-linear-to-r from-purple-500 to-pink-500
    text-white font-semibold
    transition-all flex items-center justify-center gap-3
    hover:opacity-90 active:scale-[0.98]
    disabled:opacity-60
  "
                    >
                        {downloading ? (
                            <RefreshCcw className="animate-spin" size={20} />
                        ) : (
                            <>
                                <Download size={18} />
                                Download Video
                            </>
                        )}
                    </button>

                </div>
            </div>
        </div>
    );
}