'use client';

import useUpdateProfile from "@/app/hooks/useUpdateProfile";
import BackButton from "../../components/BackButton";

const Profile_Setting = () => {
    const { username, setUsername, updating, submit } = useUpdateProfile();

    return (
        <div>
            <h1>プロフィール設定</h1>

            <label htmlFor="username">ユーザー名</label>
            <input 
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ユーザー名を入力"
            />

            <div>
                <button onClick={() => submit()} disabled={updating}>
                    {updating ? "更新中..." : "プロフィール更新"}
                </button>
            </div>
            <BackButton />
        </div>
    )
}

export default Profile_Setting;