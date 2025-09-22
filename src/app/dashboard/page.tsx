import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import LogoutButton from './components/LogoutButton'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  // Profileテーブルからusernameを取得（なければ次に作成）
  let { data: profile } = await supabase
    .from('Profile')
    .select('username')
    .eq('id', user.id)
    .single()

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
      .single()

    profile = newProfile
  }

  const username = profile?.username || user.email

  return (
    <div>
      <h1>ダッシュボード</h1>
      <p>ようこそ、{username}さん</p>
      <Link href="/dashboard/profile">プロフィール</Link>
      <ul>サービス一覧
        <li><Link href="/dashboard/ToDoApp">ToDoApp</Link></li>
        <li><Link href="/dashboard/catgen">猫画像ジェネレーター</Link></li>
      </ul>      
      <LogoutButton />
    </div>
  )
}