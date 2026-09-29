import Link from 'next/link';
import { PawPrint, CalendarDays, ShieldCheck, Stethoscope, Bell, HeartPulse, ArrowRight, Menu } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Pet health dashboard',
    text: 'Track vaccines, medications, leads, and wellness updates in one easy overview.',
    icon: ShieldCheck,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Smart reminders',
    text: 'Stay on top of feeding, grooming, medication, and vet appointments without stress.',
    icon: Bell,
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    title: 'Vet care coordination',
    text: 'Store appointment history, notes, and care plans to keep your pet healthy long term.',
    icon: Stethoscope,
    color: 'bg-violet-100 text-violet-600'
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80'
];

export default function HomePage() {
  return (
    <div className="bg-[#fffaf7] text-slate-800">
      <header className="relative overflow-hidden">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg">
              <PawPrint size={20} />
            </div>
            <div className="text-2xl font-black tracking-tight text-slate-900">PetPal</div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="#features" className="text-slate-700 hover:text-orange-500">Features</Link>
            <Link href="#about" className="text-slate-700 hover:text-orange-500">About</Link>
            <Link href="#gallery" className="text-slate-700 hover:text-orange-500">Gallery</Link>
            <Link href="/dashboard" className="text-slate-700 hover:text-orange-500">Dashboard</Link>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
              Log in
            </Link>
            <Link href="/dashboard" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-orange-600">
              Get started
            </Link>
          </div>

          <button className="rounded-full border border-slate-200 p-2 md:hidden">
            <Menu size={18} />
          </button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Better care for every paw
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Pet care made simple, smart, and stress-free.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-slate-600">
              PetPal helps pet parents track health, appointments, medication, and daily care in one beautiful dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
                Start free
              </Link>
              <Link href="#features" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50">
                Explore features
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-black text-slate-900">24k+</div>
                <div className="text-sm text-slate-500">Happy pets cared for</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-500">Average rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-orange-200 blur-3xl" />
            <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-pink-200 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/50 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80"
                  alt="Happy dog"
                  width={1200}
                  height={1400}
                  className="h-[620px] w-full object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Today</div>
                    <div className="mt-1 text-lg font-bold text-slate-900">Luna’s wellness</div>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    Healthy
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-slate-400">Weight</div>
                    <div className="mt-1 font-bold">18.7 kg</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-slate-400">Vaccines</div>
                    <div className="mt-1 font-bold">Up to date</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-slate-400">Next visit</div>
                    <div className="mt-1 font-bold">12 Jun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="features" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Features</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
              Everything you need to care for your companion
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map(({ title, text, icon: Icon, color }) => (
              <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">Why PetPal</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Health insights, reminders, and care records in one place
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                PetPal helps pet owners and caregivers manage every detail of life with a pet — from day-to-day routines to long-term health monitoring.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg">✓</div>
                  <div>
                    <div className="text-xl font-semibold">Daily routines</div>
                    <div className="text-slate-300">Feedings, walks, grooming, and check-ins all in one organized schedule.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg">✓</div>
                  <div>
                    <div className="text-xl font-semibold">Health tracking</div>
                    <div className="text-slate-300">Store treatment notes, vaccination history, and progress over time.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] bg-slate-800 p-4 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80"
                  alt="Cat"
                  width={900}
                  height={1200}
                  className="h-64 w-full rounded-2xl object-cover"
                />
                <div className="mt-4">
                  <div className="text-sm text-slate-400">Care score</div>
                  <div className="mt-1 text-3xl font-black">92%</div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-[28px] bg-slate-800 p-4 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
                    alt="Dog"
                    width={900}
                    height={900}
                    className="h-52 w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="rounded-[28px] bg-orange-500 p-6 shadow-xl">
                  <div className="text-sm uppercase tracking-[0.2em] text-orange-100">Upcoming</div>
                  <div className="mt-2 text-3xl font-black">Vet check</div>
                  <div className="mt-2 text-orange-50">Tuesday, 10:30 AM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Gallery</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Pets we love to help</h2>
            </div>
            <Link href="/pets" className="hidden rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 md:inline-flex hover:border-slate-400">
              Explore more
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, index) => (
              <div key={img} className={`overflow-hidden rounded-[28px] shadow-md ${index % 2 === 0 ? 'lg:translate-y-8' : ''}`}>
                <Image
                  src={img}
                  alt={`Pet ${index + 1}`}
                  width={900}
                  height={1000}
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-50 via-pink-50 to-orange-100 py-20">
          <div className="mx-auto max-w-5xl rounded-[32px] bg-white p-10 shadow-[0_20px_80px_rgba(251,146,60,0.12)]">
            <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Ready to begin</div>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                  Give your pets the care they deserve.
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Join PetPal and turn pet care into a calm, organized routine for every furry friend in your life.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <Link href="/dashboard" className="w-full rounded-full bg-slate-900 px-7 py-4 text-center text-base font-semibold text-white shadow-lg hover:bg-slate-800">
                  Join PetPal
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-12 text-sm text-slate-500">
        <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="font-bold text-slate-700">PetPal</div>
          <div>© 2026 PetPal. Made for healthier, happier pets.</div>
        </div>
      </footer>
    </div>
  );
}
