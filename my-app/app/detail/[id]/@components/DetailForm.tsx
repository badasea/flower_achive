'use client';

import Image from 'next/image';
import { Detail } from '../@types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FiArrowLeft, FiHeart } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";

interface DetailFormProps {
  detail: Detail[];
  handleMainPageTogo: () => void;
  handleShare: () => void;
}

function DetailForm({ detail, handleMainPageTogo, handleShare } : DetailFormProps) {
  return (
 <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={handleMainPageTogo}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
          aria-label="Back"
        >
          <FiArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative w-full">
          <div className="relative w-full">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              {detail[0].src.map((src, idx) => (
                <SwiperSlide key={`${detail[0].id}-${idx}`}>
                  <div className="relative w-full pt-[100%]">
                    <Image src={src} alt={`Post ${detail[0].id}-${idx}`} fill className="object-cover" priority={idx===0} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>          
          </div>
        </div>

         <div className="flex items-center justify-start gap-5 py-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-black"
            aria-label="Like"
          >
            <FiHeart className={'h-6 w-6 fill-red-500 text-red-500'} />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-black"
            aria-label="Share"
            onClick={() => handleShare()}
          >
            <FaRegPaperPlane className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <div className="min-w-0">
            <p className="text-sm font-semibold whitespace-pre-line break-words">
              {detail[0].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailForm;
