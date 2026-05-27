'use client';

import { useState } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './Header.css';

function Header() {
  const [keyword, setKeyword] = useState('');

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
