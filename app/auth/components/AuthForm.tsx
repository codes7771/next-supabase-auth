"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./SignInForm";

export function AuthForm() {
	
	return (
		<div className="w-full space-y-5">
			<Tabs defaultValue="signin" className="w-full">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-10">SignIn</h1>
				<TabsContent value="signin">
					<SignInForm />
				</TabsContent>
			</Tabs>
		</div>
	);
}
