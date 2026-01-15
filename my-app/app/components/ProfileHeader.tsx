// components/ProfileHeader.tsx
'use client';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-8 max-w-6xl mx-auto">
      <div className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <Image
          src=""
          alt="Profile"
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-full border-4 border-green-500 p-1"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center mb-4 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">바다의 꽃꽂이 아카이브</h1>
        </div>
        <ul className="flex gap-8 mb-4 text-sm">
          <li><span className="font-bold block text-lg">136</span> posts</li>
          <li><span className="font-bold block text-lg">40.5k</span> followers</li>
          <li><span className="font-bold block text-lg">302</span> following</li>
        </ul>
      </div>
    </header>
  );
}
