import Image from 'next/image';
import { Post } from '../@types';

interface PostsGridProps {
  posts: Post[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function PostsGrid({ posts, activeTab, onTabChange }: PostsGridProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 네비게이션 - 기존과 동일 */}
      <nav className="flex justify-around pt-4 mb-6 uppercase tracking-widest font-semibold text-xs text-gray-600">
        <button
          type="button"
          onClick={() => onTabChange('feed')}
          className={`flex flex-col items-center p-3 border-b-2 ${
            activeTab === 'feed' ? 'border-black' : 'border-transparent opacity-60'
          }`}
        >
          <Image src="/flower_achive/feed.png" alt="feed" width={24} height={24} />
        </button>
        {/* reel, tagged 버튼도 동일하게 수정 */}
        <button
          type="button"
          onClick={() => onTabChange('reel')}
          className={`flex flex-col items-center p-3 border-b-2 ${
            activeTab === 'reel' ? 'border-black' : 'border-transparent opacity-60'
          }`}
        >
          <Image src="/flower_achive/reel.jpg" alt="reel" width={24} height={24} />
        </button>
        <button
          type="button"
          onClick={() => onTabChange('tagged')}
          className={`flex flex-col items-center p-3 border-b-2 ${
            activeTab === 'tagged' ? 'border-black' : 'border-transparent opacity-60'
          }`}
        >
          <Image src="/flower_achive/tagged.png" alt="tagged" width={24} height={24} />
        </button>
      </nav>

      {/* 탭별 컨텐츠 조건부 렌더링 */}
      {activeTab === 'feed' ? (
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {posts.map((post: Post) => (
            <div key={post.id} className="relative group">
              <div className="w-full pt-[133%] md:pt-[125%] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={post.src}
                  alt={`Post ${post.id}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 p-2">
                <span className="flex items-center text-white font-semibold">
                  <svg className="w-5 h-5 mr-1 fill-current" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5H6zm4-.5a4 4 0 110 8 4 4 0 010-8zm2-1a1 1 0 11-2 0 1 1 0 012 0zm-7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  {post.likes.toLocaleString()}
                </span>
                <span className="flex items-center text-white font-semibold">
                  <svg className="w-5 h-5 mr-1 fill-current" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm0 6h9v2H5v-2zm2 0h2v2H7v-2z" />
                  </svg>
                  {post.comments.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-2xl mb-4">{activeTab.toUpperCase()} 콘텐츠 준비중입니다...</p>
          <p className="text-sm">곧 업데이트될 예정입니다.</p>
        </div>
      )}
    </div>
  );
}

export default PostsGrid;
