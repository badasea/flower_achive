'use client';

import { useRouter } from 'next/navigation';
import DetailForm from '../@components/DetailForm';

function DetailContainer() {
  const router = useRouter();


  // main page router
  const handleMainPageTogo = () => {
    router.push(`/`);
  }
  return (
    <>
      <DetailForm 
       handleMainPageTogo={handleMainPageTogo} />
    </>
  );
}

export default DetailContainer;