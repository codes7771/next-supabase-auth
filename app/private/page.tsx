import createSupabaseServerClient from '@/lib/supabase/server'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const supabase = await createSupabaseServerClient();
    const {data: activeSession} = await supabase.auth.getSession();

    if(!activeSession){
        return redirect('/auth');
    }

    const {data: user} = await supabase.from('user').select("*").single();

    if (user.role == 'admin'){
        return redirect('/private/admin');
    }else if (user.role == 'employee'){
        return redirect('/private/employee');
    }else{
        return redirect('/auth');
    }
  return (
    <div></div>
  )
}
