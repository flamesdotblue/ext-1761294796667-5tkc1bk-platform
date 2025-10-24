import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileQuestionnaire from './components/ProfileQuestionnaire';
import LocalFeed from './components/LocalFeed';

export default function App() {
  const [verified, setVerified] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    highestEducation: '',
    yearsExperience: '',
    presentEmploymentState: 'unemployed',
    company: '',
    position: '',
    industry: '',
    openForWork: false,
  });

  const handleVerify = () => {
    // Simulate successful DigiLocker verification
    setVerified(true);
  };

  const handleProfileChange = (updates) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const handleSubmitProfile = () => {
    // In a real app, submit to backend here
    // For now, just log
    console.log('Profile saved', profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header verified={verified} onVerify={handleVerify} />
      <main>
        <Hero verified={verified} onVerify={handleVerify} />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProfileQuestionnaire
              profile={profile}
              onChange={handleProfileChange}
              onSubmit={handleSubmitProfile}
            />
            <LocalFeed profile={profile} verified={verified} />
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} NearWork — Connect local workforce with local opportunities.</p>
          <p>Built with Vite + React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
