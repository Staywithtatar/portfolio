import Image from 'next/image';
import { Download, ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      {/* subtle background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(ellipse, rgba(99, 102, 241, 0.10) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
              {profile.title.split(' / ').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-zinc-300"> / </span>}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-lg text-zinc-600 max-w-xl leading-relaxed">
              {profile.intro}
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={14} />
                Real-world business systems
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-primary"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              )}
              <a href="#projects" className="btn-secondary">
                View Projects
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={15} />
                Contact Me
              </a>
            </div>

            {/* Highlights */}
            {profile.highlights?.length > 0 && (
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {profile.highlights.map((h) => (
                  <div key={h.label}>
                    <div className="text-2xl font-bold text-zinc-900 tabular-nums">
                      {h.value}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 -rotate-2" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-xl bg-white">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={480}
                  height={560}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
