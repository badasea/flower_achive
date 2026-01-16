import { useState } from "react";
import PostsGrid from "../@components/PostsGrid";
import ProfileHeader from "../@components/ProfileHeader";
import { posts } from "../@constant/post";
import { Post } from "../@types";


export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<string>('feed');
  const filteredPosts = posts.filter((post:Post) => post.type === activeTab);
  
  return (
    <main className="bg-white min-h-screen">
      <ProfileHeader />
      <PostsGrid posts={filteredPosts} activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}