'use client';

import { useState } from 'react';
import { TabType } from './types';
import pageStyles from './styles/page.css';
import BottomNav from './components/Layout/BottomNav';
import HomePage from './components/homePage';

const SupportTimer = () => {
    // タブの状態管理
    const [activeTab, setActiveTab] = useState<TabType>('home');

    return (
        <div className={pageStyles.page}>
            <main className={pageStyles.mainContetns}>
                {activeTab === 'home' && (<HomePage />)}
                {activeTab === 'stats'}
                {activeTab === 'history'}
                {activeTab === 'settings'}
            </main>

            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
    );
};

export default SupportTimer;