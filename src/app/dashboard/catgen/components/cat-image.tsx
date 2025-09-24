'use client';

import React, { useState } from 'react';
import fetchImage from '../api/fetch-image';
import { button, catButton, frame, frame_cat, img, page } from '../styles/catgen.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type CatImageProps = {
    url: string;
};

const CatImage = ({ url }: CatImageProps) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl('');
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={page}>
      <button
        onClick={refreshImage}
        className={`${button} ${catButton}`}
      >
        他のニャンコも見る
      </button>
      <div className={`${frame} ${frame_cat}`}>
        {imageUrl && <Image src={imageUrl} alt='生成された猫の画像' width={400} height={400} className={img} unoptimized />}
      </div>
      <button 
        onClick={() => router.back()}
        className={`${button} ${catButton}`}
      >
        もどる
      </button>
    </div>
  );
};

export default CatImage;
