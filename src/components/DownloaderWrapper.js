"use client";
import React, { useState } from 'react';
import Hero from './Hero';
import ResultCard from './ResultCard';

export default function DownloaderWrapper() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true); setError(""); setVideoData(null);

    try {
      const response = await fetch("https://tiktok-api-iota.vercel.app/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      data.success ? setVideoData(data) : setError("Video not found.");
    } catch (err) {
      setError("Server error. Try again.");
    } finally { setLoading(false); }
  };

const downloadFile = async (fileUrl, fileName) => {
  setDownloading(true);
  try {
    const res = await fetch(fileUrl);
    const blob = await res.blob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
  } catch {
    window.open(fileUrl, "_blank"); // iOS fallback
  } finally {
    setDownloading(false);
  }
};


  return (
    <>
      <Hero url={url} setUrl={setUrl} handleFetch={handleFetch} loading={loading} />
      {error && <p className="text-red-500 text-center mb-6 text-xs font-bold uppercase tracking-widest">{error}</p>}
      <ResultCard videoData={videoData} downloading={downloading} downloadFile={downloadFile} />
    </>
  );
}