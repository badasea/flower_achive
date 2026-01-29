'use client';

import Image from 'next/image';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

interface StoryFormProps {
  progress: number;
  isStoryModal: boolean;
  handleCloseModal: () => void;
}

function StoryForm({ progress, isStoryModal, handleCloseModal }: StoryFormProps) {  
  return (
    <Dialog open={isStoryModal} onClose={handleCloseModal} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4">
        <DialogPanel
            className="
              relative w-full
              h-[80dvh]
              max-w-lg
              sm:max-w-sm
              rounded-2xl bg-white shadow-2xl overflow-hidden
            "
        >
          {/* progress bar */}
          <div className="absolute left-0 top-0 z-10 w-full px-3 pt-3">
            <div className="h-1.5 w-full bg-black/15 rounded-full overflow-hidden">
              <div className="h-full bg-black/50 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* story content */}
          <div className="relative h-full w-full pt-10">
            <Image
              src="/post_20.png"
              alt="story"
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-contain"
              priority
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}


export default StoryForm