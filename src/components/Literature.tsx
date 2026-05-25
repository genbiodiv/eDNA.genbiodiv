/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ExternalLink,
  ChevronRight,
  Filter,
  CheckCircle,
  Hash
} from 'lucide-react';
import { Language } from '../types';
import { literatureCategories } from '../data';

interface LiteratureProps {
  lang: Language;
}

export default function Literature({ lang }: LiteratureProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const titleText = {
    es: 'Biblioteca Científica de eDNA',
    en: 'eDNA Scientific Literature Library'
  };

  const descText = {
    es: 'Una selección curada y comentada de literatura científica para investigadores, estudiantes y colaboradores de GenBioDiv, organizada sistemáticamente por ejes temáticos cruciales.',
    en: 'A hand-picked catalog of annotated scientific research selected to guide students, scholars, and co-investigators across molecular biology and ecological sampling.'
  };

  // Compile all literature references across categories
  const allItems = literatureCategories.flatMap(category => 
    category.items.map(item => ({
      ...item,
      categoryId: category.id,
      categoryNode: category.title[lang]
    }))
  );

  // Filter items matching selected category + active query
  const filteredItems = allItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.categoryId === selectedCategory;
    const queryMatch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyRead[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && queryMatch;
  });

  return (
    <section id="literatura" className="relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/40 bg-pattern py-16 border-b border-slate-200/60 dark:border-slate-850/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl animate-fade-in">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'es' ? 'FONDO DOCUMENTAL' : 'DOCUMENTARY FONDS'}</span>
          </span>
          <h2 id="literature-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {titleText[lang]}
          </h2>
          <p className="mt-3 text-slate-505 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
            {descText[lang]}
          </p>
        </div>

        {/* Search and Tag Selector controls */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Category Selector Panel */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Input bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                id="literature-search-input"
                type="text"
                placeholder={lang === 'es' ? 'Buscar artículos, autores...' : 'Search records...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm focus:ring-1 focus:ring-blue-900 outline-none font-sans text-slate-800 dark:text-white transition-all card-shadow"
              />
            </div>

            {/* Category Select Toggles */}
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2 card-shadow">
              <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block mb-2 px-1">
                {lang === 'es' ? 'Filtrar por Categoría' : 'Category Indexes'}
              </span>
              
              <button
                id="lit-cat-toggle-all"
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all flex items-center gap-2 cursor-pointer ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-900 text-white dark:bg-blue-800 shadow-xs' 
                    : 'text-slate-650 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950/40'
                }`}
              >
                <Hash className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Todas las lecturas' : 'All select guidelines'}</span>
              </button>

              {literatureCategories.map((cat) => (
                <button
                  id={`lit-cat-toggle-${cat.id}`}
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all flex items-start gap-2 cursor-pointer ${
                    selectedCategory === cat.id 
                      ? 'bg-blue-900 text-white dark:bg-blue-800 shadow-xs' 
                      : 'text-slate-655 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950/40'
                  }`}
                >
                  <Hash className="w-3.5 h-3.5 mt-0.5" />
                  <span className="line-clamp-1">{cat.title[lang]}</span>
                </button>
              ))}

            </div>
          </div>

          {/* Right: Listed Annotations */}
          <div className="lg:col-span-8 space-y-5 font-sans">
            {filteredItems.length === 0 ? (
              <div id="no-literatures-found-discl" className="p-12 text-center bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl text-slate-405 card-shadow">
                <BookOpen className="w-10 h-10 mx-auto text-slate-300 stroke-1" />
                <p className="mt-3 text-xs sm:text-sm font-medium">
                  {lang === 'es' ? 'No se encontraron referencias con esos filtros.' : 'No bibliographic indexes match parameters.'}
                </p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-805 rounded-3xl p-6 transition-all card-shadow hover:border-slate-350 dark:hover:border-slate-750 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Label indicator */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-400 mb-3 border-b border-slate-100 dark:border-slate-850 pb-2">
                      <span className="text-blue-900 dark:text-blue-405 font-bold uppercase">{item.categoryNode}</span>
                      <span>Año: {item.year}</span>
                    </div>

                    {/* Scientific Title & Authors */}
                    <h3 className="font-display font-medium text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-500 dark:text-slate-450 text-[11px] font-mono">
                      {item.authors}
                    </p>

                    {/* Commentary: "Why Read It" */}
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-150 dark:border-slate-850 space-y-1">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-blue-900 dark:text-blue-400 uppercase block">
                        {lang === 'es' ? 'Análisis de Relevancia (Por qué leerlo):' : 'Relevance context:'}
                      </span>
                      <p className="text-slate-655 dark:text-slate-350 text-xs leading-relaxed text-justify">
                        {item.whyRead[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Operational Footer action button */}
                  <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[10px]">
                    <span className="text-slate-400 hidden sm:inline">{item.link.startsWith('http') ? 'Identificador DOI registrado' : 'Repositorio local'}</span>
                    <a
                      id={`lit-item-external-link-${item.id}`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-90 hover:bg-slate-900 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl font-sans text-xs font-semibold tracking-tight transition-colors flex items-center gap-1.5 self-end"
                    >
                      <span>{lang === 'es' ? 'Localizar DOI' : 'Locate Journal'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
