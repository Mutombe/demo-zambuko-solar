import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Leaf,
  Users,
  Star,
  WhatsappLogo,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

const iconMap = { Heart, ShieldCheck, Lightbulb, Handshake, Leaf, Users };

function About() {
  const { about, business } = siteData;

  return (
    <PageTransition>
      <PageHero
        label="About Us"
        title={about.heroTitle}
        subtitle={about.heroSubtitle}
        image="/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg"
        imageAlt="Zambuko Solar panel farm"
      />

      {/* Story Section */}
      <section className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <SectionReveal direction="right">
              <div className="relative">
                <img src={about.storyImage} alt={about.storyImageAlt} className="w-full aspect-[4/5] object-cover object-center rounded-2xl" loading="eager" />
                <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-xl shadow-xl hidden sm:block">
                  <div className="text-3xl font-bold font-heading">{about.storyProjectCount}</div>
                  <div className="text-sm font-medium text-white/80">{about.storyProjectLabel}</div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 rounded-tr-xl" />
              </div>
            </SectionReveal>
            <SectionReveal direction="left">
              <div>
                <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
                <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Story</p>
                <h2 className="font-heading text-navy-900 text-3xl sm:text-4xl font-bold mb-8 leading-tight">{about.storyTitle}</h2>
                {about.storyParagraphs.map((p, i) => (
                  <p key={i} className={`text-sm sm:text-base leading-relaxed mb-4 ${i === 0 ? 'text-navy-700/70' : 'text-navy-700/50'}`} style={{ fontFamily: 'var(--font-sans)' }}>{p}</p>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: 'var(--color-green-tint)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal direction="right">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-earth-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <Lightbulb size={22} weight="duotone" className="text-gold-500" />
                </div>
                <h3 className="font-heading text-navy-900 text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-navy-700/60 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{about.mission}</p>
              </div>
            </SectionReveal>
            <SectionReveal direction="left">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-earth-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <Star size={22} weight="duotone" className="text-gold-500" />
                </div>
                <h3 className="font-heading text-navy-900 text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-navy-700/60 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{about.vision}</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
              <h2 className="font-heading text-navy-900 text-3xl sm:text-4xl font-bold">Our <span className="text-gold-500">Values</span></h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {about.values.map((value, i) => {
              const IconComp = iconMap[value.iconName] || Heart;
              return (
                <SectionReveal key={value.title} delay={i * 0.08}>
                  <div className="bg-earth-50 rounded-2xl p-6 sm:p-8 border border-earth-200 hover:border-gold-300 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/5 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                      <IconComp size={24} weight="duotone" className="text-gold-500" />
                    </div>
                    <h4 className="font-heading text-navy-900 text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-navy-700/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{value.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-earth-50 py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
              <h2 className="font-heading text-navy-900 text-3xl sm:text-4xl font-bold">Meet the <span className="text-gold-500">Team</span></h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {about.team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-gold-500/30 transition-colors duration-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="eager" />
                  </div>
                  <h4 className="font-heading text-navy-900 font-semibold text-lg">{member.name}</h4>
                  <p className="text-gold-600 text-xs uppercase tracking-[0.15em] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{member.role}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
              <h2 className="font-heading text-navy-900 text-3xl sm:text-4xl font-bold">Our <span className="text-gold-500">Journey</span></h2>
            </div>
          </SectionReveal>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-500 via-gold-300 to-gold-500/20 sm:-translate-x-1/2" />
            {about.milestones.map((milestone, i) => (
              <SectionReveal key={milestone.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md sm:-translate-x-1/2 z-10" style={{ top: '4px' }} />
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                    <span className="text-gold-500 font-heading text-xl font-bold">{milestone.year}</span>
                    <h4 className="font-heading text-navy-900 text-lg font-semibold mt-1">{milestone.title}</h4>
                    <p className="text-navy-700/50 text-sm leading-relaxed mt-2" style={{ fontFamily: 'var(--font-sans)' }}>{milestone.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/harisankar-hp6Xj7LyZ1E-unsplash.jpg" alt="Solar panels at sunset" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{about.ctaTitle}</h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>{about.ctaSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-gold-400 hover:shadow-xl transition-all duration-500">
                {about.ctaCta} <ArrowRight size={16} />
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

export default About;
