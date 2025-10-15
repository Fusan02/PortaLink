'use client';

import useProfile from '@/app/hooks/useProfile';
import { useRouter } from 'next/navigation';
import { page } from '../styles/view.css';
import styles from './styles/profile.css';
import { BackButton, Button } from '@/components/buttons';
import { Texts, TilteText } from '@/components/texts';
import { FadeInAnimation } from '@/animation/fadeInAnimation/fade-in-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { toClassNames } from '@/utils/toClassNames_utils';
import { boxAnimation } from '@/animation/css';

const Profile = () => {
    const router = useRouter();
    const { profile, username, email, loading } = useProfile();

    if (loading) return <div>loading...</div>;

    // profileが存在しない場合を排除
    if (!profile) return null;

    return (
        <FadeInAnimation>
            <div className={page}>
                <TilteText className={styles.title} text="Profile"/>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <Texts className={styles.name} text={`${username} さん`} />
                <div className={styles.contentInfo}>
                    <Texts className={styles.content} text={'User Name'} />
                    <Texts className={styles.contentText} text={username} />
                </div>
                <div className={styles.contentInfo}>
                    <Texts className={styles.content} text={'Email'} />
                    <Texts className={styles.contentText} text={email} />
                </div>
                <Texts className={styles.time} text={`登録日: ${new Date(profile.created_at).toLocaleString('ja-JP')}`} />
                <Texts className={styles.time} text={`最終更新: ${new Date(profile.updated_at).toLocaleString('ja-JP')}`} />
                <Button 
                    className={toClassNames([styles.button, boxAnimation])}
                    text="プロフィールを更新" 
                    onClick={() => router.push('/dashboard/profile/profile_setting')} 
                />
                <BackButton className={boxAnimation}/>
            </div>
        </FadeInAnimation>
    );
};

export default Profile;
