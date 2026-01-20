import Image from 'next/image';
import { Post } from "@/app/@types";

interface FeedProps {
  posts: Post[];
}

function FeedForm({ posts }: FeedProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
        {posts.map((post: Post) => (
        <div key={post.id} className="relative group">
            <div className="w-full h-full  pt-[100%] bg-gray-200 rounded-lg overflow-hidden relative">
            <Image
                src={post.src}
                alt={`Post ${post.id}`}
                fill
                className="object-cover"
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
  );
}

export default FeedForm