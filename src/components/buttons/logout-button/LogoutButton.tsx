'use client';
import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import styles from './styles/logout.css';

export const LogoutButton = () => {
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    redirect('/login');
  };

  return (
    <button className={styles.logout} onClick={handleLogout}>logout</button>
  );
};