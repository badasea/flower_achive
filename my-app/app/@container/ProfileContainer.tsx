'use client';

import { useRouter } from 'next/navigation';
import PostsGrid from "@/app/@components/PostsGrid";
import ProfileHeader from "@/app/@components/ProfileHeader";
import { posts } from "@/app/@constant/post";
import { useCallback, useEffect, useState } from "react";
import StoryForm from '../@components/StoryForm';
import HighlightForm from '../@components/HighlightForm';

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

  // highlight modal
  const [isHighlightModal, setIsHighlightModal] = useState<boolean>(false);

  // highlight progressbar
  const [highlightProgress, setHighlightProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentStory = posts[activeIndex];
  const postsLength = posts.length - 2;

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

  // highlight modal handler
  const handleHighlightModal = () => {
    setActiveIndex(0);
    setIsHighlightModal(true);
  }

  // story modal close
  const handleCloseModal = useCallback(() => {
    setProgress(0);
    setIsStoryModal(false);
  }, []);

  // highlight modal close
  const handleHighlightCloseModal = useCallback(() => {
    setActiveIndex(0);
    setHighlightProgress(0);
    setIsHighlightModal(false);
  }, []);

  const handleNextHighlight = useCallback(() => {
    setActiveIndex((i) => {
      const last = i >= postsLength - 1;
      if (last) {
        handleHighlightCloseModal();
        return 0; // 닫으면서 초기화(원하면 i 그대로 둬도 됨)
      }
      return i + 1;
    });
    setHighlightProgress(0);
  }, [postsLength, handleHighlightCloseModal]);

  const handlePrevHighlight = useCallback(() => {
    setActiveIndex((i) => Math.max(0, i - 1));
    setHighlightProgress(0);
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

useEffect(() => {
  if (!isHighlightModal) return;

  const startedAt = Date.now();
  const timer = window.setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const next = Math.min(100, (elapsed / DURATION_MS) * 100);

    setHighlightProgress(next);

    if (elapsed >= DURATION_MS) {
      window.clearInterval(timer);

      const last = activeIndex >= postsLength - 1;
      if (last) {
        handleHighlightCloseModal();
      } else {
        setActiveIndex((i) => i + 1);
        setHighlightProgress(0);
      }
    }
  }, TICK_MS);

  return () => window.clearInterval(timer);
}, [isHighlightModal, activeIndex, postsLength, handleHighlightCloseModal]);
  
  return (
    <>
      {/* profile form */}
      <ProfileHeader
       handleStoryModal={handleStoryModal}
       handleHighlightModal={handleHighlightModal} />
      
      {/* feed part */}
      <PostsGrid
       posts={posts}
       activeTab={activeTab}
       handleTabChange={handleTabChange}
       handleDetailPageTogo={handleDetailPageTogo} />

      {/* story modal */}
      {isStoryModal && (
        <StoryForm 
         progress={progress}
         isStoryModal={isStoryModal}
         handleCloseModal={handleCloseModal} />
       )}
      
      {/* highlight modal */}
      {isHighlightModal && (
        <HighlightForm 
         posts={posts.slice(0, -2)}
         activeIndex={activeIndex}
         currentStory={currentStory}
         highlightProgress={highlightProgress}
         isStoryModal={isHighlightModal}
         handleCloseModal={handleHighlightCloseModal}
         handleNextHighlight={handleNextHighlight}
         handlePrevHighlight={handlePrevHighlight}
          />
       )}       
    </>
  );
}

export default ProfileContainer;