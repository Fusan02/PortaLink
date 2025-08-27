'use client';

import useUpdateProfile from "@/app/hooks/useUpdateProfile";
import BackButton from "../../components/BackButton";
import { page } from "../../styles/view.css";
import { button, h1 } from "../styles/profile.css";
import { input, label } from "./styles/p_setting.css";

const Profile_Setting = () => {
    const { username, setUsername, updating, submit } = useUpdateProfile();

    return (
        <div className={page}>
            <div>
                <h1 className={h1}>プロフィール設定</h1>
                <label htmlFor="username" className={label}>ユーザー名</label>
                <input 
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ユーザー名を入力"
                    className={input}
                />
            </div>
            
            <div>
                <button 
                    onClick={() => submit()} disabled={updating}
                    className={button}  
                >
                    {updating ? "更新中..." : "プロフィール更新"}
                </button>
            </div>
            <BackButton />
        </div>
    )
}

export default Profile_Setting;