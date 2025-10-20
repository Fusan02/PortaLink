'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faChartBar,
    faClockRotateLeft,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import { TabType } from '../../types';
import bottomNav from '../../styles/bottomNav.css';

interface BottomNavProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
    const tabs = [
        { id: 'home' as TabType, icon: faHouse, label: 'Home' },
        { id: 'stats' as TabType, icon: faChartBar, label: 'Stats' },
        { id: 'history' as TabType, icon: faClockRotateLeft, label: 'History' },
        { id: 'settings' as TabType, icon: faGear, label: 'Settings' },
    ];

    return (
        <nav className={bottomNav.container}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={bottomNav.button({ isActive })}
                    >
                        <FontAwesomeIcon 
                            icon={tab.icon} 
                            className={bottomNav.icon({ isActive })}
                        />
                        <span className={bottomNav.span({ isActive })}>
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;