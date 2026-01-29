'use client';

import { useRouter } from 'next/navigation';
import PostsGrid from "@/app/@components/PostsGrid";
import ProfileHeader from "@/app/@components/ProfileHeader";
import { posts } from "@/app/@constant/post";
import { useCallback, useEffect, useState } from "react";
import StoryForm from '../@components/StoryForm';

function ProfileContainer() {
  const router = useRouter();

  // tab item
  const [activeTab, setActiveTab] = useState<string>('feed');

  // story modal
  const [isStoryModal, setIsStoryModal] = useState<boolean>(false);

  // story progressbar
  const DURATION_MS = 5000;
  const TICK_MS = 50;
  const [progress, setProgress] = useState(0);

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
  const handleCloseModal = useCallback(() => {
    setProgress(0);
    setIsStoryModal(false);
  }, []);

  useEffect(() => {
    if (!isStoryModal) return;

    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.min(100, (elapsed / DURATION_MS) * 100);

      setProgress(next);

      if (elapsed >= DURATION_MS) {
        window.clearInterval(timer);
        handleCloseModal();
      }
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [isStoryModal, handleCloseModal]);  
  
  return (
    <>
      <ProfileHeader handleStoryModal={handleStoryModal}/>
      <PostsGrid
       posts={posts}
       activeTab={activeTab}
       handleTabChange={handleTabChange}
       handleDetailPageTogo={handleDetailPageTogo} />
      {isStoryModal && (
        <StoryForm 
         progress={progress}
         isStoryModal={isStoryModal}
         handleCloseModal={handleCloseModal} />
       )}
    </>
  );
}

export default ProfileContainer;