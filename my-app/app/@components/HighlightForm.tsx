'use client';

import Image from 'next/image';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Post } from '../@types';

interface HighlightFormProps {
  posts: Post[];
  activeIndex: number;
  currentStory: Post;
  highlightProgress: number;
  isStoryModal: boolean;
  handleCloseModal: () => void;
  handleNextHighlight: () => void;
  handlePrevHighlight: () => void;
}

function HighlightForm({ posts,
                         activeIndex,
                         currentStory,
                         highlightProgress,
                         isStoryModal,
                         handleCloseModal,
                         handleNextHighlight,
                         handlePrevHighlight }: HighlightFormProps) {  
return (
    <Dialog open={isStoryModal} onClose={handleCloseModal} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4">
        <DialogPanel className="relative w-full h-[80dvh] max-w-lg sm:max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden">
          {/* segmented progress */}
          <div className="absolute left-0 top-0 z-10 w-full px-3 pt-3">
            <div className="flex gap-1">
              {posts.map((s, i) => {
                const w = i < activeIndex ? 100 : i === activeIndex ? highlightProgress : 0;
                return (
                  <div key={s.id} className="h-1.5 flex-1 bg-black/15 rounded-full overflow-hidden">
                    <div className="h-full bg-black/50 rounded-full" style={{ width: `${w}%` }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* story content */}
          <div className="relative h-full w-full pt-10 bg-white">
            {currentStory && (
              <Image
                src={currentStory.src}
                alt={String(currentStory.id) ?? 'story'}
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-contain"
                priority
              />
            )}
          </div>

            {/* 좌/우 탭 영역 */}
            <div className="absolute inset-0 z-20 flex">
              <button
                type="button"
                aria-label="Previous story"
                className="h-full w-1/2 bg-transparent"
                onClick={handlePrevHighlight}
              />
              <button
                type="button"
                aria-label="Next story"
                className="h-full w-1/2 bg-transparent"
                onClick={handleNextHighlight}
              />
            </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}


export default HighlightForm;