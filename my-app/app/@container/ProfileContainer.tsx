import { useState } from "react";
import PostsGrid from "../@components/PostsGrid";
import ProfileHeader from "../@components/ProfileHeader";
import { posts } from "../@constant/post";


function ProfileContainer() {
  const [activeTab, setActiveTab] = useState<string>('feed');

  // tab handler
  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  }
  
  return (
    <main className="bg-white min-h-screen">
      <ProfileHeader />
      <PostsGrid posts={posts} activeTab={activeTab} handleTabChange={handleTabChange} />
    </main>
  );
}

export default ProfileContainer;