import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FunnelSimple,
  MapPin,
  CalendarBlank,
  ArrowRight,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import siteData from '../data/siteData';

function Projects() {
  const { projects } = siteData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'All'
    ? projects.items
    : projects.items.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <PageHero
        label="Our Work"
        title={projects.heroTitle}
        subtitle={projects.heroSubtitle}
        image="/images/vivint-solar-9CalgkSRZb8-unsplash.jpg"
        imageAlt="Residential solar installation"
      />

      {/* Filter + Grid */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Filter bar */}
          <SectionReveal>
            <div className="flex items-center gap-3 mb-12 flex-wrap">
              <FunnelSimple size={18} className="text-navy-400" />
              {projects.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gold-500 text-white shadow-md shadow-gold-500/20'
                      : 'bg-earth-100 text-navy-700/60 hover:bg-earth-200 hover:text-navy-900'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="rounded-2xl overflow-hidden border border-earth-200 hover:border-gold-300 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-500 text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 font-semibold rounded-full" style={{ fontFamily: 'var(--font-sans)' }}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-heading text-navy-900 text-lg font-semibold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-navy-700/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                        <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                        <span className="flex items-center gap-1"><CalendarBlank size={12} /> {project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-navy-700/40" style={{ fontFamily: 'var(--font-sans)' }}>
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-[16/9] object-cover object-center rounded-t-2xl"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gold-500/10 text-gold-600 text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                    {selectedProject.category}
                  </span>
                  <span className="text-navy-700/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{selectedProject.year}</span>
                </div>
                <h3 className="font-heading text-navy-900 text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-navy-700/40 text-sm flex items-center gap-1 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                  <MapPin size={14} /> {selectedProject.location}
                </p>
                <p className="text-navy-700/60 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>{selectedProject.desc}</p>
                {selectedProject.services && (
                  <div>
                    <h4 className="font-heading text-navy-900 text-sm font-semibold uppercase tracking-wider mb-3">Services Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((s) => (
                        <span key={s} className="bg-earth-100 text-navy-700/60 text-xs px-3 py-1.5 rounded-full" style={{ fontFamily: 'var(--font-sans)' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 text-navy-700/40 text-sm hover:text-navy-900 transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

export default Projects;
