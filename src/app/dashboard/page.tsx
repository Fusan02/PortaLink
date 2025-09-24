import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import styles from './styles/dashboard.css';
import { page } from './styles/view.css';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { LogoutButton } from '@/components/buttons';

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
      <p>ようこそ、{username}さん</p>
      <div className={styles.contents}>
        { /* プロフォール */ }
        <Link href="/dashboard/profile" className={styles.LinkSetting}>
          <div className={styles.prifileBox}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            Profile
          </div>
        </Link>

        { /* サービス一覧 */ }
        <div className={styles.services}>
          <Link href="/dashboard/ToDoApp" className={styles.LinkSetting}>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
              ToDoApp
            </div>
          </Link>
          <Link href="/dashboard/catgen" className={styles.LinkSetting}>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faCat} className={styles.icon} />
              Cat Imgae Generator
            </div>
          </Link>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}