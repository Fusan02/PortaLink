'use client'

import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (!error) {
      router.push('/dashboard')
    }
  }

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
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    })
    if (!error) {
      if (data?.user?.identities?.length === 0) {
        alert('このメールアドレスは既に登録されています。')
      } else {
        alert('確認メールを送信しました。メールを確認してください。')
      }
    } else {
      alert(`エラー: ${error.message}`)
    }
  }

  return (
    <div>
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isSignUp ? '新規登録' : 'ログイン'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'ログインに切り替え' : '新規登録に切り替え'}
      </button>
    </div>
  )
}