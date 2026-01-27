'use client';

import { useRouter } from 'next/navigation';
import DetailForm from '../@components/DetailForm';
import { detail } from '../@constant/detail';

function DetailContainer() {
  const router = useRouter();

  // main page router
  const handleMainPageTogo = () => {
    router.back();
  }

  return (
    <>
      <DetailForm 
       detail={detail}
       handleMainPageTogo={handleMainPageTogo} />
    </>
  );
}

export default DetailContainer;