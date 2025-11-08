"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../ui/custom-button";
import { supabase } from "@/lib/supabaseClient";

const LoginForm = () => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [isSignUp, setIsSignUp] = useState(false);
		const [error, setError] = useState<string | null>(null);
		const [loading, setLoading] = useState(false);
		const router = useRouter();

		const handleSubmit = async (e: React.FormEvent) => {
			e.preventDefault();
			setError(null);
			setLoading(true);
			if (isSignUp) {
				// Supabase sign up
				const { error } = await supabase.auth.signUp({
					email,
					password,
				});
				if (error) setError(error.message);
				else router.push("/dashboard/home");
			} else {
				// Supabase sign in
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password,
				});
				if (error) setError(error.message);
				else router.push("/dashboard/home");
			}
			setLoading(false);
		};

	return (
					<form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[400px] mx-auto mt-2">
						{error && <div className="text-red-500 text-sm text-center mb-2">{error}</div>}
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="px-5 py-3 rounded-xl bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#6348fc] text-lg font-semibold placeholder:font-normal placeholder:text-[#bdbdbd] w-full"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="px-5 py-3 rounded-xl bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#6348fc] text-lg font-semibold placeholder:font-normal placeholder:text-[#bdbdbd] w-full"
						required
					/>
							<PrimaryButton type="submit" classname="w-full text-lg font-semibold py-3 mt-2" disabled={loading}>
								{loading ? (isSignUp ? "Signing Up..." : "Signing In...") : isSignUp ? "Sign Up" : "Sign In"}
							</PrimaryButton>
					<button
						type="button"
						className="text-sm text-[#6348fc] underline font-medium mb-2 hover:text-[#7c5fff] transition-colors"
						onClick={() => setIsSignUp(!isSignUp)}
					>
						{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
					</button>
				</form>
	);
};

export default LoginForm;
