"use client";
import { useState } from "react";
import PrimaryButton from "../ui/custom-button";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement sign in or sign up logic here
		if (isSignUp) {
			// sign up logic
		} else {
			// sign in logic
		}
	};

	return (
				<form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[400px] mx-auto mt-2">
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
					<PrimaryButton type="submit" classname="w-full text-lg font-semibold py-3 mt-2">
						{isSignUp ? "Sign Up" : "Sign In"}
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
