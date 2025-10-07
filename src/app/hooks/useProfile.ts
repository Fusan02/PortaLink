'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchProfile, type ProfileWithEmail } from '../services/profile';


const useProfile = () => {
    const [profile, setProfile] = useState<ProfileWithEmail | null>(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    const reload = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const { user, profile } = await fetchProfile();
            if (!user) {
                setProfile(null);
                setUsername('');
                setEmail('');
                return;
            }
            setProfile(profile);
            setUsername(profile?.username ?? '');
            setEmail(profile?.email ?? '');
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return { profile, username, email, loading, error, reload };
};

export default useProfile;
