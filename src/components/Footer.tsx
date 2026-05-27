/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Dna, Heart, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-950 text-slate-400 py-12 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo brand & Address */}
          <div className="md:col-span-8 space-y-4 text-justify">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-blue-900 rounded-xl text-white">
                <Dna className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-white text-sm sm:text-base leading-tight tracking-tight">
                  Genómica y Biodiversidad del Caribe Colombiano
                </span>
                <span className="text-[10px] font-mono tracking-wider text-blue-400 mt-1 uppercase">
                  Universidad del Norte
                </span>
              </div>
            </div>
          </div>

          {/* Top Anchor slider button */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between h-full gap-4">
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-705 text-slate-300 hover:text-white rounded-xl transition-all shadow-sm border border-slate-755 self-start md:self-auto flex items-center justify-center gap-1.5"
              title="Volver Arriba"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-tight">Top</span>
            </button>
            
            <div className="text-[10px] font-mono text-slate-500 text-left md:text-right">
              <p>© {new Date().getFullYear()} GenBioDiv.</p>
              <p className="mt-1">{lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
            </div>
          </div>

        </div>

        {/* Bottom micro branding credit line */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 text-center text-[10px] font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>GenBioDiv • Barranquilla, Colombia</span>
          <span className="flex items-center gap-1 justify-center">
            <span>{lang === 'es' ? 'Biodiversidad para el Caribe con' : 'Biodiversity for the Caribbean with'}</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </span>
        </div>

      </div>
    </footer>
  );
}
