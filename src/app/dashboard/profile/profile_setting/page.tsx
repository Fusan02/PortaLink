'use client';

import useUpdateProfile from '@/app/hooks/useUpdateProfile';
import { page } from '../../styles/view.css';
import styles from '../styles/profile.css';
import setting_styles from './styles/p_setting.css';
import { TextLabel, TilteText } from '@/components/texts';
import { BackButton, Button, InputButton } from '@/components/buttons';

const Profile_Setting = () => {
    const { username, setUsername, updating, submit } = useUpdateProfile();

    return (
        <div className={page}>
            <div>
                <TilteText className={styles.title} text="プロフィール設定" />
                <TextLabel className={setting_styles.label} text="ユーザー名" htmlFor="username" />
                <InputButton 
                    className={setting_styles.input} 
                    id="username" 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="ユーザー名を入力"
                />
            </div>
            
            <div>
                <Button
                    className={styles.button}
                    onClick={submit}
                    disabled={updating || !username.trim()}
                    text= {updating ? '更新中...' : 'プロフィール更新'}
                />
            </div>
            <BackButton />
        </div>
    );
};

export default Profile_Setting;