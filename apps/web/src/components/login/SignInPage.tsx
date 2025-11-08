"use client";
import PrimaryButton from "../ui/custom-button";
import { Google } from "../icons/icons";
import Image from "next/image";
import Overlay from "../ui/overlay";
import LoginForm from "./LoginForm";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";

const SignInPage = () => {
  return (
    <div className="font-semibold flex flex-col items-center gap-6 font-sans w-full max-w-md relative overflow-hidden py-10 px-4">
      <Overlay />
      <Image
        src="/assets/mask.svg"
        alt="background"
        fill
        className="object-cover w-full h-full opacity-60 scale-150"
      />
  <Card className="w-full max-w-xl mx-auto z-20 bg-[#181818] border-none shadow-2xl px-10 py-12 rounded-2xl flex flex-col items-center">
        <CardHeader className="items-center">
          <div className="w-16 aspect-square overflow-hidden relative">
            <Image
              src="/assets/logo_var2.svg"
              alt="background"
              fill
              className="object-cover rounded-2xl w-full h-full"
            />
          </div>
          <CardTitle className="tracking-tighter font-semibold text-2xl leading-tight text-[#f5f5f5]">Welcome to Blockcode</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        {/* Remove Google Auth button, keep only Supabase email/password */}
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;

