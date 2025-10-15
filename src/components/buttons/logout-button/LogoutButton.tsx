'use client';
import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import styles from './styles/logout.css';
import { toClassNames } from '@/utils/toClassNames_utils';

export const LogoutButton = ({
  className,
}: {
  className?: string;
}) => {
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    redirect('/login');
  };

  return (
    <button 
      className={toClassNames([
        className,
        styles.logout
      ])} 
      onClick={handleLogout}
    >
      logout
    </button>
  );
};