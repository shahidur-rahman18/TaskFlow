"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-[calc(100vh-12vh)] items-center justify-center bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-10 rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-200/70 dark:bg-slate-950 dark:shadow-black/30 lg:flex-row lg:p-0 lg:gap-8">
        <section className="hidden overflow-hidden rounded-[2rem] bg-linear-to-br from-red-600 via-rose-500 to-pink-500 animate-fade-in-left lg:flex lg:w-1/2 lg:min-h-[520px] lg:items-center lg:justify-center lg:p-0">
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[520px]">
            <Image
              src="/images/hero.png"
              alt="TaskFlow login illustration"
              fill
              className="object-contain object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        <section className="flex flex-1 flex-col justify-center rounded-[2rem] bg-slate-100 p-8 shadow-xl shadow-slate-200/40 dark:bg-slate-900 dark:shadow-black/20 animate-fade-in-right lg:p-14">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Sign in</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Login to your account</h2>
            <p className="max-w-md text-sm text-slate-500 dark:text-slate-400">
              Enter your email and password to continue managing your tasks, teams, and projects.
            </p>
          </div>

          <form className="grid gap-5">
            <label className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <span>Email address</span>
              <input
                type="email"
                autoComplete="email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <span>Password</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute inset-y-0 right-3 inline-flex items-center text-slate-400 transition hover:text-slate-600 dark:text-slate-300 dark:hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </label>
            <button
              type="submit"
              className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Login
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p>New here? <Link href="/signup" className="font-semibold text-red-600 transition hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">Sign up</Link></p>
            <Link href="/" className="font-semibold text-red-600 transition hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
