/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  Dna,
  Copy,
  ExternalLink,
  Check,
  Phone,
  Briefcase
} from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const titleText = {
    es: 'Contacto y Correspondencia',
    en: 'Contact & Inquiries'
  };

  const textPrimary = {
    es: '¿Tienes preguntas sobre el curso, requieres asesoría en muestreo de campo o técnicas genómicas, o te gustaría proponer una pasantía o tesis de pregrado/maestría? Escríbenos directamente.',
    en: 'Do you have questions about the course, require advice on field sampling or genomic techniques, or would you like to propose an internship or undergraduate/Master\'s thesis? Write to us directly.'
  };

  const textSecondary = {
    es: 'Siempre estamos buscando establecer nuevos lazos y tenemos espacio en nuestro grupo para personas de todo nivel académico, y de cualquier rincón del conocimiento.',
    en: 'We are constantly looking to establish new bonds and have space in our group for individuals of all academic levels and from any area of knowledge.'
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rneme@uninorte.edu.co').then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-50/50 dark:bg-slate-950 bg-pattern py-16 md:py-24 border-b border-slate-200/65 dark:border-slate-850/65 transition-colors">
      
      {/* Subtle organic shapes background to signify DNA and Water */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-350 dark:text-slate-750" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
          {/* Wave line */}
          <path d="M -100 200 C 200 100, 300 300, 700 150 C 1000 50, 1200 400, 1600 250" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-900" />
          <path d="M -100 250 C 150 150, 400 350, 800 200 C 1100 100, 1300 450, 1700 300" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-700" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 id="contact-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {titleText[lang]}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            {textPrimary[lang]}
          </p>
        </div>

        {/* Contact info grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* Left panel: Philosophy details */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-855 rounded-3xl p-6 md:p-8 flex flex-col justify-between card-shadow">
            <div className="space-y-6">
              
              {/* Institution Title block */}
              <div className="space-y-3">
                <span className="p-2 border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-900 dark:text-blue-400 inline-block">
                  <Building2 className="w-5 h-5 animate-pulse" />
                </span>
                <h3 className="font-display font-medium text-slate-900 dark:text-white text-base leading-snug">
                  GenBioDiv — Genómica y Biodiversidad del Caribe
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Universidad del Norte • Departamento de Química y Biología
                </p>
                <p className="text-[11px] font-mono text-slate-400">
                  Barranquilla • Colombia
                </p>
              </div>

              {/* Engagement message block */}
              <div className="p-4 bg-blue-50/30 dark:bg-blue-955/20 rounded-2xl border border-blue-105/40 dark:border-blue-900/30 space-y-2 text-justify">
                <span className="text-[9px] font-mono tracking-widest text-blue-900 dark:text-blue-400 font-bold block uppercase">
                  {lang === 'es' ? 'Compromiso Académico' : 'Academic Engagement'}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans">
                  {textSecondary[lang]}
                </p>
              </div>

            </div>

            {/* Micro disclaimer on bottom */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-850 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Fomentando el talento local y global' : 'Empowering local & global research talent'}</span>
            </div>
          </div>

          {/* Right panel: Direct Coordinates & Details */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-855 rounded-3xl p-6 md:p-8 flex flex-col justify-between card-shadow">
            
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-500 font-bold block uppercase mb-1.5">
                  {lang === 'es' ? 'Información y Ubicación del Investigador' : 'Investigator Profile & Location'}
                </span>
                <h3 className="font-display font-medium text-slate-900 dark:text-white text-xl">
                  Dr. Rafik Neme
                </h3>
                <p className="text-xs text-blue-900 dark:text-blue-400 font-medium mt-0.5">
                  {lang === 'es' ? 'Departamento de Química y Biología' : 'Department of Chemistry & Biology'}
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4">
                
                {/* Physical Address */}
                <div className="flex gap-3 items-start">
                  <span className="mt-1 text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {lang === 'es' ? 'Dirección Física' : 'Physical Address'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-350 mt-1 leading-relaxed">
                      Universidad del Norte, Km 5 Vía a Puerto Colombia, Barranquilla, Colombia
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex gap-3 items-start">
                  <span className="mt-1 text-slate-400 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {lang === 'es' ? 'Oficina' : 'Office Details'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-350 mt-1 leading-relaxed">
                      Oficina 630J, Edificio Mario Santodomingo
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-3 items-start">
                  <span className="mt-1 text-slate-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {lang === 'es' ? 'Teléfono de Contacto' : 'Telephone'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-350 mt-1 leading-relaxed">
                      Tel. +57 5 3509509 <span className="font-semibold text-blue-900 dark:text-blue-400">Ext. 3894</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
