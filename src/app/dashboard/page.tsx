import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { DashboardClient } from './dashboard-client';

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

  return <DashboardClient username={username} />;
}