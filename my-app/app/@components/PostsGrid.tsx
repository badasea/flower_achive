'use client';

import Image from 'next/image';
import { Post } from '../@types';
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";
import { FiTag } from "react-icons/fi";

interface PostsGridProps {
  posts: Post[];
  activeTab: string;
  handleTabChange: (tab: string) => void;
  handleDetailPageTogo: (id: number) => void;
}

function PostsGrid({ posts, activeTab, handleTabChange, handleDetailPageTogo }: PostsGridProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 네비게이션 - 기존과 동일 */}
      <nav className="flex justify-around mb-6 uppercase tracking-widest font-semibold text-xs text-gray-600">
        <button
          type="button"
          onClick={() => handleTabChange('feed')}
          className={`flex flex-col items-center p-3 border-b-2 ${
            activeTab === 'feed' ? 'border-black' : 'border-transparent opacity-60'
          }`}
        >
           <BsGrid3X3 className="h-6 w-6" />
        </button>
        {/* reel, tagged 버튼도 동일하게 수정 */}
        <button
          type="button"
          onClick={() => handleTabChange('reel')}
          className={`flex flex-col items-center p-3 border-b-2 ${
            activeTab === 'reel' ? 'border-black' : 'border-transparent opacity-60'
          }`}
        >
          <FaRegPlayCircle className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('tagged')}
          className={`flex flex-col items-center p-3 border-b-2 ${
            activeTab === 'tagged' ? 'border-black' : 'border-transparent opacity-60'
          }`}
        >
          <FiTag className="h-6 w-6" />
        </button>
      </nav>

      {/* 탭별 컨텐츠 조건부 렌더링 */}
      {activeTab === 'feed' ? (
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post: Post) => (
            <div key={post.id} className="relative group" onClick={() => handleDetailPageTogo(post.id)}>
              <div className="w-full h-full  pt-[100%] bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src={post.src}
                  alt={`Post ${post.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p className="text-2xl mb-4">{activeTab.toUpperCase()} 콘텐츠 준비중입니다...</p>
          <p className="text-sm">곧 업데이트될 예정입니다.</p>
        </div>
      )}
    </div>
  );
}

export default PostsGrid;
