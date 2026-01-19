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
    <>
      <ProfileHeader />
      <PostsGrid posts={posts} activeTab={activeTab} handleTabChange={handleTabChange} />
    </>
  );
}

export default ProfileContainer;