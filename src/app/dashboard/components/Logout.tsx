'use client'
import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

const Logout = () => {
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <button onClick={handleLogout}>ログアウト</button>
  )
}

export default Logout