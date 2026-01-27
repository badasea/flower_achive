'use client';

import { useRouter } from 'next/navigation';
import PostsGrid from "@/app/@components/PostsGrid";
import ProfileHeader from "@/app/@components/ProfileHeader";
import { posts } from "@/app/@constant/post";
import { useState } from "react";



function ProfileContainer() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>('feed');

  // tab handler
  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  }

  // detail page router
  const handleDetailPageTogo = (id:number) => {
    router.push(`/detail/${id}`);
  }
  
  return (
    <>
      <ProfileHeader />
      <PostsGrid
       posts={posts}
       activeTab={activeTab}
       handleTabChange={handleTabChange}
       handleDetailPageTogo={handleDetailPageTogo} />
    </>
  );
}

export default ProfileContainer;