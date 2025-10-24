import { MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const sampleRequests = [
  {
    id: 1,
    title: 'Retail Associate for weekend shift',
    industry: 'Retail',
    location: 'Downtown Market',
    type: 'Part-time',
    pay: '₹350/hour',
  },
  {
    id: 2,
    title: 'React Developer for local startup',
    industry: 'Information Technology',
    location: 'Tech Park',
    type: 'Contract',
    pay: '₹80,000/month',
  },
  {
    id: 3,
    title: 'Front Desk at boutique hotel',
    industry: 'Hospitality',
    location: 'Riverside',
    type: 'Full-time',
    pay: '₹28,000/month',
  },
  {
    id: 4,
    title: 'Warehouse picker/packer',
    industry: 'Logistics',
    location: 'Industrial Area',
    type: 'Shift',
    pay: '₹20,000/month',
  },
];

export default function LocalFeed({ profile, verified }) {
  const canMatch = profile?.openForWork;
  const filtered = profile?.industry
    ? sampleRequests.filter((r) => r.industry === profile.industry)
    : sampleRequests;

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur h-fit">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Nearby work requests</h2>
          <p className="text-sm text-white/60">Tailored to your preferences and visibility.</p>
        </div>
        <div className="flex items-center gap-2">
          {verified && (
            <span className="inline-flex items-center gap-1 text-xs rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-1">
              <CheckCircle2 className="h-3 w-3" /> Verified
            </span>
          )}
          <span className={`text-xs rounded-full border px-2 py-1 ${canMatch ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300' : 'border-white/10 bg-white/5 text-white/60'}`}>
            {canMatch ? 'Open for Work' : 'Not visible to recruiters'}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((req) => (
          <article key={req.id} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">{req.title}</h3>
                <p className="text-sm text-white/70 flex items-center gap-2 mt-1">
                  <Briefcase className="h-4 w-4" /> {req.industry}
                </p>
                <p className="text-sm text-white/60 flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" /> {req.location}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80">{req.type}</p>
                <p className="text-sm font-semibold text-cyan-300 mt-1">{req.pay}</p>
                <button
                  className={`mt-3 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium border transition ${canMatch ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-white/5 text-white/60 border-white/10 cursor-not-allowed'}`}
                  disabled={!canMatch}
                >
                  {canMatch ? 'Express Interest' : 'Enable Open for Work'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-sm text-white/60 mt-4">No local requests match your preferences yet. Try changing your industry or enabling Open for Work.</div>
      )}

      <div className="mt-6 text-xs text-white/50">
        Showing demo data. Location-aware matching would require permissions and backend services.
      </div>
    </div>
  );
}
