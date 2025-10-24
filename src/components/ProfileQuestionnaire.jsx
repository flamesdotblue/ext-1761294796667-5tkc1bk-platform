import { useEffect, useState } from 'react';
import { Briefcase, Building2, School } from 'lucide-react';

const employmentStates = [
  { value: 'employed', label: 'Employed' },
  { value: 'unemployed', label: 'Unemployed / Between jobs' },
  { value: 'student', label: 'Student / Fresher' },
  { value: 'freelancer', label: 'Freelancer / Self-employed' },
];

const industries = [
  'Information Technology',
  'Construction',
  'Retail',
  'Healthcare',
  'Hospitality',
  'Logistics',
  'Education',
  'Finance',
  'Design',
  'Other',
];

export default function ProfileQuestionnaire({ profile, onChange, onSubmit }) {
  const [local, setLocal] = useState(profile);

  useEffect(() => {
    setLocal(profile);
  }, [profile]);

  const setField = (key, value) => setLocal((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(local);
    onSubmit?.();
  };

  return (
    <form id="questionnaire" onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 grid place-items-center">
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Your professional profile</h2>
          <p className="text-sm text-white/60">Answer a few questions to match with local work.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm text-white/70 mb-1">Full Name</label>
          <input
            type="text"
            value={local.name}
            onChange={(e) => setField('name', e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-1 flex items-center gap-2"><School className="h-4 w-4" /> Highest Education</label>
          <input
            type="text"
            value={local.highestEducation}
            onChange={(e) => setField('highestEducation', e.target.value)}
            placeholder="e.g., B.Tech in CSE, MBA, Diploma"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-1">Total Experience (years)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={local.yearsExperience}
            onChange={(e) => setField('yearsExperience', e.target.value)}
            placeholder="e.g., 3"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-1">Present Employment State</label>
          <select
            value={local.presentEmploymentState}
            onChange={(e) => setField('presentEmploymentState', e.target.value)}
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {employmentStates.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {local.presentEmploymentState === 'employed' && (
          <>
            <div>
              <label className="block text-sm text-white/70 mb-1 flex items-center gap-2"><Building2 className="h-4 w-4" /> Company</label>
              <input
                type="text"
                value={local.company}
                onChange={(e) => setField('company', e.target.value)}
                placeholder="Current employer"
                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Position</label>
              <input
                type="text"
                value={local.position}
                onChange={(e) => setField('position', e.target.value)}
                placeholder="Your role"
                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </>
        )}

        {local.presentEmploymentState !== 'employed' && (
          <>
            <div>
              <label className="block text-sm text-white/70 mb-1">Preferred Industry</label>
              <select
                value={local.industry}
                onChange={(e) => setField('industry', e.target.value)}
                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select industry</option>
                {industries.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Relevant Experience (summary)</label>
              <input
                type="text"
                value={local.experienceSummary || ''}
                onChange={(e) => setField('experienceSummary', e.target.value)}
                placeholder="e.g., 2 yrs retail sales, POS handling"
                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </>
        )}

        <div className="md:col-span-2 flex items-center justify-between rounded-lg bg-white/5 border border-white/10 p-4">
          <div>
            <p className="font-medium">Open for Work</p>
            <p className="text-sm text-white/60">Enable to appear in local search and receive requests.</p>
          </div>
          <button
            type="button"
            onClick={() => setField('openForWork', !local.openForWork)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${local.openForWork ? 'bg-emerald-500/60' : 'bg-white/10'}`}
            aria-pressed={local.openForWork}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${local.openForWork ? 'translate-x-7' : 'translate-x-1'}`}
            />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button type="submit" className="inline-flex items-center justify-center rounded-md bg-cyan-500 text-slate-950 px-5 py-2.5 text-sm font-medium shadow hover:brightness-110 transition">
          Save Profile
        </button>
        <span className="text-sm text-white/60">Your data is securely stored. Verification uses DigiLocker.</span>
      </div>
    </form>
  );
}
