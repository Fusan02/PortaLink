'use client'

import useProfile from "@/app/hooks/useProfile";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";
import { page } from "../styles/view.css";
import { button, h1, name, time } from "./styles/profile.css";

const Profile = () => {
    const router = useRouter();
    const { profile, username, loading } = useProfile();

    if (loading) return <div>loading...</div>

    // profileが存在しない場合を排除
    if (!profile) return null;

    return (
        <div className={page}>
            <h1 className={h1}>プロフィール</h1>
            <h3>登録情報</h3>
            <p className={name}>ユーザー名: {username}</p>
            <p className={time}>登録日: {new Date(profile.created_at).toLocaleString("ja-JP")}</p>
            <p className={time}>最終更新: {new Date(profile.updated_at).toLocaleString("ja-JP")}</p>
            <button onClick={() => router.push('/dashboard/profile/profile_setting')} className={button}>プロフィールを更新</button>
            <BackButton />
        </div>
    );
}

export default Profile;
