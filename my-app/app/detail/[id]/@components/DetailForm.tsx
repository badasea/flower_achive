'use client';

// import Image from 'next/image';

interface DetailFormProps {
  handleMainPageTogo: () => void;
}

function DetailForm({ handleMainPageTogo } : DetailFormProps) {
  return (
    <div onClick={() => handleMainPageTogo()}>
      test
    </div>
  );
}

export default DetailForm;
