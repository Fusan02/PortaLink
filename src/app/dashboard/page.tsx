import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Logout from './components/logout'

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
      <ul>サービス一覧
        <li><a href="/ToDoApp">ToDoApp</a></li>
      </ul>      
      <Logout />
    </div>
  )
}