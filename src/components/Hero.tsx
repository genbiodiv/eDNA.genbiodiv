/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  CheckSquare, 
  Dna, 
  Droplets,
  Network
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface HeroProps {
  lang: Language;
  onOpenGuide: () => void;
}

export default function Hero({ lang, onOpenGuide }: HeroProps) {
  const t = translations[lang];

  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-50/50 dark:bg-slate-950 bg-pattern py-16 md:py-24 border-b border-slate-200/65 dark:border-slate-850/65 transition-colors">
      
      {/* Subtle organic shapes background to signify DNA and Water */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-350 dark:text-slate-750" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Wave line */}
          <path d="M -100 200 C 200 100, 300 300, 700 150 C 1000 50, 1200 400, 1600 250" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-900" />
          <path d="M -100 250 C 150 150, 400 350, 800 200 C 1100 100, 1300 450, 1700 300" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-700" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Hero Title & Primary Pitch */}
        <div className="mt-6 text-center md:text-left max-w-4xl">
          <h1 className="font-display font-medium text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-5 font-display font-medium text-blue-950 dark:text-slate-200 text-lg sm:text-xl lg:text-2xl leading-snug">
            {t.heroFrase}
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans text-justify">
            {t.heroSub}
          </p>
        </div>

        {/* Interactive Action Button Strip */}
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3.5">
          <a
            href="#curso"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-tight text-white bg-blue-900 hover:bg-blue-950 dark:bg-blue-800 dark:hover:bg-blue-750 shadow-sm transition-all cursor-pointer"
          >
            {t.exploreCourse}
          </a>
        </div>

        {/* Informational Cards underneath */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Aprender eDNA */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 card-shadow hover:shadow transition-all flex flex-col justify-between">
            <div>
              <span className="inline-flex p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-400 rounded-xl mb-4 border border-blue-100/50 dark:border-blue-900/30">
                <BookOpen className="w-5 h-5" />
              </span>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base">
                {t.aboutCardsTitle1}
              </h3>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                {t.aboutCardsText1}
              </p>
            </div>
            <a href="#curso" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:gap-1.5 transition-all">
              <span>{lang === 'es' ? 'Ver plan de estudios' : 'Study layout'}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: Aplicar Protocolos */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 card-shadow hover:shadow transition-all flex flex-col justify-between">
            <div>
              <span className="inline-flex p-3 bg-green-50 dark:bg-green-950/40 text-green-800 dark:text-green-400 rounded-xl mb-4 border border-green-100/50 dark:border-green-900/30">
                <CheckSquare className="w-5 h-5" />
              </span>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base">
                {t.aboutCardsTitle2}
              </h3>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                {t.aboutCardsText2}
              </p>
            </div>
            <a href="#protocolos" className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400 hover:gap-1.5 transition-all">
              <span>{lang === 'es' ? 'Consultar guías' : 'Consult procedures'}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: Explorar Proyectos */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 card-shadow hover:shadow transition-all flex flex-col justify-between">
            <div>
              <span className="inline-flex p-3 bg-slate-100 dark:bg-slate-800/40 text-slate-800 dark:text-slate-300 rounded-xl mb-4 border border-slate-200/50 dark:border-slate-700/30">
                <Network className="w-5 h-5" />
              </span>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base">
                {t.aboutCardsTitle3}
              </h3>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                {t.aboutCardsText3}
              </p>
            </div>
            <a href="#proyectos" className="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-350 hover:gap-1.5 transition-all">
              <span>{lang === 'es' ? 'Navegar exploraciones' : 'Navigate fields'}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* "Qué hacemos" & "Por qué importa" split sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-200/60 dark:border-slate-850/60">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-blue-900 dark:text-blue-400 text-sm uppercase tracking-widest">
              {t.whatWeDoTitle}
            </h4>
            <p className="text-slate-650 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
              {t.whatWeDoText}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-display font-bold text-green-800 dark:text-green-400 text-sm uppercase tracking-widest">
              {t.whyItMattersTitle}
            </h4>
            <p className="text-slate-655 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
              {t.whyItMattersText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
