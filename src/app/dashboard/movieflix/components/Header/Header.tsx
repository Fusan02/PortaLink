'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './Header.css';

function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const previousPath = useRef<string | null>(null);

  // URL の ?q= の値で input を初期化
  const [keyword, setKeyword] = useState(searchParams.get('q') ?? '');

  useEffect(() => {
    const timer = setTimeout(() => {
      // 検索対象の文字列をURLから取得
      const currentQ = searchParams.get('q') ?? '';
      // 検索中にリロードした時に、再度以下の関数を動かすのを阻止.
      if (keyword === currentQ) return;

      // 検索欄に文字列がある時実行.
      if (keyword.trim()) {
        // キーワード入力時のパスを記録しておく. （search?q=... URLにいるときにセットすると search パスが保存されてしまい空文字検索のページに戻されてしまう）
        if (!previousPath.current && !pathName.includes('/search')) {
          previousPath.current = pathName; // 検索開始時のパスを保存
          sessionStorage.setItem('movieflix:previousPath', pathName); // キャッシュにも保存
        }
        router.replace(`/dashboard/movieflix/search?q=${encodeURIComponent(keyword)}`);
        // 文字列がない場合. （検索欄が空になったら）
      } else {
        const back =
          previousPath.current ??
          sessionStorage.getItem('movieflix:previousPath') ??
          '/dashboard/movieflix';

        previousPath.current = null; // リセット
        sessionStorage.removeItem('movieflix:previousPath'); // 使ったらキャッシュから削除
        router.replace(back);
      }
    }, 200); // 入力が止まって200ms後にURL更新

    // 200ms 以内の入力が連続した場合、前回のタイマーを消していき最後のタイマーだけ残して発火させる.
    return () => clearTimeout(timer);
  }, [keyword, router, searchParams, pathName]);

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
