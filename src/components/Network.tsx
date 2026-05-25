/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, 
  ArrowRight, 
  Globe2, 
  Heart, 
  MapPin, 
  Award,
  HelpCircle,
  FlaskConical,
  Building2
} from 'lucide-react';
import { Language } from '../types';
import { networkSections } from '../data';

interface NetworkProps {
  lang: Language;
}

export default function Network({ lang }: NetworkProps) {
  
  const titleText = {
    es: 'Red de Colaboración Científica',
    en: 'Collaboration & Outreach Network'
  };

  const descText = {
    es: 'El estudio del ADN ambiental es inherentemente multidisciplinar. Consolidamos puentes entre la academia regional, instituciones nacionales aliadas y centros genómicos mundiales.',
    en: 'The exploration of environmental DNA relies heavily on interdisciplinary setups. We connect regional researchers, national entities, and leading international genomic laboratories.'
  };

  const getSectIcon = (id: string) => {
    switch(id) {
      case 'net-local': return FlaskConical;
      case 'net-nacional': return Building2;
      case 'net-inter': return Globe2;
      default: return Heart;
    }
  };

  const getSectColor = (id: string) => {
    switch(id) {
      case 'net-local': return 'text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/30';
      case 'net-nacional': return 'text-green-850 dark:text-green-300 bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900/30';
      case 'net-inter': return 'text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/30';
      default: return 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border-slate-205 dark:border-slate-800/30';
    }
  };

  return (
    <section id="red" className="relative overflow-hidden bg-white dark:bg-slate-900 py-16 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl animate-fade-in">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{lang === 'es' ? 'ALIANZAS Y EQUIPO' : 'PARTNERSHIPS & DEPARTMENTS'}</span>
          </span>
          <h2 id="network-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {titleText[lang]}
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
            {descText[lang]}
          </p>
        </div>

        {/* Categories Grid (2x2 Structure) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {networkSections.map((sect) => {
            const SectIcon = getSectIcon(sect.id);
            const isCTASection = sect.id === 'net-join';

            return (
              <div 
                key={sect.id}
                className={`p-6 md:p-8 rounded-3xl border flex flex-col justify-between transition-all card-shadow ${
                  isCTASection 
                    ? 'bg-gradient-to-br from-blue-50/20 to-slate-50/50 dark:from-blue-950/10 dark:to-slate-950/5 border-blue-300/20' 
                    : 'bg-white dark:bg-slate-900 border-slate-150 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-755'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-850 pb-4 mb-5">
                    <span className={`p-3 rounded-2xl border ${getSectColor(sect.id)}`}>
                      <SectIcon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-medium text-slate-900 dark:text-white text-base">
                        {sect.title[lang]}
                      </h3>
                      {sect.description && (
                        <p className="text-[11px] text-slate-400 font-sans mt-0.5 leading-tight">
                          {sect.description[lang]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Members bullet structure */}
                  <div className="space-y-3">
                    {sect.members[lang].map((member, mIdx) => (
                      <div 
                        key={mIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-650 dark:text-slate-350 text-justify"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-900/80 dark:bg-blue-400/80 mt-1.5 flex-shrink-0" />
                        <p>{member}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional collaboration trigger */}
                {isCTASection && (
                  <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-805/50 flex justify-end">
                    <a
                      id="propose-collab-trigger"
                      href="#contacto"
                      className="px-5 py-2.5 bg-blue-900 hover:bg-blue-950 dark:bg-blue-800 dark:hover:bg-blue-750 text-white dark:text-white text-xs font-semibold tracking-tight rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>{sect.ctaText?.[lang] || 'Proponer colaboración'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
