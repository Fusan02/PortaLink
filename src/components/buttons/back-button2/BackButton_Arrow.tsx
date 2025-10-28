'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { button } from './styles/backbutton.css';
import { toClassNames } from '@/utils/toClassNames_utils';

export const BackButton_Arrow = ({
  className,
}: {
  className?: string;
}) => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className={toClassNames([
          className,
          button,
        ])}
      >
        ←
      </button>
    </div>
  );
};
