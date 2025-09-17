'use client'

import { useCallback, useState } from "react"
import { updateProfile } from "../services/profile";
import { useRouter } from "next/navigation";

const useUpdateProfile = () => {
    const [username, setUsername] = useState("");
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const submit = useCallback(async () => {
        if (!username.trim()) {
            alert("ユーザー名を入力してください");
            return;
        }

        try {
            setError(null);
            setUpdating(true);
            await updateProfile(username);

            alert("プロフィールを更新しました!");
            router.push("/dashboard");
        } catch (e) {
            console.error(e);
            setError("プロフィールの更新に失敗しました。");
            alert("プロフィールの更新に失敗しました。");
        } finally {
            setUpdating(false);
        }
    }, [router, username]);

    return { username, setUsername, updating, error, submit };
}

export default useUpdateProfile
