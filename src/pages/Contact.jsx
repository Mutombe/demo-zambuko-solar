import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Phone,
  WhatsappLogo,
  Envelope,
  MapPin,
  Clock,
  ArrowRight,
  PaperPlaneTilt,
  CheckCircle,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

function Contact() {
  const { contact, business } = siteData;
  const [sendMethod, setSendMethod] = useState('whatsapp');
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Please fill in your name and message.');
      return;
    }

    const msgBody = `Name: ${form.name}\nEmail: ${form.email || 'Not provided'}\nPhone: ${form.phone || 'Not provided'}\nService: ${form.service || 'General inquiry'}\n\nMessage:\n${form.message}`;

    if (sendMethod === 'whatsapp') {
      window.open(
        `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(msgBody)}`,
        '_blank'
      );
    } else {
      window.open(
        `mailto:${business.email}?subject=${encodeURIComponent(`Inquiry from ${form.name}`)}&body=${encodeURIComponent(msgBody)}`,
        '_blank'
      );
    }
    toast.success('Opening your message...');
  };

  return (
    <PageTransition>
      <PageHero
        label="Contact Us"
        title={contact.heroTitle}
        subtitle={contact.heroSubtitle}
        image="/images/raphael-cruz-IwY-27ceRCA-unsplash.jpg"
        imageAlt="Solar energy equipment"
      />

      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info -- 2 cols */}
            <div className="lg:col-span-2">
              <SectionReveal direction="right">
                <div className="w-12 h-[3px] bg-gold-500 mb-6 rounded-full" />
                <h2 className="font-heading text-navy-900 text-2xl sm:text-3xl font-bold mb-8">
                  Get in <span className="text-gold-500">Touch</span>
                </h2>

                {/* Phone numbers */}
                <div className="space-y-4 mb-8">
                  <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <Phone size={20} weight="duotone" className="text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 text-sm font-semibold">{business.phone}</div>
                      <div className="text-navy-700/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Main line</div>
                    </div>
                  </a>
                  <a href={`tel:${business.phoneAltRaw}`} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <Phone size={20} weight="duotone" className="text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 text-sm font-semibold">{business.phoneAlt}</div>
                      <div className="text-navy-700/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Alternate</div>
                    </div>
                  </a>
                  <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <WhatsappLogo size={20} weight="fill" className="text-green-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 text-sm font-semibold">WhatsApp</div>
                      <div className="text-navy-700/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Chat with us</div>
                    </div>
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <Envelope size={20} weight="duotone" className="text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 text-sm font-semibold">{business.email}</div>
                      <div className="text-navy-700/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Email us</div>
                    </div>
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Clock size={20} weight="duotone" className="text-gold-500" />
                  </div>
                  <div>
                    {business.hours.map((h) => (
                      <div key={h.day} className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                        <span className="text-navy-900 font-medium">{h.day}:</span>{' '}
                        <span className="text-navy-700/50">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two Locations */}
                <div className="space-y-4">
                  {contact.locations.map((loc) => (
                    <div key={loc.name} className="bg-earth-50 rounded-xl p-5 border border-earth-200">
                      <h4 className="font-heading text-navy-900 text-sm font-semibold mb-1">{loc.name}</h4>
                      <div className="flex items-start gap-2 text-navy-700/50 text-sm mb-1">
                        <MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" />
                        <span style={{ fontFamily: 'var(--font-sans)' }}>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-navy-700/50 text-sm">
                        <Phone size={14} className="text-gold-500 shrink-0" />
                        <a href={`tel:${loc.phoneRaw}`} className="hover:text-gold-500 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>{loc.phone}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form -- 3 cols */}
            <div className="lg:col-span-3">
              <SectionReveal direction="left">
                <div className="bg-earth-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-earth-200">
                  <h3 className="font-heading text-navy-900 text-xl font-semibold mb-2">{contact.formTitle}</h3>
                  <p className="text-navy-700/50 text-sm mb-8" style={{ fontFamily: 'var(--font-sans)' }}>{contact.formSubtitle}</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy-900 text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-white border border-earth-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-navy-900 text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-white border border-earth-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy-900 text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-white border border-earth-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="+263 7XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-navy-900 text-sm font-medium mb-2">Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-white border border-earth-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="Solar Home Systems">Solar Home Systems</option>
                          <option value="Solar Irrigation">Solar Irrigation Systems</option>
                          <option value="High Voltage Systems">1.5kVA - 5kVA Systems</option>
                          <option value="Solar Panels">Solar Panels</option>
                          <option value="Batteries">Solar Batteries</option>
                          <option value="Inverters">Inverters</option>
                          <option value="Charge Controllers">Charge Controllers</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-navy-900 text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-white border border-earth-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                        placeholder="Tell us about your power needs..."
                        required
                      />
                    </div>

                    {/* Send method toggle */}
                    <div>
                      <label className="block text-navy-900 text-sm font-medium mb-3">Send via</label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setSendMethod('whatsapp')}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            sendMethod === 'whatsapp'
                              ? 'bg-green-500 text-white shadow-md shadow-green-500/20'
                              : 'bg-white border border-earth-200 text-navy-700/60 hover:border-green-300'
                          }`}
                        >
                          <WhatsappLogo size={18} weight="fill" />
                          WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={() => setSendMethod('email')}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            sendMethod === 'email'
                              ? 'bg-gold-500 text-white shadow-md shadow-gold-500/20'
                              : 'bg-white border border-earth-200 text-navy-700/60 hover:border-gold-300'
                          }`}
                        >
                          <Envelope size={18} />
                          Email
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold transition-all duration-500 ${
                        sendMethod === 'whatsapp'
                          ? 'bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/20'
                          : 'bg-gold-500 hover:bg-gold-400 text-white shadow-lg shadow-gold-500/20'
                      }`}
                    >
                      <PaperPlaneTilt size={18} weight="fill" />
                      Send via {sendMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}
                    </button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <iframe
            src={business.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zambuko Solar location map"
            className="w-full"
          />
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
