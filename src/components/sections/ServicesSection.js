import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Services"
          title="What I can build for you"
          subtitle="For startups, SMBs, and internal teams. I cover the work end-to-end — requirement, design, build, and deploy."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="surface rounded-2xl p-5 hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 mb-4">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
