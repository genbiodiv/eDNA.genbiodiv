/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Tag, 
  ChevronDown, 
  ChevronUp, 
  Settings, 
  Waves, 
  Sparkles,
  TreePine,
  Layers,
  Activity
} from 'lucide-react';
import { Language } from '../types';
import { projectsList } from '../data';

interface ProjectsProps {
  lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>('proj-magdalena');

  const sectionTitle = {
    es: 'Proyectos de Investigación Activos',
    en: 'Active Environmental DNA Projects'
  };

  const sectionDesc = {
    es: 'Nuestras expediciones integran toma de muestras en áreas silvestres, biodiversidad urbana de Barranquilla, monitoreo molecular, ciencia ciudadana y colaboraciones académicas internacionales.',
    en: 'Our expeditions unify remote field surveys, municipal biodiversity records in Barranquilla, high-throughput genetic assays, and collaborative transcontinental frameworks.'
  };

  // Associate visual color configurations with project indexes
  const getProjectBgColor = (id: string) => {
    switch(id) {
      case 'proj-magdalena': return 'from-blue-500/10 to-teal-500/10 border-teal-500/20';
      case 'proj-wildinsync': return 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20';
      case 'proj-marcaribe': return 'from-sky-500/10 to-indigo-500/10 border-sky-500/20';
      case 'proj-parques': return 'from-emerald-500/10 to-amber-500/10 border-amber-500/20';
      default: return 'from-slate-500/10 to-blue-500/10 border-slate-500/20';
    }
  };

  return (
    <section id="proyectos" className="relative overflow-hidden bg-white dark:bg-slate-900 py-16 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl animate-fade-in">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>{lang === 'es' ? 'EXPEDICIONES Y MONITOREO' : 'CIENTIFIC EXPEDITIONS'}</span>
          </span>
          <h2 id="projects-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {sectionTitle[lang]}
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
            {sectionDesc[lang]}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start font-sans">
          
          {/* Left panel: Compact list of active campaigns */}
          <div className="space-y-4">
            {projectsList.map((project) => {
              const isExpanded = expandedProject === project.id;
              return (
                <div 
                  key={project.id}
                  className={`p-5 rounded-3xl border transition-all hover:bg-slate-50 dark:hover:bg-slate-950/20 cursor-pointer ${
                    isExpanded 
                      ? 'border-blue-900 dark:border-blue-800 card-shadow bg-blue-50/10 dark:bg-blue-950/10' 
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                  onClick={() => setExpandedProject(project.id)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-wider font-semibold text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md">
                        {project.metrics?.[lang] || 'eDNA Loci'}
                      </span>
                      <h3 className="font-display font-medium text-slate-900 dark:text-white text-base">
                        {project.title[lang]}
                      </h3>
                    </div>
                    <span className="p-1 rounded-full hover:bg-slate-150 dark:hover:bg-slate-800">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-900 dark:text-blue-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </span>
                  </div>

                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 text-justify">
                    {project.description[lang]}
                  </p>

                  {/* Badges strip on card */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-355"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel: High-density interactive monitor showcasing the expanded project scope */}
          {(() => {
            const activeProj = projectsList.find(p => p.id === expandedProject);
            if (!activeProj) return null;

            return (
              <div id="project-dashboard-monitor" className="bg-slate-55/40 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 card-shadow">
                
                {/* Visual Header */}
                <div className="space-y-2.5">
                  <span id="dashboard-monitor-label" className="text-[10px] font-mono tracking-wider text-blue-900 dark:text-blue-400 font-bold uppercase">
                    {lang === 'es' ? 'FICHA SINOPSIS DE INVESTIGACIÓN' : 'SINOPSIS MONITOR DASHBOARD'}
                  </span>
                  <h3 id="dashboard-monitor-title" className="font-display font-medium text-slate-900 dark:text-white text-xl md:text-2xl tracking-tight">
                    {activeProj.title[lang]}
                  </h3>
                  <p id="dashboard-monitor-desc" className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                    {activeProj.description[lang]}
                  </p>
                </div>

                {/* Scope specifics mapped */}
                <div className="space-y-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-500 dark:text-slate-400 uppercase block">
                    {lang === 'es' ? 'DESGLOSE DE EXPEDICIÓN Y METODOLOGÍA' : 'SURVEY SPECIFICATIONS'}
                  </span>
                  
                  <div className="space-y-3">
                    {activeProj.scope[lang].map((scopeLine, sIdx) => {
                      const splitLine = scopeLine.split(':');
                      const labelLabel = splitLine[0];
                      const mainText = splitLine.slice(1).join(':');

                      return (
                        <div 
                          key={sIdx}
                          className="p-3.5 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-xl"
                        >
                          <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed text-justify">
                            <strong className="text-slate-900 dark:text-white font-medium">{labelLabel}:</strong>{mainText}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Coordinates Map simulation panel layout */}
                {activeProj.id === 'proj-magdalena' && (
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-2xl space-y-3 text-justify shadow-xs">
                    <span className="text-[9px] font-mono tracking-widest text-green-700 dark:text-green-400 font-bold block uppercase">
                      {lang === 'es' ? 'Estaciones de Monitoreo (Bajo Magdalena)' : 'Active Sampling Stations'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] font-mono text-slate-500">
                      <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-green-700 dark:text-green-400" />
                        <span>M-01: Barranquilla</span>
                      </div>
                      <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-green-700 dark:text-green-400" />
                        <span>M-02: Pombos Creek</span>
                      </div>
                      <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-green-700 dark:text-green-400" />
                        <span>M-03: Mallorquín</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* General disclaimer of progress */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1 font-semibold">
                    <Activity className="w-3.5 h-3.5 text-green-700 dark:text-green-400 animate-pulse" />
                    <span>{lang === 'es' ? 'Estatus: En Ejecución' : 'Status: Campaign Active'}</span>
                  </span>
                  <span>GenBioDiv • 2026</span>
                </div>

              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
