import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check, PawPrint, ShieldCheck, Syringe, TrendingUp, HeartPulse } from 'lucide-react';

const pets = [
  {
    name: 'Luna',
    breed: 'Golden Retriever',
    age: '3 years',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    weight: '18.7 kg',
    pulse: '72 bpm',
    status: 'Healthy',
    badge: 'bg-emerald-100 text-emerald-700'
  },
  {
    name: 'Milo',
    breed: 'Tabby Cat',
    age: '2 years',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80',
    weight: '4.9 kg',
    pulse: '88 bpm',
    status: 'Watch list',
    badge: 'bg-amber-100 text-amber-700'
  },
  {
    name: 'Coco',
    breed: 'Mini Frenchie',
    age: '5 years',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
    weight: '11.2 kg',
    pulse: '79 bpm',
    status: 'Stable',
    badge: 'bg-violet-100 text-violet-700'
  }
];

const healthMetrics = [
  { label: 'Vaccination status', value: 'All current', icon: Syringe },
  { label: 'Activity level', value: 'Moderate', icon: TrendingUp },
  { label: 'Heart health', value: 'Strong', icon: HeartPulse },
  { label: 'Wellness score', value: '92%', icon: ShieldCheck }
];

export default function PetsPage() {
  return (
    <>
      <Head>
        <title>Pet Profiles | PetPal</title>
      </Head>

      <div className="min-h-screen bg-[#fffaf7] text-slate-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg">
              <PawPrint size={20} />
            </div>
            <div className="text-2xl font-black tracking-tight text-slate-900">PetPal</div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/dashboard" className="text-slate-700 hover:text-orange-500">Overview</Link>
            <Link href="/pets" className="text-slate-900">Pets</Link>
            <Link href="/appointments" className="text-slate-700 hover:text-orange-500">Appointments</Link>
            <Link href="/health" className="text-slate-700 hover:text-orange-500">Health</Link>
          </div>

          <Link href="/login" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
            Profile
          </Link>
        </nav>

        <main className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Pet profiles</div>
              <h1 className="mt-2 text-4xl font-black text-slate-900">Your furry family</h1>
            </div>
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Add pet
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {healthMetrics.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-[26px] bg-white p-5 shadow-soft border border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="rounded-full bg-orange-100 p-2 text-orange-600"><Icon size={16} /></div>
                </div>
                <div className="mt-4 text-2xl font-black text-slate-900">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pets.map((pet) => (
              <div key={pet.name} className="overflow-hidden rounded-[30px] bg-white shadow-soft border border-slate-100">
                <div className="relative h-64 w-full">
                  <Image src={pet.image} alt={pet.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-2xl font-black text-slate-900">{pet.name}</div>
                      <div className="text-sm text-slate-500">{pet.breed} • {pet.age}</div>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${pet.badge}`}>{pet.status}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Weight</div>
                      <div className="mt-2 font-bold text-slate-900">{pet.weight}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Pulse</div>
                      <div className="mt-2 font-bold text-slate-900">{pet.pulse}</div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-orange-50 p-3 text-sm text-slate-700">
                    <span>Last wellness check</span>
                    <span className="font-bold text-slate-900">2 weeks ago</span>
                  </div>

                  <button className="mt-5 flex w-full items-center justify-between rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400">
                    View profile <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
