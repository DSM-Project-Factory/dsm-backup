import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    const { data: sessionData, error: sessionError } =
      await supabase.auth.exchangeCodeForSession(code);

    (await cookies()).set('userId', sessionData.user?.id || '');
    (await cookies()).set('token', sessionData.session?.access_token || '');

    const { error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', sessionData.user?.id)
      .single();

    if (sessionError) {
      return NextResponse.redirect(`${requestUrl.origin}/login`);
    }

    if (userError) {
      return NextResponse.redirect(`${requestUrl.origin}/signup`);
    }
  }

  return NextResponse.redirect(`${requestUrl.origin}/`);
}
