'use client';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 text-sm text-black/60 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} 바다의 꽃꽂이 아카이브. All rights reserved.</p>
        <p className="text-black/40">Made with Next.js · Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;