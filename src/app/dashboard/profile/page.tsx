'use client';

import useProfile from '@/app/hooks/useProfile';
import { useRouter } from 'next/navigation';
import { page } from '../styles/view.css';
import styles from './styles/profile.css';
import { BackButton, Button } from '@/components/buttons';
import { Texts, TilteText } from '@/components/texts';

const Profile = () => {
    const router = useRouter();
    const { profile, username, loading } = useProfile();

    if (loading) return <div>loading...</div>;

    // profileが存在しない場合を排除
    if (!profile) return null;

    return (
        <div className={page}>
            <TilteText className={styles.title} text="プロフィール"/>
            <Texts className={styles.subTitle} text="登録情報" />
            <Texts className={styles.name} text={`ユーザー名: ${username}`} />
            <Texts className={styles.time} text={`登録日: ${new Date(profile.created_at).toLocaleString('ja-JP')}`} />
            <Texts className={styles.time} text={`最終更新: ${new Date(profile.updated_at).toLocaleString('ja-JP')}`} />
            <Button className={styles.button} text="プロフィールを更新" onClick={() => router.push('/dashboard/profile/profile_setting')} />
            <BackButton />
        </div>
    );
};

export default Profile;
