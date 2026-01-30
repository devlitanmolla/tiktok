import React from "react";
import { Instagram, Twitter, Github, Facebook, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">

        {/* Brand */}
        <h3 className="mb-6 text-lg font-semibold tracking-tight
          bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          TTGrab
        </h3>

        {/* Social / Profile Links */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.litan-molla.com/"
            target="_blank"
            className="text-gray-500 hover:text-white hover:scale-110 transition-all"
            aria-label="Website"
          >
            <Globe size={20} />
          </a>

          <a
            href="https://bd.linkedin.com/in/litanmolla"
            target="_blank"
            className="text-gray-500 hover:text-white hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.facebook.com/LITANMOLLA09/"
            target="_blank"
            className="text-gray-500 hover:text-white hover:scale-110 transition-all"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://github.com/litanmolla/"
            target="_blank"
            className="text-gray-500 hover:text-white hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] text-center mb-2">
          © {new Date().getFullYear()} TTGrab • All Rights Reserved
        </p>

        {/* Made by */}
        <p className="text-[11px] text-gray-500">
          Made by{" "}
          <a
            href="https://www.litan-molla.com/"
            target="_blank"
            className="font-medium bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:opacity-90"
          >
            LITAN MOLLA
          </a>
        </p>
      </div>
    </footer>
  );
}
