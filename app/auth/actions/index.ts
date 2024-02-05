"use server";

import { createClient } from "@/lib/supabase/actions";
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)
  
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password
  });

  return JSON.stringify(result);


}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)
  
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}
