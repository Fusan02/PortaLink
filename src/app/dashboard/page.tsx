import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import styles from './styles/dashboard.css';
import { page } from './styles/view.css';
import { faCat, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { LogoutButton } from '@/components/buttons';
import { toClassNames } from '@/utils/toClassNames_utils';
import { boxAnimation } from '@/animation/css';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/login');
  }

  // Profileテーブルからusernameを取得（なければ次に作成）
  let { data: profile } = await supabase
    .from('Profile')
    .select('username')
    .eq('id', user.id)
    .single();

  // プロフィールが存在しない場合は作成
  if (!profile) {
    const { data: newProfile } = await supabase
      .from('Profile')
      .insert([
        {
          id: user.id,
          username: user.email?.split('@')[0] || 'User',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    profile = newProfile;
  }

  // ユーザー名の取得
  const username = profile?.username || user.email;

  return (
    <div className={`${page} ${styles.pageAdd}`}>
      <h1>DashBoard</h1>
      <p>ようこそ、<span className={styles.username}>{username}</span>さん</p>
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
}