import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Quotes,
  ArrowRight,
  WhatsappLogo,
  FunnelSimple,
  SunHorizon,
  GoogleLogo,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

/* Avatar pool — verified Unsplash face portraits */
const AVATAR_POOL = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face',
];

function Reviews() {
  const { reviews, business } = siteData;
  const [filter, setFilter] = useState(0);

  const items = reviews?.items || [];
  const filtered = useMemo(() => {
    if (filter === 0) return items;
    return items.filter((r) => r.rating === filter);
  }, [filter, items]);

  /* Handle both object {5: 8, 4: 3} and array [{stars, count}] formats */
  const breakdown = useMemo(() => {
    const rb = reviews?.ratingBreakdown || {};
    if (Array.isArray(rb)) {
      return [5, 4, 3, 2, 1].map((s) => {
        const found = rb.find((x) => x.stars === s);
        return { stars: s, count: found?.count || 0 };
      });
    }
    return [5, 4, 3, 2, 1].map((s) => ({ stars: s, count: rb[s] || 0 }));
  }, [reviews]);

  const totalReviews = breakdown.reduce((acc, r) => acc + r.count, 0) || items.length;
  const avgRating = totalReviews > 0
    ? (breakdown.reduce((acc, r) => acc + r.stars * r.count, 0) / totalReviews).toFixed(1)
    : (items.length > 0 ? (items.reduce((a, r) => a + r.rating, 0) / items.length).toFixed(1) : '4.8');

  return (
    <PageTransition>
      <PageHero
        label="Testimonials"
        title={reviews?.heroTitle || "Client Reviews"}
        subtitle={reviews?.heroSubtitle || "Real feedback from our solar customers."}
        image="/images/manny-becerra-NgdhrwAx0J8-unsplash.jpg"
        imageAlt="Solar rooftop installation"
      />

      {/* Featured Review — Full Width */}
      {items.length > 0 && (
        <section className="bg-white py-16 sm:py-20 border-b border-earth-200">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <SectionReveal>
              <Quotes size={48} weight="fill" className="text-gold-500/20 mx-auto mb-6" />
              <p className="font-heading text-navy-900 text-xl sm:text-2xl lg:text-3xl leading-relaxed italic mb-8">
                "{items[0].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={items[0].image || AVATAR_POOL[0]}
                  alt={items[0].name}
                  className="w-14 h-14 object-cover object-center border-2 border-gold-500"
                  loading="eager"
                />
                <div className="text-left">
                  <div className="font-heading text-navy-900 font-semibold">{items[0].name}</div>
                  <div className="text-gold-500 text-sm">{items[0].role}</div>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(items[0].rating)].map((_, j) => (
                      <Star key={j} size={12} weight="fill" className="text-gold-500" />
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Rating Summary + Breakdown */}
      <section className="bg-earth-50 py-16 sm:py-20 border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Overall */}
              <div className="text-center md:text-left shrink-0">
                <div className="font-heading text-6xl sm:text-7xl font-bold text-navy-900">{avgRating}</div>
                <div className="flex items-center gap-0.5 justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} weight="fill" className={i < Math.round(avgRating) ? 'text-gold-500' : 'text-earth-300'} />
                  ))}
                </div>
                <p className="text-navy-700/40 text-sm mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Based on {totalReviews} reviews
                </p>
                <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                  <GoogleLogo size={16} className="text-navy-400" />
                  <span className="text-xs text-navy-700/40">Google Verified</span>
                </div>
              </div>

              {/* Breakdown bars */}
              <div className="flex-1 w-full max-w-lg space-y-2.5">
                {breakdown.map((item) => {
                  const pct = totalReviews > 0 ? (item.count / totalReviews) * 100 : 0;
                  return (
                    <button
                      key={item.stars}
                      onClick={() => setFilter(filter === item.stars ? 0 : item.stars)}
                      className={`flex items-center gap-3 w-full group ${filter === item.stars ? 'opacity-100' : 'opacity-70 hover:opacity-100'} transition-opacity`}
                    >
                      <span className="text-sm font-medium text-navy-700/60 w-4">{item.stars}</span>
                      <Star size={14} weight="fill" className="text-gold-500 shrink-0" />
                      <div className="flex-1 h-3 bg-earth-200 overflow-hidden">
                        <div className="h-full bg-gold-500 transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-navy-700/40 w-8 text-right">{item.count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Avatar stack */}
              <div className="hidden lg:block shrink-0">
                <div className="flex -space-x-3">
                  {AVATAR_POOL.slice(0, 6).map((url, i) => (
                    <img key={i} src={url} alt="" className="w-10 h-10 object-cover border-2 border-white" loading="eager" />
                  ))}
                </div>
                <p className="text-xs text-navy-700/40 mt-2 text-center">Happy solar customers</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Filter bar */}
      {filter > 0 && (
        <div className="bg-white py-4 border-b border-earth-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center gap-2">
            <FunnelSimple size={16} className="text-navy-400" />
            <span className="text-sm text-navy-700/60">Showing {filter}-star reviews</span>
            <button onClick={() => setFilter(0)} className="text-gold-500 text-sm underline ml-2 hover:text-gold-600">Clear</button>
          </div>
        </div>
      )}

      {/* Reviews Grid — with avatars */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-14">
              <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6" />
              <h2 className="font-heading text-navy-900 text-2xl sm:text-3xl lg:text-4xl font-bold">
                What Our <span className="text-gold-500">Customers</span> Say
              </h2>
            </div>
          </SectionReveal>

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
                  key={review.name + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="bg-white p-6 sm:p-8 border border-earth-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 group"
                >
                  {/* Header — avatar + name + stars */}
                  <div className="flex items-start gap-4 mb-5">
                    <img
                      src={review.image || AVATAR_POOL[i % AVATAR_POOL.length]}
                      alt={review.name}
                      className="w-12 h-12 object-cover object-center border-2 border-gold-500/30 group-hover:border-gold-500 transition-colors shrink-0"
                      loading="eager"
                    />
                    <div className="min-w-0">
                      <div className="font-heading text-navy-900 text-sm font-semibold truncate">{review.name}</div>
                      <div className="text-navy-700/40 text-xs mt-0.5 truncate">{review.role}</div>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} size={12} weight="fill" className="text-gold-500" />
                        ))}
                        {[...Array(5 - review.rating)].map((_, j) => (
                          <Star key={`e${j}`} size={12} weight="fill" className="text-earth-300" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <Quotes size={20} weight="fill" className="text-gold-500/15 mb-2" />
                  <p className="text-navy-700/70 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
                    "{review.text}"
                  </p>

                  {/* Footer — project type + date */}
                  <div className="border-t border-earth-100 pt-4 flex items-center justify-between">
                    {review.project && (
                      <span className="inline-flex items-center gap-1.5 text-gold-600 text-xs font-medium px-2 py-1 bg-gold-50 border border-gold-200">
                        <SunHorizon size={12} weight="bold" />
                        {review.project}
                      </span>
                    )}
                    {review.date && (
                      <span className="text-navy-700/30 text-xs">{review.date}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-navy-700/40">No reviews with this rating.</div>
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
            <div className="w-12 h-[3px] bg-gold-500 mx-auto mb-6" />
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Go <span className="text-gold-400">Solar</span>?
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              Join 400+ families and businesses already powered by clean energy. Get your free solar assessment today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-300">
                Get Free Assessment <ArrowRight size={16} />
              </Link>
              <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-green-400/60 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-green-500/20 transition-all duration-300">
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
