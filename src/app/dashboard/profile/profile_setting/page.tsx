'use client';

import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const profile_setting = () => {
  const [updating, setUpdating] = useState(false);
  const [username, setUsername] = useState("");
  
  const supabase = createClient();
  const router = useRouter();

  const updateProfile = async () => {
        try {
            setUpdating(true);

            const { data: { user } } = await supabase.auth.getUser();

            if (!user) return;

            const updates = {
                id: user.id,
                username: username,
                updated_at: new Date().toISOString(),
            }

            const { error } = await supabase
                .from('Profile')
                .upsert(updates);

            if (error) throw error;

            alert('プロフィールを更新しました！');
            router.push('/dashboard/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('プロフィールの更新に失敗しました。');
        } finally {
            setUpdating(false);
        }
    }

  return (
    <div>
    <h1>プロフィール設定</h1>
        <div>
            <label>
                ユーザー名
            </label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ユーザー名を入力"
            />
            <div>
                <button
                    onClick={updateProfile}
                    disabled={updating}
                >
                    {updating ? '更新中...' : 'プロフィールを更新'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default profile_setting