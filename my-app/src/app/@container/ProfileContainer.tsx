import PostsGrid from "@/app/@components/PostsGrid";
import ProfileHeader from "@/app/@components/ProfileHeader";
import { posts } from "@/app/@constant/post";
import { useState } from "react";



function ProfileContainer() {
  const [activeTab, setActiveTab] = useState<string>('feed');

  // tab handler
  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  }
  
  return (
    <>
      <ProfileHeader />
      <PostsGrid posts={posts} activeTab={activeTab} handleTabChange={handleTabChange} />
    </>
  );
}

export default ProfileContainer;