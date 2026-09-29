import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bell, CalendarCheck2, HeartPulse, PawPrint, ShieldCheck, Stethoscope } from 'lucide-react';

const pets = [
  {
    name: 'Luna',
    type: 'Golden Retriever',
    age: '3 years',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    health: 'Excellent',
    nextVisit: '12 Jun',
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    name: 'Milo',
    type: 'Tabby Cat',
    age: '2 years',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80',
    health: 'Needs checkup',
    nextVisit: '16 Jun',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    name: 'Coco',
    type: 'Mini Frenchie',
    age: '5 years',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
    health: 'Stable',
    nextVisit: '09 Jul',
    color: 'bg-violet-100 text-violet-700'
  }
];

const reminders = [
  { title: 'Vaccination reminder', detail: 'Rabies booster due in 3 days', time: 'Today • 9:00 AM' },
  { title: 'Medication refill', detail: 'Luna’s allergy meds due to be refilled', time: 'Tomorrow • 11:30 AM' },
  { title: 'Grooming visit', detail: 'Milo has a grooming appointment booked', time: 'Thu • 2:15 PM' }
];

const records = [
  { label: 'Vet visits', value: '08', change: '+2 this month' },
  { label: 'Vaccines updated', value: '14', change: 'All current' },
  { label: 'Care tasks due', value: '03', change: 'This week' },
  { label: 'Health score', value: '92%', change: '+5% from last month' }
];

const quickActions = [
  { label: 'Add pet', icon: PawPrint },
  { label: 'Book visit', icon: CalendarCheck2 },
  { label: 'Medication', icon: ShieldCheck },
  { label: 'Alerts', icon: Bell }
];

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>PetPal Dashboard</title>
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
            <Link href="/dashboard" className="text-slate-900">Overview</Link>
            <Link href="/pets" className="text-slate-700 hover:text-orange-500">Pets</Link>
            <Link href="/appointments" className="text-slate-700 hover:text-orange-500">Appointments</Link>
            <Link href="/health" className="text-slate-700 hover:text-orange-500">Health</Link>
          </div>

          <Link href="/login" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
            Profile
          </Link>
        </nav>

        <main className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Dashboard</div>
              <h1 className="mt-2 text-4xl font-black text-slate-900">Welcome back, Ava</h1>
            </div>
            <Link href="/appointments" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Book a visit <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {records.map((item) => (
              <div key={item.label} className="rounded-[26px] bg-white p-5 shadow-soft border border-slate-100">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-3 text-3xl font-black text-slate-900">{item.value}</div>
                <div className="mt-2 text-xs font-medium text-slate-500">{item.change}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <section className="rounded-[30px] bg-white p-6 shadow-soft border border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Your pets</h2>
                <Link href="/pets" className="text-sm font-semibold text-orange-500">Manage all</Link>
              </div>

              <div className="mt-6 space-y-4">
                {pets.map((pet) => (
                  <div key={pet.name} className="flex flex-col gap-4 rounded-[24px] border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center">
                    <div className="h-24 w-full overflow-hidden rounded-[18px] sm:w-24">
                      <Image src={pet.image} alt={pet.name} width={200} height={200} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xl font-bold text-slate-900">{pet.name}</div>
                          <div className="text-sm text-slate-500">{pet.type} • {pet.age}</div>
                        </div>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${pet.color}`}>{pet.health}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                        <span>Next visit</span>
                        <span className="font-semibold text-slate-900">{pet.nextVisit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="rounded-[30px] bg-slate-900 p-6 text-white shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">Quick actions</h2>
                <HeartPulse className="text-orange-300" size={20} />
              </div>

              <div className="mt-6 grid gap-3">
                {quickActions.map(({ label, icon: Icon }) => (
                  <button key={label} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-left hover:bg-white/10">
                    <span className="font-medium">{label}</span>
                    <Icon size={18} className="text-orange-300" />
                  </button>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <section className="rounded-[30px] bg-white p-6 shadow-soft border border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Upcoming reminders</h2>
                <Bell className="text-orange-500" size={20} />
              </div>

              <div className="mt-6 space-y-4">
                {reminders.map((item) => (
                  <div key={item.title} className="rounded-[22px] bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-bold text-slate-900">{item.title}</div>
                      <div className="text-xs font-semibold text-orange-600">Due soon</div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{item.detail}</div>
                    <div className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{item.time}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[30px] bg-gradient-to-br from-orange-100 via-pink-50 to-white p-6 shadow-soft border border-orange-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Summary</h2>
                <Stethoscope className="text-orange-500" size={20} />
              </div>

              <div className="mt-6 space-y-4 text-slate-700">
                <div className="rounded-[22px] bg-white p-4">
                  <div className="text-sm text-slate-500">Vaccination status</div>
                  <div className="mt-1 text-xl font-black text-slate-900">All vaccines current</div>
                </div>
                <div className="rounded-[22px] bg-white p-4">
                  <div className="text-sm text-slate-500">Medication tracking</div>
                  <div className="mt-1 text-xl font-black text-slate-900">3 active prescriptions</div>
                </div>
                <div className="rounded-[22px] bg-white p-4">
                  <div className="text-sm text-slate-500">Most recent note</div>
                  <div className="mt-1 text-xl font-black text-slate-900">Routine wellness check completed</div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
