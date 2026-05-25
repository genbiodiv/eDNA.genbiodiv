/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  FlaskConical, 
  Binary, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language } from '../types';
import { protocolsList } from '../data';

interface ProtocolsProps {
  lang: Language;
}

export default function Protocols({ lang }: ProtocolsProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('p-campo');

  const sectionTitle = {
    es: 'Materiales y Protocolos de Trabajo',
    en: 'Materials & Operational Protocols'
  };

  const sectionDesc = {
    es: 'Esta sección reúne directrices analíticas y documentos técnicos fundamentales para estandarizar el flujo del trabajo molecular en campo, laboratorios de biomasa filtrada y análisis de secuencias bioinformáticas del Caribe.',
    en: 'This module holds the core scientific parameters and technical handbooks designed to standardize molecular sampling, damp wet-lab extraction processes, and downstream ocean sequence processing.'
  };

  const getIcon = (id: string) => {
    switch(id) {
      case 'p-campo': return MapPin;
      case 'p-lab': return FlaskConical;
      case 'p-analisis': return Binary;
      default: return FileSpreadsheet;
    }
  };

  const getBadgeColor = (id: string) => {
    switch(id) {
      case 'p-campo': return 'bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-300 border-blue-100';
      case 'p-lab': return 'bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-300 border-green-100';
      case 'p-analisis': return 'bg-slate-100 text-slate-800 dark:bg-slate-800/40 dark:text-slate-300 border-slate-200';
      default: return 'bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400 border-slate-205';
    }
  };

  const getButtonText = (id: string, currentLang: Language) => {
    if (id === 'p-formatos') {
      return currentLang === 'es' ? 'Descargar plantillas' : 'Download sheets';
    }
    return currentLang === 'es' ? 'Ver protocolo' : 'View handbook';
  };

  return (
    <section id="protocolos" className="relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/40 bg-pattern py-16 border-b border-slate-200/60 dark:border-slate-850/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl animate-fade-in">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>{lang === 'es' ? 'FICHAS METODOLÓGICAS' : 'LABORATORY HANDBOOKS'}</span>
          </span>
          <h2 id="protocols-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {sectionTitle[lang]}
          </h2>
          <p className="mt-3 text-slate-505 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
            {sectionDesc[lang]}
          </p>
        </div>

        {/* 4 Protocol Blocks in a modern expanding Accordion-List hybrid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Quick sidebar summarizing values */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 card-shadow rounded-3xl space-y-4">
              <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm">
                {lang === 'es' ? 'Estándar Metodológico' : 'Quality Parameters'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-350 leading-relaxed text-justify">
                {lang === 'es'
                  ? 'Nuestros manuales están alineados con las guías de secuenciación de amplicón marina global y los estándares de depósito internacional del NCBI.'
                  : 'All operational pipelines obey standard guidelines approved by the International Genebank and Global Coral Reef Survey Consortium.'}
              </p>
              
              <div className="pt-2 flex flex-col gap-2.5 text-[11px] font-mono text-slate-550 dark:text-slate-400">
                <div id="quality-barr-1" className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-700 dark:text-green-400" />
                  <span>{lang === 'es' ? 'Barreras físicas de Pre-PCR' : 'Strict Pre-PCR Physical Walls'}</span>
                </div>
                <div id="quality-barr-2" className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-700 dark:text-green-400" />
                  <span>{lang === 'es' ? 'Estándares Darwin Core (DwC)' : 'Darwin Core (DwC) compatible'}</span>
                </div>
                <div id="quality-barr-3" className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-700 dark:text-green-400" />
                  <span>{lang === 'es' ? 'Mapeo molecular ASV' : '99.9% ASV Molecular Denoising'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core accordion items */}
          <div className="md:col-span-8 space-y-4 font-sans">
            {protocolsList.map((proto) => {
              const ProtoIcon = getIcon(proto.id);
              const isOpen = activeAccordion === proto.id;
              
              return (
                <div 
                  key={proto.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden transition-all card-shadow hover:border-slate-300 dark:hover:border-slate-750"
                >
                  {/* Item Header */}
                  <button
                    id={`protocol-accordion-trigger-${proto.id}`}
                    onClick={() => setActiveAccordion(isOpen ? null : proto.id)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`p-3 rounded-2xl border ${getBadgeColor(proto.id)} flex-shrink-0`}>
                        <ProtoIcon className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="font-display font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                          {proto.title[lang]}
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-0.5 line-clamp-1">
                          {proto.description[lang]}
                        </p>
                      </div>
                    </div>
                    <span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </span>
                  </button>

                  {/* Expanding Inner Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100/80 dark:border-slate-850/80 bg-slate-50/20 dark:bg-slate-950/10 space-y-5">
                      <p id={`protocol-accordion-desc-${proto.id}`} className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                        {proto.description[lang]}
                      </p>

                      <div className="space-y-2.5">
                        <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                          {lang === 'es' ? 'Pasos Críticos y Chequeo' : 'Critical Chemical Steps & Audits'}
                        </span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {proto.steps[lang].map((step, sIdx) => (
                            <div 
                              key={sIdx}
                              className="px-3.5 py-3 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-xl flex items-start gap-2.5 shadow-xs"
                            >
                              <span className="w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center font-mono text-[9px] font-bold text-blue-900 dark:text-blue-400 mt-0.5 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                                {sIdx + 1}
                              </span>
                              <p className="text-slate-700 dark:text-slate-350 text-xs leading-relaxed text-justify">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Primary functional anchor button */}
                      <div className="pt-2 flex justify-end">
                        <a
                          id={`protocol-download-btn-${proto.id}`}
                          href={`#action-${proto.id}`}
                          className="inline-flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100/80 dark:bg-blue-950/30 dark:hover:bg-blue-950/60 text-blue-900 dark:text-blue-400 rounded-xl text-xs font-semibold tracking-tight transition-colors cursor-pointer border border-blue-105"
                        >
                          <span>{getButtonText(proto.id, lang)}</span>
                          <span>→</span>
                        </a>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
