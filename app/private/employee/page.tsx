import SignOut from '@/components/global/SignOut'
import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function EmployeePage() {
    const supabase = await createSupabaseServerClient();
    const {data: activeSession} = await supabase.auth.getSession();

    if(!activeSession){
        return redirect('/auth');
    }

    const {data: user} = await supabase.from('user').select("*").single();

    if (user.role != 'employee'){
        return redirect('/auth')
    }
  return (
    <div>
        <SignOut />
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            EmployeePage
        </h1>
    </div>
  )
}
