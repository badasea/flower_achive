'use client';

import { useParams, useRouter } from 'next/navigation';
import DetailForm from '../@components/DetailForm';
import { detail } from '../@constant/detail';

function DetailContainer() {
  const router = useRouter();
  const params = useParams<{ id: string }>(); // /detail/[id]
  const id = Number(params?.id);

  // main page router
  const handleMainPageTogo = () => {
    router.back();
  }

  const selected = detail.filter(d => d.id === id);

  return (
    <>
      <DetailForm 
       detail={selected}
       handleMainPageTogo={handleMainPageTogo} />
    </>
  );
}

export default DetailContainer;