'use client'

import { createClient } from "@/lib/supabase"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

type Profile = {
    id: string
    username: string | null
    created_at: string 
    updated_at: string
}

const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile | null >(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");

    const supabase = createClient();
    const router = useRouter();

    const getProfile = useCallback(async () => {
        try {
            setLoading(true);

            // ユーザー情報を取得
            const { data: { user } } = await supabase.auth.getUser();
            
            if (!user) {
                router.push('/login');
                return;
            }

            const { data } = await supabase
                .from('Profile')
                .select('*')
                .eq('id', user.id)
                .single()

            if (data) {
                setProfile(data);
                setUsername(data.username || "");
            }
        } catch (error) {
            console.error("プロフィールの取得に失敗しました:", error);
        } finally {
            setLoading(false);
        }
    }, [router, supabase]);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <h1>プロフィール</h1>
            <div>
                {profile && (
                    <div>
                        <h3>登録情報</h3>
                        <p>ユーザー名: {username}</p>
                        <p>登録日: {new Date(profile.created_at).toLocaleString('ja-JP')}</p>
                        <p>最終更新: {new Date(profile.updated_at).toLocaleString('ja-JP')}</p>
                    </div>
                )}
                <Link href="/dashboard/profile/profile_setting">プロフィール設定</Link>
            </div>
        </div>
    )
}

export default ProfilePage