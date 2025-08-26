'use client'

import useProfile from "@/app/hooks/useProfile";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";

const Profile = () => {
    const router = useRouter();
    const { profile, username, loading } = useProfile();

    if (loading) return <div>loading...</div>

    // profileが存在しない場合を排除
    if (!profile) return null;

    return (
        <div>
            <h1>プロフィール</h1>
            <h3>登録情報</h3>
            <p>ユーザー名: {username}</p>
            <p>登録日: {new Date(profile.created_at).toLocaleString("ja-JP")}</p>
            <p>最終更新: {new Date(profile.updated_at).toLocaleString("ja-JP")}</p>
            <button onClick={() => router.push('/dashboard/profile/profile_setting')}>プロフィールを更新</button>
            <BackButton />
        </div>
    );
}

export default Profile;
