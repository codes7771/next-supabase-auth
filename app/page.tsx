import { Navbar } from '@/components/global/Navbar'
import createSupabaseServerClient from '@/lib/supabase/server'
import Image from 'next/image'
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = await createSupabaseServerClient();
    const {data: activeSession} = await supabase.auth.getSession();

    if(!activeSession){
        return redirect('/');
    }
  return (
    <div className='p-4'>
      <Navbar />
    </div>
  )
}
