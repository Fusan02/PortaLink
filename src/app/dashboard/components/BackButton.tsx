import { useRouter } from 'next/navigation'
import React from 'react'
import { button } from './styles/backbutton.css';

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className={button}
      >
        もどる
      </button>
    </div>
  )
}

export default BackButton
