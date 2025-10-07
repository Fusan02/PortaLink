import { createClient } from '@/lib/supabase';

export type Profile = {
    id: string;
    username: string | null;
    created_at: string;
    updated_at: string;
}

export type ProfileWithEmail = Profile & {
    email: string | null;
}

const fetchProfile = async () => {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { user: null, profile: null };

    const { data, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error) throw error;

    const profileWithEmail: ProfileWithEmail = {
        ...data as Profile,
        email: user.email ?? null,
    };

    return { user, profile: profileWithEmail };
};

const updateProfile = async (username: string) => {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const updates = {
        id: user.id,
        username,
        updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('Profile').upsert(updates);
    if (error) throw error;

    return { ok: true };
};

export {fetchProfile, updateProfile};
