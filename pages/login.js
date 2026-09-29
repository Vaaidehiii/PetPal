import Head from 'next/head';
import Link from 'next/link';
import { Activity, HeartPulse, PawPrint, Pill, ShieldPlus, Syringe } from 'lucide-react';

const healthSummary = [
  { title: 'Vaccination plan', detail: 'Rabies booster due in 3 days', tag: 'Upcoming', icon: Syringe },
  { title: 'Medication routine', detail: 'Luna’s allergy medication scheduled for 9AM', tag: 'Active', icon: Pill },
  { title: 'Behavior check', detail: 'Milo’s energy levels are normal this week', tag: 'Stable', icon: Activity },
  { title: 'Wellness score', detail: 'Overall score 92% across all pets', tag: 'Healthy', icon: HeartPulse }
];

const vaccineTable = [
  { pet: 'Luna', vaccine: 'Rabies', due: '12 Jun', status: 'Due soon' },
  { pet: 'Milo', vaccine: 'FVRCP', due: '18 Jun', status: 'Scheduled' },
  { pet: 'Coco', vaccine: 'Leptospirosis', due: '09 Jul', status: 'On track' }
];

export default function HealthPage() {
  return (
    <>
      <Head>
        <title>Health Hub | PetPal</title>
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
            <Link href="/appointments" className="text-slate-700 hover:text-orange-500">Appointments</Link>
            <Link href="/health" className="text-slate-900">Health</Link>
          </div>

          <Link href="/login" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
            Profile
          </Link>
        </nav>

        <main className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Health hub</div>
            <h1 className="mt-2 text-4xl font-black text-slate-900">Wellness and records</h1>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {healthSummary.map(({ title, detail, tag, icon: Icon }) => (
              <div key={title} className="rounded-[26px] bg-white p-5 shadow-soft border border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-orange-100 p-2 text-orange-600"><Icon size={18} /></div>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">{tag}</span>
                </div>
                <div className="mt-4 text-xl font-black text-slate-900">{title}</div>
                <div className="mt-2 text-sm text-slate-600">{detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[30px] bg-white p-6 shadow-soft border border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Vaccination schedule</h2>
                <ShieldPlus className="text-orange-500" size={22} />
              </div>

              <div className="mt-6 overflow-hidden rounded-[22px] border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="p-4 font-semibold">Pet</th>
                      <th className="p-4 font-semibold">Vaccine</th>
                      <th className="p-4 font-semibold">Due</th>
                      <th className="p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vaccineTable.map((row) => (
                      <tr key={`${row.pet}-${row.vaccine}`} className="border-t border-slate-200">
                        <td className="p-4 font-semibold text-slate-900">{row.pet}</td>
                        <td className="p-4">{row.vaccine}</td>
                        <td className="p-4">{row.due}</td>
                        <td className="p-4">
                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="rounded-[30px] bg-slate-900 p-6 text-white shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">Recent notes</h2>
                <HeartPulse className="text-orange-300" size={20} />
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="font-semibold text-white">Routine check complete</div>
                  <div className="mt-2">Luna’s skin and coat look healthy. No issues noted during the last visit.</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="font-semibold text-white">Medication review</div>
                  <div className="mt-2">Milo is responding well to the prescribed treatment with improved energy.</div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
