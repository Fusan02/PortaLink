'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCat, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Button, LogoutButton } from '@/components/buttons';
import { toClassNames } from '@/utils/toClassNames_utils';
import { boxAnimation } from '@/animation/css';
import { SideMenuModal } from '@/components/sideMenu/sideMenu';
import styles from './styles/dashboard.css';
import { page } from './styles/view.css';

export const DashboardClient =({
  username 
}: { 
  username: string 
}) => {
  const [sideMenuModalVisible, setSideMenuModalVisible] = useState(false);

  return (
    <div className={`${page} ${styles.pageAdd}`}>
      <h1>DashBoard</h1>
      <p>ようこそ、<span className={styles.username}>{username}</span>さん</p>
      <div className={styles.sideMenu}>
        { /* サイドメニュー */ }
        <Button
          className={styles.menuButton}
          onClick={() => {
            setSideMenuModalVisible((prev) => {
              return !prev;
            });
          }}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </Button>

        <SideMenuModal
          className={sideMenuModalVisible ? styles.sideMenuModal : styles.hide}
          visible={sideMenuModalVisible}
          onClose={() => 
            setSideMenuModalVisible(false)
          }
        />
      </div>
      <div className={styles.contents}>
        { /* プロフォール */ }
        <Link href="/dashboard/profile" className={styles.LinkSetting}>
          <div className={toClassNames([
            styles.prifileBox,
            boxAnimation
          ])}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            Profile
          </div>
        </Link>

        <h2>App Services</h2>
        { /* サービス一覧 */ }
        <div className={styles.services}>
          <Link href="/dashboard/ToDoApp" className={styles.LinkSetting}>
            <div
              className={toClassNames([
                styles.serviceBox,
                boxAnimation,
            ])}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
              ToDoApp
            </div>
          </Link>
          <Link href="/dashboard/catgen" className={styles.LinkSetting}>
            <div className={toClassNames([
              styles.serviceBox,
              boxAnimation,
            ])}>
              <FontAwesomeIcon icon={faCat} className={styles.icon} />
              Cat Imgae Generator
            </div>
          </Link>
          <Link href="/dashboard/invader" className={styles.LinkSetting}>
            <div className={toClassNames([
              styles.serviceBox,
              boxAnimation,
            ])}>
              <FontAwesomeIcon icon={faGamepad} className={styles.icon} />
              Invader
            </div>
          </Link>
        </div>
      </div>
      <LogoutButton className={boxAnimation}/>
    </div>
  );
};
