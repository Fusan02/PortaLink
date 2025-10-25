'use client';

import motivationCard from '../../styles/homePage/MotivationCard.css';

const MotivationCard = () => {
    // 仮メッセージ
    const message = '今日は自分を信じて、一歩ずつ進もう！';

    return (
        <div className={motivationCard.container}>
            <div className={motivationCard.title}>
                ⚪️ 今日のひとこと
            </div>
            <div className={motivationCard.message}>
                {message}
            </div>
        </div>
    );
};

export default MotivationCard;