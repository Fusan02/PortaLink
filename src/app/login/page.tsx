'use client';

import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './styles/login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  const [visible, setVisible] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    setVisible(true);
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      router.push('/dashboard');
    }
  };

  // Googleログインはコメントアウト。必要に応じて有効化。
  // const handleGoogleLogin = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       redirectTo: `${window.location.origin}/auth/callback`
  //     }
  //   })
  // }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    });
    if (!error) {
      if (data.user && data.user.identities?.length === 0) {
        alert('このメールアドレスは既に登録されています。');
      } else {
        alert('確認メールを送信しました。メールを確認してください。');
      }
    } else {
      alert(`エラー: ${error.message}`);
    }
  };

  const fillTestAccount = () => {
    setEmail('testuser@test.com');
    setPassword('test123');
    setIsSignUp(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className={styles.form}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className={styles.input}
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className={styles.input}
            required
          />
          <button type='submit' className={styles.button}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          {/* ローディングモーダルようのテストボタン↓ 必要に応じて使用して。*/}
          {/* <button onClick={() => setVisible(true)}>テスト</button> */}
        </form>
        <a onClick={() => setIsSignUp(!isSignUp)} className={styles.RegisterButton}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </a>
        <div className={styles.testLoginBox}>
          <p className={styles.pTitle}>Try Here!:</p>
          <button
            type='button'
            onClick={fillTestAccount}
            className={styles.testLoginButton}
          >
            Click to Try
          </button>
          <p className={styles.pAccount}>
            Email: testuser@test.com<br/>
            Password: test123
          </p>
        </div>
      </div>
      <LoadingModal 
        visible={visible}
      />
    </div>
  );
}


// ローディング画面のモーダル
const LoadingModal = ({
  visible,
}: {
  visible: boolean;
}) => {
  if (visible) {
    return (
      <div className={styles.loadingBox}>
        <div className={styles.loadingText}>
          Loading
        </div>
      </div>
    );
  }
};