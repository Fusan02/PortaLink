import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
      >
        もどる
      </button>
    </div>
  )
}

export default BackButton
