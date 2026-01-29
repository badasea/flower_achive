'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

interface StoryFormProps {
  isStoryModal: boolean;
  handleCloseModal: () => void;
}

function StoryForm({ isStoryModal, handleCloseModal }: StoryFormProps) {
  return (
    <Dialog open={isStoryModal} onClose={handleCloseModal} className="relative z-50">
      {/* 배경(뒤가 살짝 보이게) */}
      <DialogBackdrop className="fixed inset-0 bg-black/50" /> {/* 투명도는 취향대로 */} 
      
      {/* 패널을 가운데로 */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          className="
            relative
            w-full
            max-w-[70vw]
            h-[70dvh]
            bg-white
            rounded-2xl
            shadow-2xl
            overflow-hidden
          "
        >
          {/* story content */}
          <div className="h-full w-full p-4">스토리</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}


export default StoryForm