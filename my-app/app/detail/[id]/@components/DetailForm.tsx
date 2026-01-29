'use client';

import Image from 'next/image';
import { Detail } from '../@types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface DetailFormProps {
  detail: Detail[];
  handleMainPageTogo: () => void;
}

function DetailForm({ detail, handleMainPageTogo } : DetailFormProps) {
  return (
 <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={() => handleMainPageTogo()} className="text-sm text-gray-600 hover:text-black">
          ← back
        </button>
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <div className="flex items-center gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold whitespace-pre-line break-words">
              {detail[0].content}
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default DetailForm;
