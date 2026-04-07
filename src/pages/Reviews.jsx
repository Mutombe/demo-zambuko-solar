import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Quotes,
  ArrowRight,
  WhatsappLogo,
  FunnelSimple,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

function Reviews() {
  const { reviews, business } = siteData;
  const [filter, setFilter] = useState(0); // 0 = all, 5 = 5-star, etc.

  const filtered = useMemo(() => {
    if (filter === 0) return reviews.items;
    return reviews.items.filter((r) => r.rating === filter);
  }, [filter, reviews.items]);

  const totalReviews = reviews.ratingBreakdown.reduce((acc, r) => acc + r.count, 0);
  const avgRating = (
    reviews.ratingBreakdown.reduce((acc, r) => acc + r.stars * r.count, 0) / totalReviews
  ).toFixed(1);

  return (
    <PageTransition>
      <PageHero
        label="Testimonials"
        title={reviews.heroTitle}
        subtitle={reviews.heroSubtitle}
        image="/images/manny-becerra-NgdhrwAx0J8-unsplash.jpg"
        imageAlt="Solar rooftop installation"
      />

      {/* Rating Summary */}
      <section className="bg-white py-16 sm:py-20 border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Overall rating */}
              <div className="text-center md:text-left shrink-0">
                <div className="font-heading text-6xl sm:text-7xl font-bold text-navy-900">{avgRating}</div>
                <div className="flex items-center gap-0.5 justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} weight="fill" className={i < Math.round(avgRating) ? 'text-gold-500' : 'text-earth-300'} />
                  ))}
                </div>
                <p className="text-navy-700/40 text-sm mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Based on {totalReviews} reviews
                </p>
              </div>

              {/* Breakdown bars */}
              <div className="flex-1 w-full max-w-lg space-y-2">
                {reviews.ratingBreakdown.map((item) => {
                  const pct = totalReviews > 0 ? (item.count / totalReviews) * 100 : 0;
                  return (
                    <button
                      key={item.stars}
                      onClick={() => setFilter(filter === item.stars ? 0 : item.stars)}
                      className={`flex items-center gap-3 w-full group ${filter === item.stars ? 'opacity-100' : 'opacity-70 hover:opacity-100'} transition-opacity`}
                    >
                      <span className="text-sm font-medium text-navy-700/60 w-4" style={{ fontFamily: 'var(--font-sans)' }}>{item.stars}</span>
                      <Star size={14} weight="fill" className="text-gold-500 shrink-0" />
                      <div className="flex-1 h-2.5 bg-earth-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-navy-700/40 w-8 text-right" style={{ fontFamily: 'var(--font-sans)' }}>{item.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-earth-50 py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {filter > 0 && (
            <div className="flex items-center gap-2 mb-8">
              <FunnelSimple size={16} className="text-navy-400" />
              <span className="text-sm text-navy-700/60" style={{ fontFamily: 'var(--font-sans)' }}>
                Showing {filter}-star reviews
              </span>
              <button
                onClick={() => setFilter(0)}
                className="text-gold-500 text-sm underline ml-2 hover:text-gold-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Clear filter
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((review, i) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-earth-200 hover:border-gold-300 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/5"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} weight="fill" className="text-gold-500" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, j) => (
                      <Star key={j} size={14} weight="fill" className="text-earth-300" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quotes size={24} weight="fill" className="text-gold-500/10 mb-3" />
                  <p className="text-navy-700/70 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                    {review.text}
                  </p>

                  {/* Attribution */}
                  <div className="border-t border-earth-200 pt-4">
                    <div className="font-heading text-navy-900 text-sm font-semibold">{review.name}</div>
                    <div className="text-navy-700/40 text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)' }}>{review.role}</div>
                    {review.project && (
                      <div className="text-gold-500 text-xs mt-1 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>{review.project}</div>
                    )}
                    {review.date && (
                      <div className="text-navy-700/30 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{review.date}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-navy-700/40" style={{ fontFamily: 'var(--font-sans)' }}>
              No reviews with this rating.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/biel-morro-HCha-UHkIg8-unsplash.jpg" alt="Solar panel" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{reviews.ctaTitle}</h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>{reviews.ctaSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-gold-400 transition-all duration-500">
                {reviews.ctaCta} <ArrowRight size={16} />
              </Link>
              <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(reviews.ctaWhatsappText)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-green-400/60 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-green-500/20 transition-all duration-500">
                <WhatsappLogo size={20} weight="fill" /> WhatsApp Us
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default Reviews;
