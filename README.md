import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, LockKeyhole, Mail } from 'lucide-react';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Log in | PetPal</title>
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#fff1ea,#fffaf7_55%,#fdf3ee)] px-6 py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[30px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2">
          <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white">🐾</div>
                <div className="text-2xl font-black">PetPal</div>
              </Link>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-orange-300">Pet care, simplified</div>
              <h1 className="mt-6 text-4xl font-black leading-tight">Your pets deserve better health tracking.</h1>
              <p className="mt-5 max-w-md text-slate-300">
                Keep vaccination history, appointment notes, and daily wellness in one intelligent hub.
              </p>
            </div>

            <div className="rounded-[24px] bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-sm text-slate-300">Today’s wellness</div>
              <div className="mt-2 text-2xl font-black">92% healthy score</div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Welcome</div>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Log in to PetPal</h2>

            <div className="mt-8 space-y-4">
              <label className="block">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Mail size={16} /> Email address
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none ring-0 focus:border-orange-300"
                />
              </label>

              <label className="block">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <LockKeyhole size={16} /> Password
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none ring-0 focus:border-orange-300"
                />
              </label>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-orange-500" /> Remember me
              </label>
              <Link href="/" className="font-semibold text-orange-500">Forgot password?</Link>
            </div>

            <Link href="/dashboard" className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3.5 text-base font-semibold text-white hover:bg-slate-800">
              Log in <ArrowRight size={18} />
            </Link>

            <div className="mt-6 text-center text-sm text-slate-600">
              New here? <Link href="/" className="font-semibold text-orange-500">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
