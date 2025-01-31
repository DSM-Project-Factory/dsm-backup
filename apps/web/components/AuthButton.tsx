'use server';

import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { ProfileModal } from './ProfileModal';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: userData } = await supabase
    .from('users')
    .select('*')
    .eq('id', user?.id)
    .single();

  async function signOut() {
    'use server';
    (await cookies()).delete('token');
    (await cookies()).delete('userId');

    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  }

  return userData ? (
    <div className="flex items-center gap-4 text-black dark:text-white">
      <ProfileModal logOut={signOut} user={userData} />
    </div>
  ) : (
    <Link
      href="/login"
      aria-label="Go to login page"
      className="rounded-full flex p-[8px_24px] bg-black dark:bg-white text-white dark:text-black"
    >
      로그인
    </Link>
  );
}
