'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import DetailForm from '../@components/DetailForm';
import { detail } from '../@constant/detail';

function DetailContainer() {
  const router = useRouter();
  const pathname = usePathname(); 
  const params = useParams<{ id: string }>(); // /detail/[id]
  const id = Number(params?.id);

  const selected = detail.filter(d => d.id === id);

  // main page router
  const handleMainPageTogo = () => {
    router.back();
  }

  const handleShare = async () => {
    const url = `${window.location.origin}${pathname}`;

    // Web Share API 우선
    if (navigator.share) {
      await navigator.share({ url }); // 필요하면 title/text도 추가 가능
      return;
    }

    // fallback: clipboard copy
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(url);
      alert('링크가 복사되었습니다.');
    } else {
      // 최후 fallback
      window.prompt('이 링크를 복사하세요:', url);
    }
  }


  return (
    <>
      <DetailForm 
       detail={selected}
       handleMainPageTogo={handleMainPageTogo}
       handleShare={handleShare} />
    </>
  );
}

export default DetailContainer;