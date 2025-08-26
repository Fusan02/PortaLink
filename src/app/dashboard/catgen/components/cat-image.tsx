'use client'

import React, { useState } from 'react'
import fetchImage from '../api/fetch-image';
import { button, catButton, frame, frame_cat, img, page } from '../styles/catgen.css';

type CatImageProps = {
    url: string;
};

const CatImage = ({ url }: CatImageProps) => {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
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
        {imageUrl && <img src={imageUrl} className={img} />}
      </div>
    </div>
  )
}

export default CatImage;
