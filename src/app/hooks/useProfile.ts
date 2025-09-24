'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchProfile, type Profile} from '../services/profile';


const useProfile = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [username, setUsername] = useState('');
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
                return;
            }
            setProfile(profile);
            setUsername(profile?.username ?? '');
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return { profile, username, loading, error, reload };
};

export default useProfile;
