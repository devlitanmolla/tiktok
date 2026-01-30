import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl px-4">
      <div className="max-w-2xl mx-auto h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          TTGrab
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-gray-400">
          <a className="relative hover:text-white transition-colors">
            Home
          </a>
          <a className="relative hover:text-white transition-colors">
            Features
          </a>
          <a className="relative hover:text-white transition-colors">
            API
          </a>
        </nav>

      </div>
    </header>
  );
}
