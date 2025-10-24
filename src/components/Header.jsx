import { CheckCircle2, User } from 'lucide-react';

export default function Header({ verified, onVerify }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 grid place-items-center shadow-lg shadow-cyan-500/20">
            <User className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-tight">NearWork</span>
              {verified && (
                <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-label="Verified" />
              )}
            </div>
            <p className="text-xs text-white/60">Local workforce × Local requests</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!verified ? (
            <button
              onClick={onVerify}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500/10 text-cyan-300 px-4 py-2 text-sm font-medium hover:bg-cyan-500/20 border border-cyan-400/30 transition"
            >
              <CheckCircle2 className="h-4 w-4" />
              Verify with DigiLocker
            </button>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 text-emerald-300 px-3 py-1.5 text-sm border border-emerald-400/30">
              <CheckCircle2 className="h-4 w-4" /> Verified
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
