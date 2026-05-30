'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './Header.css';

function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL の ?q= の値で input を初期化
  const [keyword, setKeyword] = useState(searchParams.get('q') ?? '');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 初回スキップ
    }

    // debounce: 入力が止まって300ms後にURL更新
    const timer = setTimeout(() => {
      if (keyword.trim()) {
        router.replace(`/dashboard/movieflix/search?q=${encodeURIComponent(keyword)}`);
      } else {
        router.replace('/dashboard/movieflix'); // 空なら検索解除
      }
    }, 100);

    return () => clearTimeout(timer); // クリーンアップ
  }, [keyword, router]);

  return (
    <header className={toClassNames([styles.appHeader])}>
      <h1
        onClick={() => {
          window.location.href = '/dashboard/movieflix';
        }}
        className={toClassNames([styles.appTitle])}
        style={{ cursor: 'pointer' }}
      >
        MOVIEFLIX
      </h1>
      <div className={toClassNames([styles.headerListWrap])}>
        <p>ホーム</p>
        <p>新作・人気</p>
        <p>マイリスト</p>
      </div>
      <div className={toClassNames([styles.appSearchWrap])}>
        <input
          type='text'
          className={toClassNames([styles.appSearch])}
          placeholder='🔍 映画タイトルで検索...'
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
