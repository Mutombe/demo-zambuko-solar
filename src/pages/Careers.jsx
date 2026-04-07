import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Rocket,
  ShieldCheck,
  PaperPlaneTilt,
  Envelope,
  WhatsappLogo,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

const cultureIcons = { Users, Rocket, ShieldCheck };

function Careers() {
  const { careers, business } = siteData;
  const [expandedJob, setExpandedJob] = useState(null);

  const handleApply = (jobTitle) => {
    const subject = encodeURIComponent(`Application: ${jobTitle}`);
    const body = encodeURIComponent(`Hello Zambuko Solar,\n\nI am writing to express my interest in the ${jobTitle} position.\n\n[Please attach your CV]\n\nThank you.`);
    window.open(`mailto:${business.email}?subject=${subject}&body=${body}`, '_blank');
    toast.success('Opening your email client...');
  };

  return (
    <PageTransition>
      <PageHero
        label="Careers"
        title={careers.heroTitle}
        subtitle={careers.heroSubtitle}
        image={careers.heroImage}
        imageAlt="Solar installation team"
      />

      {/* Culture Section */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <div>
                <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
                <h2 className="font-heading text-navy-900 text-3xl sm:text-4xl font-bold mb-4">{careers.cultureTitle}</h2>
                <p className="text-gold-600 text-sm font-semibold mb-8" style={{ fontFamily: 'var(--font-sans)' }}>{careers.cultureTagline}</p>
                <div className="space-y-6">
                  {careers.cultureItems.map((item) => {
                    const IconComp = cultureIcons[item.iconName] || Users;
                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                          <IconComp size={22} weight="duotone" className="text-gold-500" />
                        </div>
                        <div>
                          <h4 className="font-heading text-navy-900 font-semibold text-base mb-1">{item.title}</h4>
                          <p className="text-navy-700/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal direction="left">
              <div className="relative">
                <img src={careers.cultureImage} alt={careers.cultureImageAlt} className="w-full aspect-[4/3] object-cover object-center rounded-2xl" loading="eager" />
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 rounded-tr-xl" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold-500/30 rounded-bl-xl" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: 'var(--color-green-tint)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-14">
              <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
              <h2 className="font-heading text-navy-900 text-3xl sm:text-4xl font-bold">
                Open <span className="text-gold-500">Positions</span>
              </h2>
            </div>
          </SectionReveal>

          {careers.openings && careers.openings.length > 0 ? (
            <div className="space-y-4">
              {careers.openings.map((job, i) => {
                const isExpanded = expandedJob === i;
                return (
                  <SectionReveal key={job.title} delay={i * 0.08}>
                    <div className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${isExpanded ? 'border-gold-300 shadow-lg shadow-gold-500/5' : 'border-earth-200'}`}>
                      <button
                        onClick={() => setExpandedJob(isExpanded ? null : i)}
                        className="w-full flex items-center gap-4 p-6 text-left"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                          <Briefcase size={20} weight="duotone" className="text-gold-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-navy-900 text-lg font-semibold">{job.title}</h3>
                          <div className="flex items-center gap-3 text-navy-700/40 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                            <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                            <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                          </div>
                        </div>
                        <ArrowRight size={18} className={`text-navy-400 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-earth-200">
                              <p className="text-navy-700/60 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>{job.desc}</p>
                              <button
                                onClick={() => handleApply(job.title)}
                                className="inline-flex items-center gap-2 bg-gold-500 text-white px-6 py-3 text-sm uppercase tracking-[0.1em] font-semibold rounded-full hover:bg-gold-400 transition-all duration-300"
                              >
                                <PaperPlaneTilt size={16} weight="fill" />
                                Apply Now
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          ) : (
            <SectionReveal>
              <div className="bg-white rounded-2xl p-8 sm:p-10 text-center border border-earth-200">
                <Briefcase size={40} weight="duotone" className="text-gold-500/30 mx-auto mb-4" />
                <h3 className="font-heading text-navy-900 text-xl font-semibold mb-2">No Current Openings</h3>
                <p className="text-navy-700/50 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  {careers.noOpenings || 'Check back soon or send us your CV for future opportunities.'}
                </p>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/markus-spiske-pwFr_1SUXRo-unsplash.jpg" alt="Solar panel" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold mb-6">{careers.ctaTitle}</h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>{careers.ctaSubtitle}</p>
            <button
              onClick={() => {
                const subject = encodeURIComponent('General Application - Zambuko Solar');
                const body = encodeURIComponent('Hello Zambuko Solar,\n\nI am interested in joining your team.\n\n[Please attach your CV]\n\nThank you.');
                window.open(`mailto:${business.email}?subject=${subject}&body=${body}`, '_blank');
              }}
              className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-gold-400 transition-all duration-500"
            >
              <Envelope size={18} />
              {careers.ctaCta}
            </button>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default Careers;
