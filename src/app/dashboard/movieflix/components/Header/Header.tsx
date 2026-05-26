'use client';

import { useState } from 'react';
import './Header.css';

// 引数にとる変数と型定義の見やすい書き方.
function Header() {
    const [keyword, setKeyword] = useState('');

    return (
        <div className='app-bg'>
            <header className='app-header'>
                <h1
                    onClick={() => {
                        window.location.href = '/dashboard/movieflix';
                    }}
                    className='app-title'
                    style={{ cursor: 'pointer' }}
                >
                    MOVIEFLIX
                </h1>
                <div className='headerList-wrap'>
                    <p>ホーム</p>
                    <p>新作・人気</p>
                    <p>マイリスト</p>
                </div>
                <div className='app-search-wrap'>
                    <input
                        type='text'
                        className='app-search'
                        placeholder='🔍 映画タイトルで検索...'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
            </header>
        </div>
    );
}

export default Header;
