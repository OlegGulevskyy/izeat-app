"use client";

import { redirect } from "next/navigation";
import { supabase } from "~/server/supabase/supabaseClient";
import { api } from "~/trpc/react";

const AuthenticatedExample = () => {
  const { data } = api.auth.getProfile.useQuery();

  const signOut = () => {
    supabase().auth.signOut();
    redirect("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Authenticated Route Example
        </h1>
        <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-2xl font-bold">User Information</h3>
          <div className="text-lg">Email: {data?.email}</div>
        </div>
      </div>
      <button className="mt-4 text-white" onClick={signOut}>
        Logout
      </button>
    </main>
  );
};

export default AuthenticatedExample;
