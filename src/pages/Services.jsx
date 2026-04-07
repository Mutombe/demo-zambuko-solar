import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Leaf,
  Rocket,
  Star,
  ShieldCheck,
  Briefcase,
  CurrencyDollar,
  Phone,
  WhatsappLogo,
  CaretDown,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

const iconMap = { Lightbulb, Leaf, Rocket, Star, ShieldCheck, Briefcase, CurrencyDollar };

function Services() {
  const { services, business } = siteData;
  const location = useLocation();
  const [expandedService, setExpandedService] = useState(null);

  // Scroll to hash on load
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      setExpandedService(slug);
      setTimeout(() => {
        const el = document.getElementById(slug);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [location.hash]);

  return (
    <PageTransition>
      <PageHero
        label="Our Services"
        title={services.heroTitle}
        subtitle={services.heroSubtitle}
        image="/images/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg"
        imageAlt="Solar panels closeup"
      />

      {/* Services List */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {services.items.map((service, i) => {
              const IconComp = iconMap[service.iconName] || Star;
              const isExpanded = expandedService === service.slug;

              return (
                <SectionReveal key={service.slug} delay={i * 0.06}>
                  <div
                    id={service.slug}
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isExpanded ? 'border-gold-300 shadow-lg shadow-gold-500/5' : 'border-earth-200 hover:border-gold-200'
                    }`}
                  >
                    {/* Header -- clickable */}
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.slug)}
                      className="w-full flex items-center gap-5 p-6 sm:p-8 text-left"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                        <IconComp size={24} weight="duotone" className="text-gold-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-gold-500/30 font-heading text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                          <h3 className="font-heading text-navy-900 text-xl sm:text-2xl font-semibold truncate">{service.title}</h3>
                        </div>
                      </div>
                      <CaretDown
                        size={20}
                        className={`text-navy-400 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-8 pb-8">
                            <div className="grid lg:grid-cols-2 gap-8 pt-4 border-t border-earth-200">
                              {/* Image */}
                              <div className="rounded-xl overflow-hidden">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full aspect-[16/10] object-cover object-center"
                                  loading="eager"
                                />
                              </div>
                              {/* Details */}
                              <div>
                                <p className="text-navy-700/60 text-sm sm:text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                                  {service.desc}
                                </p>
                                <h4 className="font-heading text-navy-900 text-sm font-semibold uppercase tracking-wider mb-4">What&rsquo;s Included</h4>
                                <div className="space-y-3">
                                  {service.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                      <CheckCircle size={18} weight="fill" className="text-gold-500 mt-0.5 shrink-0" />
                                      <span className="text-navy-700/60 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{feature}</span>
                                    </div>
                                  ))}
                                </div>
                                <Link
                                  to="/contact"
                                  className="inline-flex items-center gap-2 bg-gold-500 text-white px-6 py-3 text-sm uppercase tracking-[0.1em] font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 mt-8"
                                >
                                  Get a Quote <ArrowRight size={14} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/raze-solar-Q8V1EEvnJgk-unsplash.jpg" alt="Solar installation" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{services.ctaTitle}</h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>{services.ctaSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-gold-400 transition-all duration-500">
                Free Consultation <ArrowRight size={16} />
              </Link>
              <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-green-400/60 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-green-500/20 transition-all duration-500">
                <WhatsappLogo size={20} weight="fill" /> WhatsApp Us
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default Services;
