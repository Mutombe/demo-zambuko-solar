import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  MapPin,
  Phone,
  WhatsappLogo,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  CheckCircle,
  Lightbulb,
  Leaf,
  Rocket,
  ShieldCheck,
  Briefcase,
  CurrencyDollar,
  Sun,
  Lightning,
  Drop,
  Wrench,
  ChatCircleDots,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   UTILITY -- Icon map for services
   ================================================================ */
const iconMap = {
  Lightbulb, Leaf, Rocket, Star, ShieldCheck, Briefcase, CurrencyDollar,
};


/* ================================================================
   ANIMATED COUNTER -- counts up when in view
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


/* ================================================================
   NOISE TEXTURE -- reusable inline noise overlay
   ================================================================ */
function NoiseTexture({ opacity = 0.035 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />
  );
}


/* ================================================================
   GREEN ENERGY PARTICLES -- floating green dots
   ================================================================ */
function GreenParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `radial-gradient(circle, rgba(0,166,81,${Math.random() * 0.5 + 0.15}) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle-float ${Math.random() * 8 + 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}


/* ================================================================
   1. HERO -- Full Viewport, Bright White Theme, Crossfade Carousel
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages.map(img => img.url);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-white">
      {/* Background carousel with crossfade + parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt={hero.backgroundImages[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        {/* Dark overlay -- same as inner page heroes */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/30 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/30 to-transparent z-[1]" />
      </motion.div>

      {/* Subtle green particles */}
      <GreenParticles />

      {/* Slide indicators -- right edge (green bars) */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-[3px] transition-all duration-700 rounded-full ${
              i === currentSlide ? 'h-10 bg-gold-500' : 'h-4 bg-navy-900/20 hover:bg-navy-900/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Vertical green accent line -- left edge */}
      <div className="absolute top-[15%] left-0 w-[3px] h-32 sm:h-48 bg-gradient-to-b from-transparent via-gold-500 to-transparent z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36"
        style={{ y: textY, opacity }}
      >
        {/* Small green accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-16 h-[3px] bg-gradient-to-r from-gold-500 to-gold-400/50 mb-6 origin-left rounded-full"
        />

        {/* Subtitle badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-8"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {hero.badge}
        </motion.p>

        {/* Giant stacked text -- POWER / YOUR / LIFE. */}
        <div className="overflow-hidden">
          {hero.titleLines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'YOUR'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent'
                    : 'text-white'
                }`}
                style={{
                  fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                  fontWeight: line === 'YOUR' ? 800 : 300,
                }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="flex items-center gap-3 mt-8"
        >
          <div className="w-8 h-[2px] bg-gold-500/60" />
          <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.trustLine}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 1.4 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/20 rounded-full"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {hero.ctaPrimary}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:border-gold-500 hover:text-gold-400 hover:bg-white/5 rounded-full"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-navy-900/30 text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-gold-500/60" />
        </motion.div>
      </motion.div>

      {/* Side text -- vertical */}
      <div className="hidden lg:flex absolute right-8 bottom-12 z-20">
        <span
          className="text-navy-900/10 text-[10px] uppercase tracking-[0.4em]"
          style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-sans)' }}
        >
          Zambuko Solar &mdash; J Way Mall &middot; Belgravia, Harare
        </span>
      </div>
    </section>
  );
}


/* ================================================================
   2. GREEN MARQUEE TICKER
   ================================================================ */
function MarqueeTicker() {
  const items = ['SOLAR PANELS', 'BATTERIES', 'INVERTERS', 'IRRIGATION', 'HOME SYSTEMS', 'CHARGE CONTROLLERS', 'OFF-GRID POWER'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-gold-500 py-4 sm:py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-8 mx-6 sm:mx-8">
            <span className="text-white font-heading text-base sm:text-xl font-semibold tracking-wider uppercase">
              {item}
            </span>
            <span className="text-white/40 text-sm">&diams;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. SERVICES GRID -- 7 cards with full-bleed local photos
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const { servicesPreview, services } = siteData;

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-14 sm:mb-20"
        >
          <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Solutions</p>
              <h2 className="font-heading text-navy-900 leading-[0.92] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                What We <span className="text-gold-500">Offer</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group text-navy-900/40 text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-gold-500 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              All Services
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Grid -- first card spans 2 cols */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {servicesPreview.map((service, i) => {
            const IconComp = iconMap[service.iconName] || Star;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.03 * i }}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <Link
                  to={`/services#${services?.items?.[i]?.slug || ''}`}
                  className={`group relative block overflow-hidden rounded-2xl ${i === 0 ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-[3/4]'}`}
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    loading="eager"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10 opacity-80" />

                  {/* Green number watermark */}
                  <div className="absolute top-4 right-5 z-10">
                    <span className="text-gold-500/20 font-heading text-6xl sm:text-7xl font-bold leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Green icon badge */}
                  <div className="absolute top-5 left-5 z-10 w-10 h-10 rounded-xl border border-gold-500/40 flex items-center justify-center bg-navy-950/50 backdrop-blur-sm group-hover:bg-gold-500/30 group-hover:border-gold-500/70 transition-all duration-500">
                    <IconComp size={18} weight="light" className="text-gold-400" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                    <h3 className="font-heading text-white text-xl sm:text-2xl font-semibold tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-gold-400 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Bottom green accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-400 z-10 rounded-b-2xl" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. HOW IT WORKS -- "YOUR SOLAR JOURNEY"
   ================================================================ */
function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      desc: 'Tell us about your power needs. We assess your property, usage patterns, and budget to recommend the right system.',
      icon: ChatCircleDots,
    },
    {
      number: '02',
      title: 'System Design',
      desc: 'Our technicians design a custom solar solution. We select the right panels, batteries, and inverter for your specific needs.',
      icon: Lightbulb,
    },
    {
      number: '03',
      title: 'Installation',
      desc: 'Professional installation by our trained team. Clean wiring, secure mounting, and thorough testing before handover.',
      icon: Wrench,
    },
    {
      number: '04',
      title: 'Power On',
      desc: 'Flip the switch and enjoy clean, reliable energy. We train you on system use and provide ongoing after-sales support.',
      icon: Lightning,
    },
  ];

  return (
    <section ref={ref} className="bg-earth-50 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
          <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>How It Works</p>
          <h2 className="font-heading text-navy-900 leading-[0.95] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            Your Solar <span className="text-gold-500">Journey</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line -- desktop */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gold-200 via-gold-500 to-gold-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
            {steps.map((step, i) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="relative text-center z-10"
                >
                  {/* Circle with number */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border-2 border-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/10 relative">
                    <IconComp size={24} weight="duotone" className="text-gold-500" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading text-navy-900 text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-700/60 text-sm leading-relaxed max-w-[260px] mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. PRODUCTS SHOWCASE -- Horizontal scrolling cards
   ================================================================ */
function ProductsShowcase() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '0px' });
  const { productsShowcase } = siteData;

  return (
    <section ref={containerRef} className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Featured Products</p>
            <h2 className="font-heading text-navy-900 leading-[0.92] font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Popular <span className="text-gold-500">Systems</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group text-navy-900/40 text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-gold-500 transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            View All Products
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {productsShowcase.map((product, i) => (
            <div
              key={product.name}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] bg-earth-50 rounded-2xl overflow-hidden border border-earth-200 hover:border-gold-300 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gold-500 text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 font-semibold rounded-full" style={{ fontFamily: 'var(--font-sans)' }}>
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 sm:p-6">
                <h4 className="text-navy-900 font-heading text-lg font-semibold mb-1">
                  {product.name}
                </h4>
                <p className="text-navy-700/50 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  {product.spec}
                </p>
                <div className="flex items-center gap-2 mt-4 text-gold-500 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>View Details</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   6. STATS BAND -- Dark teal background with green accents
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const { stats } = siteData;

  return (
    <section ref={ref} className="relative bg-navy-900 overflow-hidden">
      {/* Green glow gradients behind numbers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-gold-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-gold-500/8 rounded-full blur-3xl" />
      </div>

      {/* Top green border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      {/* Bottom green border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <NoiseTexture opacity={0.02} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.12 }}
              className="text-center relative"
            >
              <div
                className="font-heading text-gold-400 leading-none font-bold"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', textShadow: '0 0 40px rgba(0,166,81,0.2)' }}
              >
                <AnimatedCounter target={stat.number.replace(/[^0-9]/g, '')} suffix={stat.number.replace(/[0-9]/g, '')} duration={2.5} />
              </div>
              <div className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.25em] mt-3" style={{ fontFamily: 'var(--font-sans)' }}>
                {stat.label}
              </div>
              {/* Separator line */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. ABOUT / STORY SECTION -- Split layout on light bg
   ================================================================ */
function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section ref={ref} className="bg-earth-50 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left -- Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Story</p>
            <h2 className="font-heading text-navy-900 leading-[0.95] font-bold mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Bridging Zimbabwe to<br />
              <span className="text-gold-500">Clean Energy</span>
            </h2>
            <p className="text-navy-700/60 text-sm sm:text-base leading-relaxed mb-6 max-w-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              &ldquo;Zambuko&rdquo; means &ldquo;bridge&rdquo; in Shona. Since 2018, we have been bridging the gap between Zimbabwe&rsquo;s energy challenges and a solar-powered future. Not with expensive imports, but with affordable systems built for real African conditions.
            </p>
            <p className="text-navy-700/40 text-sm leading-relaxed max-w-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              From our two Harare locations, we serve homeowners, farmers, businesses, and institutions across the country. Every system we install is a step toward energy independence.
            </p>

            <div className="w-full h-px bg-navy-200/50 my-8" />

            <div className="flex gap-10 sm:gap-16">
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold leading-none">2018</div>
                <div className="text-navy-700/40 text-[10px] uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>Founded</div>
              </div>
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold leading-none">400+</div>
                <div className="text-navy-700/40 text-[10px] uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>Units Sold</div>
              </div>
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold leading-none">2</div>
                <div className="text-navy-700/40 text-[10px] uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>Locations</div>
              </div>
            </div>
          </motion.div>

          {/* Right -- Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/danny-messina-OiPtLN9_04w-unsplash.jpg"
                  alt="Solar panel installation by Zambuko Solar"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden rounded-xl border-4 border-earth-50 shadow-2xl">
                <img
                  src="/images/raze-solar-Q8V1EEvnJgk-unsplash.jpg"
                  alt="Solar panel closeup"
                  className="w-full aspect-square object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* "Est. 2018" badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-gold-500 text-white p-5 sm:p-7 rounded-xl shadow-2xl">
                <div className="text-center">
                  <div className="font-heading text-xs uppercase tracking-[0.2em] leading-none" style={{ fontFamily: 'var(--font-sans)' }}>Est.</div>
                  <div className="font-heading text-3xl sm:text-4xl font-bold leading-none mt-1">2018</div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 rounded-tl-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   8. WHY CHOOSE US -- 4 points with image, light green bg
   ================================================================ */
function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const { whyChooseUs } = siteData;

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--color-green-tint)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left -- Image with green accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <img
              src={whyChooseUs.image}
              alt={whyChooseUs.imageAlt}
              className="w-full aspect-[4/5] object-cover object-center rounded-2xl"
              loading="eager"
            />
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold-500/40 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold-500/40 rounded-br-2xl" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-xl shadow-xl hidden sm:block">
              <div className="text-3xl font-bold font-heading">{whyChooseUs.experienceYears}</div>
              <div className="text-sm font-medium text-white/80">{whyChooseUs.experienceLabel}</div>
            </div>
          </motion.div>

          {/* Right -- Points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>The Difference</p>
            <h2 className="font-heading text-navy-900 leading-[0.95] font-bold mb-12" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
              Why Choose <span className="text-gold-500">Zambuko</span>
            </h2>

            <div className="space-y-8">
              {whyChooseUs.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-9 h-9 rounded-xl border border-gold-500/30 flex items-center justify-center bg-gold-500/10">
                      <CheckCircle size={18} weight="fill" className="text-gold-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-navy-900 text-base sm:text-lg font-semibold mb-1">
                      {point.title}
                    </h4>
                    <p className="text-navy-700/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   9. TESTIMONIALS -- Light green tint bg, auto-cycling
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  const displayTestimonials = homeTestimonials.slice(0, 6);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % displayTestimonials.length);
  }, [displayTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  }, [displayTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = displayTestimonials[active];

  return (
    <section ref={ref} className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle green tint bg shapes */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] rounded-bl-[100px] opacity-30" style={{ backgroundColor: 'var(--color-green-tint)' }} />
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] rounded-tr-[100px] opacity-20" style={{ backgroundColor: 'var(--color-green-tint)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          {/* Section header */}
          <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
          <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Testimonials</p>
          <h2 className="font-heading text-navy-900 leading-[0.95] font-bold mb-12" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            What Our Customers <span className="text-gold-500">Say</span>
          </h2>

          {/* Green quote marks */}
          <Quotes size={48} weight="fill" className="text-gold-500/15 mx-auto mb-8" />

          {/* Quote text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote
                className="text-navy-900 text-lg sm:text-xl lg:text-2xl leading-relaxed font-heading mb-10"
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-[2px] bg-gold-500 rounded-full" />
                <div className="text-navy-900 text-sm uppercase tracking-[0.15em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                  {t.name}
                </div>
                <div className="text-navy-700/40 text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {t.role}
                </div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-gold-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-400 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={16} />
            </button>

            <div className="flex gap-2">
              {displayTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-gold-500' : 'w-3 bg-navy-200 hover:bg-navy-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-400 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   10. LOCATIONS STRIP -- 2 Harare stores
   ================================================================ */
function LocationsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  const locations = [
    {
      name: 'J Way Mall Store',
      subtitle: 'Main Retail Location',
      address: 'Shop 5 J Way Mall, Along Julius Nyerere Way',
      phone: '+263 778 210 398',
      image: '/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg',
    },
    {
      name: 'Belgravia Office',
      subtitle: 'Corporate & Consultations',
      address: '6 Aberdeen Road, Belgravia',
      phone: '+263 718 393 095',
      image: '/images/manny-becerra-NgdhrwAx0J8-unsplash.jpg',
    },
  ];

  return (
    <section ref={ref} className="bg-earth-50 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
          <h2 className="font-heading text-navy-900 leading-[0.95] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            Two Locations, <span className="text-gold-500">One Mission</span>
          </h2>
        </motion.div>

        {/* Location cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-earth-200 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 group"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
              </div>
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-navy-900 text-xl font-semibold mb-1">{loc.name}</h3>
                <p className="text-gold-500 text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ fontFamily: 'var(--font-sans)' }}>{loc.subtitle}</p>
                <div className="flex items-start gap-2 text-navy-700/50 text-sm mb-2">
                  <MapPin size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-navy-700/50 text-sm">
                  <Phone size={16} className="text-gold-500 shrink-0" />
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-gold-500 transition-colors">{loc.phone}</a>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-6 bg-gold-500/10 border border-gold-500/20 text-gold-600 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Visit Store
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   11. CTA SECTION -- Dark teal with solar panel background
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={homeCta.backgroundImage}
          alt={homeCta.backgroundAlt}
          className="w-full h-[130%] object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-900/70" />
      </motion.div>

      <NoiseTexture opacity={0.03} />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 1 }}
        >
          {/* Green line */}
          <div className="w-16 h-[3px] bg-gold-500 mx-auto mb-8 rounded-full" />

          {/* Giant text */}
          <h2
            className="font-heading text-white leading-[0.92] font-bold mb-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            READY TO<br />
            <span className="text-gold-400">GO SOLAR</span>?
          </h2>

          <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            {homeCta.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25 rounded-full"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-green-400/60 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-green-500/20 hover:border-green-400 rounded-full"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <WhatsappLogo size={20} weight="fill" />
              {homeCta.ctaSecondary}
            </a>
          </div>

          {/* Contact strip */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-white/30 uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-sans)' }}>
            <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={14} /> {business.phone}
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <a href={`mailto:${business.email}`} className="hover:text-gold-400 transition-colors">
              {business.email}
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> J Way Mall &middot; Belgravia, Harare
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME -- Assembled
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <ServicesGrid />
      <HowItWorks />
      <ProductsShowcase />
      <StatsBand />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <LocationsStrip />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
