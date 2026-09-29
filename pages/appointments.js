import Head from 'next/head';
import Link from 'next/link';
import { CalendarCheck2, Clock3, PawPrint, ShieldCheck, UserCircle2 } from 'lucide-react';

const appointments = [
  {
    pet: 'Luna',
    type: 'Annual wellness exam',
    vet: 'Dr. Maya Lee',
    date: 'Tue, 12 Jun',
    time: '10:30 AM',
    status: 'Confirmed',
    tone: 'bg-emerald-100 text-emerald-700'
  },
  {
    pet: 'Milo',
    type: 'Vaccination follow-up',
    vet: 'Dr. Sam Fraser',
    date: 'Thu, 16 Jun',
    time: '1:15 PM',
    status: 'Pending',
    tone: 'bg-amber-100 text-amber-700'
  },
  {
    pet: 'Coco',
    type: 'Dermatology consult',
    vet: 'Dr. Olivia Green',
    date: 'Mon, 09 Jul',
    time: '3:00 PM',
    status: 'Booked',
    tone: 'bg-violet-100 text-violet-700'
  }
];

const schedule = [
  { day: 'Mon', task: 'Check food intake', time: '8:30 AM' },
  { day: 'Wed', task: 'Medication reminder', time: '6:00 PM' },
  { day: 'Fri', task: 'Grooming check', time: '10:00 AM' }
];

export default function AppointmentsPage() {
  return (
    <>
      <Head>
        <title>Appointments | PetPal</title>
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
            <Link href="/pets" className="text-slate-700 hover:text-orange-500">Pets</Link>
            <Link href="/appointments" className="text-slate-900">Appointments</Link>
            <Link href="/health" className="text-slate-700 hover:text-orange-500">Health</Link>
          </div>

          <Link href="/login" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
            Profile
          </Link>
        </nav>

        <main className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Appointments</div>
              <h1 className="mt-2 text-4xl font-black text-slate-900">Care schedule</h1>
            </div>
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              New appointment
            </button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <section className="rounded-[30px] bg-white p-6 shadow-soft border border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Upcoming visits</h2>
                <CalendarCheck2 className="text-orange-500" size={22} />
              </div>

              <div className="mt-6 space-y-4">
                {appointments.map((item) => (
                  <div key={item.pet} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xl font-bold text-slate-900">{item.pet}</div>
                        <div className="text-sm text-slate-500">{item.type}</div>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.tone}`}>{item.status}</span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white p-3">
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Vet</div>
                        <div className="mt-2 font-bold text-slate-900">{item.vet}</div>
                      </div>
                      <div className="rounded-2xl bg-white p-3">
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Date</div>
                        <div className="mt-2 font-bold text-slate-900">{item.date}</div>
                      </div>
                      <div className="rounded-2xl bg-white p-3">
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Time</div>
                        <div className="mt-2 font-bold text-slate-900">{item.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[30px] bg-slate-900 p-6 text-white shadow-soft">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black">Care checklist</h2>
                  <ShieldCheck className="text-orange-300" size={20} />
                </div>

                <div className="mt-6 space-y-4">
                  {schedule.map((entry) => (
                    <div key={entry.day} className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
                      <div>
                        <div className="font-semibold">{entry.task}</div>
                        <div className="text-sm text-slate-300">{entry.day}</div>
                      </div>
                      <div className="text-sm text-orange-200">{entry.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 shadow-soft border border-slate-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-900">Quick notes</h2>
                  <UserCircle2 className="text-orange-500" size={20} />
                </div>

                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    Luna had a strong appetite this week and remains active during daily walks.
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    Milo’s supervising vet advised a follow-up due to mild ear irritation.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
