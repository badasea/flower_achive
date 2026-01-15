// components/PostsGrid.tsx
import Image from 'next/image';

interface Post {
  id: number;
  src: string;
  likes: number;
  comments: number;
}

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <nav className="flex justify-around border-t pt-4 mb-6 uppercase tracking-widest font-semibold text-xs text-gray-600">
        <a className="flex flex-col items-center p-3 border-t-2 border-black -mt-px">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 1h8v2H7V4zm0 4h8v2H7V8zm0 4h8v2H7v-2z" clipRule="evenodd" />
          </svg>
          <span>Posts</span>
        </a>
        <a className="flex flex-col items-center p-3">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 0H5a2 2 0 00-2 2v4a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2zm7 0h-3a2 2 0 00-2 2v4a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2zM8 12H5a2 2 0 00-2 2v4a2 2 0 002 2h3a2 2 0 002-2v-4a2 2 0 00-2-2zm7 0h-3a2 2 0 00-2 2v4a2 2 0 002 2h3a2 2 0 002-2v-4a2 2 0 00-2-2z" />
          </svg>
          <span>Reels</span>
        </a>
        <a className="flex flex-col items-center p-3">
          <svg className="w-6 h-6 mb-1 border border-gray-400 rounded p-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm5 1H6v12h3V6z" clipRule="evenodd" />
          </svg>
          <span>Tagged</span>
        </a>
      </nav>
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {posts.map((post) => (
          <div key={post.id} className="relative group">
            <div className="w-full pt-[133%] md:pt-[125%] bg-gray-200 rounded-lg overflow-hidden"> {/* 3:4 비율 */}
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
    </div>
  );
}
