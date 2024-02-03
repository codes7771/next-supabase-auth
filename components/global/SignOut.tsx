import React from 'react'
import { Button } from '../ui/button'
import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default function SignOut() {

    const Logout = async () => {
        'use server';

        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        redirect("/auth");
    }

  return (
    <form action={Logout}>
        <Button>
            SignOut
        </Button>
    </form>
  )
}
