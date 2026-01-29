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

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[70vw] h-[70dvh] bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* 상단 progress bar */}
          <div className="absolute left-0 top-0 z-10 w-full px-3 pt-3">
            <div className="h-1.5 w-full bg-black/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* story content */}
          <div className="h-full w-full p-4 pt-10">
            <Image src="/post_20.png" alt="story" width={100} height={100} className='w-full h-full' />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}


export default StoryForm