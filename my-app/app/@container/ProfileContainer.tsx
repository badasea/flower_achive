'use client';

import { useRouter } from 'next/navigation';
import PostsGrid from "@/app/@components/PostsGrid";
import ProfileHeader from "@/app/@components/ProfileHeader";
import { posts } from "@/app/@constant/post";
import { useState } from "react";
import StoryForm from '../@components/StoryForm';

function ProfileContainer() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>('feed');
  const [isStoryModal, setIsStoryModal] = useState<boolean>(false);

  // tab handler
  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  }

  // detail page router
  const handleDetailPageTogo = (id:number) => {
    router.push(`/detail/${id}`);
  }

  // story modal handler
  const handleStoryModal = () => {
    setIsStoryModal(true);
  }

  // story modal close
  const handleCloseModal = () => {
    setIsStoryModal(false);
  };
  
  return (
    <>
      <ProfileHeader handleStoryModal={handleStoryModal}/>
      {isStoryModal && (
        <StoryForm 
         isStoryModal={isStoryModal}
         handleCloseModal={handleCloseModal} />
       )}
      <PostsGrid
       posts={posts}
       activeTab={activeTab}
       handleTabChange={handleTabChange}
       handleDetailPageTogo={handleDetailPageTogo} />
    </>
  );
}

export default ProfileContainer;