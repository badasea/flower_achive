'use client';

import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 text-sm text-black/60 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} 바다의 꽃꽂이 아카이브. All rights reserved.</p>
        <p>Made with Next.js · Tailwind CSS</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {/* GitHub */}
          <Link
            href="https://github.com/badasea/flower_achive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub open"
            className="inline-flex items-center gap-2 hover:text-black transition"
          >
            <FaGithub className="h-5 w-5" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com/bada___sea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Open"
            className="inline-flex items-center gap-2 hover:text-black transition"
          >
            <FaInstagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}


export default Footer;