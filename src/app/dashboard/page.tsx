import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Logout from './components/Logout'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  return (
    <div>
      <h1>ダッシュボード</h1>
      <p>ようこそ、{user.email}さん</p>
      <Link href="/dashboard/profile">プロフィール</Link>
      <ul>サービス一覧
        <li><Link href="/dashboard/ToDoApp">ToDoApp</Link></li>
      </ul>      
      <Logout />
    </div>
  )
}