import SignOut from '@/components/global/SignOut'
import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'
import { AdminSidebar } from './components/AdminSidebar';

export default async function AdminPage() {
    const supabase = await createSupabaseServerClient();
    const {data: activeSession} = await supabase.auth.getSession();

    if(!activeSession){
        return redirect('/auth');
    }

    const {data: user} = await supabase.from('user').select("*").single();

    if (user.role !== 'admin'){
        return redirect('/auth');
    }
  return (
    <div>
        <AdminSidebar />
    </div>
  )
}
