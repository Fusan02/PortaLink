'use client';

import { useState, useEffect } from 'react';
import motivationCard from '../../styles/homePage/MotivationCard.css';

// メッセージリスト（コンポーネント外に定義）
const MESSAGES = [
    '今日は自分を信じて、一歩ずつ進もう！',
    '焦らず、でも止まらず。 今日も小さな一歩が、未来を変える。',
    '迷っても、進んでいる証拠。少しずつでいい、道は見えてくる。',
    '完璧じゃなくていい、続けることが力になる。',
    '休んでも、また戻ってこれた自分を褒めよう。',
    '誰かのためじゃなく、自分のために今日を積み重ねよう。',
    '昨日より、ちょっとだけ前へ。',
    '始めた時点で、もう前に進んでいる。',
    'できない日があってもいい。続ける意思が大事。',
    '"やってみよう"と思った瞬間がチャンス。',
    '今日の一歩が、未来の自分を助ける。',
];

const MotivationCard = () => {
    // ランダムなメッセージを選択
    const [message, setMessage] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * MESSAGES.length);
        setMessage(MESSAGES[randomIndex]);
    }, []);

    return (
        <div className={motivationCard.container}>
            <div className={motivationCard.title}>
                ⚪️ ひとこと
            </div>
            <div className={motivationCard.message}>
                {message}
            </div>
        </div>
    );
};

export default MotivationCard;