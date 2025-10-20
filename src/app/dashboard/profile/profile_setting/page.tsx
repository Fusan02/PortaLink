'use client';

import useUpdateProfile from '@/app/hooks/useUpdateProfile';
import { page } from '../../styles/view.css';
import styles from '../styles/profile.css';
import setting_styles from './styles/p_setting.css';
import { TextLabel, TilteText } from '@/components/texts';
import { BackButton, Button, InputButton } from '@/components/buttons';
import { toClassNames } from '@/utils/toClassNames_utils';
import { boxAnimation } from '@/animation/css';

const Profile_Setting = () => {
    const { username, setUsername, updating, submit } = useUpdateProfile();

    return (
        <div className={page}>
            <div>
                <TilteText className={styles.title} text='Profile Setting' />
                <TextLabel className={setting_styles.label} text='User Name' htmlFor='username' />
                <InputButton 
                    className={setting_styles.input} 
                    id='username' 
                    type='text' 
                    value={username.trim()} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder='ユーザー名を入力'
                />
            </div>
            
            <div>
                <Button
                    className={toClassNames([
                        styles.button,
                        boxAnimation,
                    ])}
                    onClick={submit}
                    disabled={updating}
                    text= {updating ? '更新中...' : 'プロフィール更新'}
                />
                <BackButton className={boxAnimation}/>                
            </div>
        </div>
    );
};

export default Profile_Setting;