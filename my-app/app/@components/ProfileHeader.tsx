// components/ProfileHeader.tsx
"use client";
import Image from "next/image";

interface ProfileHeaderProps {
  handleStoryModal: () => void;
  handleHighlightModal: () => void;
}

function ProfileHeader({ handleStoryModal, handleHighlightModal } : ProfileHeaderProps) {
  return (
    <>
    <header className="flex gap-10 flex-row items-center p-4 md:p-8 max-w-6xl mx-auto">
      <div className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 mb-4 md:mb-0 md:mr-8" onClick={() => handleStoryModal()}>
        <Image
          src="/profile.png"
          alt="Profile"
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-full border-4 border-green-500 p-1"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center mb-4 gap-4">
          <h1 className="text-1xl font-bold">바다의 꽃꽂이 아카이브</h1>
        </div>
        <ul className="flex gap-8 mb-4 text-sm">
          <li>
            <span className="font-bold block text-lg">22</span> posts
          </li>
          <li>
            <span className="font-bold block text-lg">2025</span>since
          </li>
        </ul>
      </div>
    </header>
      <div className="flex flex-row items-center pl-4 pb-4 md:p-8 max-w-6xl mx-auto">
        <div
          className="w-20 flex-shrink-0 flex flex-col items-center gap-1"
          onClick={handleHighlightModal}
        >
          <div className="w-20 h-20">
            <Image
              src="/post_2.png"
              alt="highlight"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full border-4 border-gray-300 p-1"
            />
          </div>

          <span className="block w-full text-center leading-none">🌹</span>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;