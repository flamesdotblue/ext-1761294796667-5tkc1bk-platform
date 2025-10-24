import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero({ verified, onVerify }) {
  return (
    <section className="relative w-full h-[70vh] md:h-[76vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="backdrop-blur-sm bg-slate-950/30 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
            <span>Digital Identity. Verified Skills. Local Impact.</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            The social platform for local professionals and work requests
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Build a verified professional profile with DigiLocker, showcase your expertise, set Open for Work, and connect with nearby opportunities instantly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {!verified ? (
              <button onClick={onVerify} className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">
                <CheckCircle2 className="h-4 w-4" /> Verify with DigiLocker
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-md bg-emerald-500/20 text-emerald-300 px-4 py-2 text-sm border border-emerald-400/30">
                <CheckCircle2 className="h-4 w-4" /> Profile Verified
              </span>
            )}
            <a href="#questionnaire" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 border border-white/15 px-5 py-3 text-sm font-medium transition">
              Complete your profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
