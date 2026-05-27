/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Globe, Sun, Moon, Dna } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  currentHash: string;
}

export default function Header({ lang, setLang, dark, setDark, currentHash }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const menuItems = [
    { name: t.navCourse, href: '#curso' },
    { name: t.navContact, href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Brand */}
          <a href="#curso" className="flex items-center gap-2.5 group">
            <span className="p-2 bg-blue-900 dark:bg-blue-850 rounded-xl text-white transition-transform group-hover:scale-105">
              <Dna className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-blue-950 dark:text-white text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                Genómica y Biodiversidad del Caribe Colombiano
              </span>
              <span className="text-[10px] font-sans font-semibold text-slate-500 dark:text-slate-400 mt-0.5 tracking-wider leading-none uppercase">
                Universidad del Norte
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = item.href === currentHash || (item.href === '#curso' && !['#contacto'].includes(currentHash));
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xs font-sans rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/40 font-medium'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Controls Cluster (Dark Mode & Language Switching) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Toggle Language Switcher */}
            <button
              id="language-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium dark:font-semibold rounded-xl text-slate-700 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/85 transition-all"
              title="Cambiar Idioma / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>

            {/* Toggle Dark Mode */}
            <button
              id="darkmode-toggle-btn"
              onClick={() => setDark(!dark)}
              className="p-2 ml-1 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/85 transition-all"
              title={dark ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {dark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
            </button>
          </div>

          {/* Mobile Right Controls - Hamburger + Toggles combo */}
          <div className="flex lg:hidden items-center gap-1">
            {/* Minimal Mobile Lang Toggle */}
            <button
              id="mobile-lang-toggle"
              onClick={toggleLanguage}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Micro theme toggle */}
            <button
              id="mobile-dark-toggle"
              onClick={() => setDark(!dark)}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-500" />}
            </button>

            {/* Menu main button */}
            <button
              id="menu-trigger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = item.href === currentHash || (item.href === '#curso' && !['#contacto'].includes(currentHash));
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Quick Action Drawer Controls */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 px-4 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {lang === 'es' ? 'Preferencias' : 'Preferences'}
              </span>
              <div className="flex items-center gap-2">
                {/* Language switch */}
                <button
                  id="drawer-lang-toggle"
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/85 min-w-[44px] min-h-[44px] shadow-sm active:scale-95 transition-all"
                >
                  <Globe className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>{lang === 'es' ? 'EN' : 'ES'}</span>
                </button>

                {/* Dark Mode switch */}
                <button
                  id="drawer-dark-toggle"
                  onClick={() => setDark(!dark)}
                  className="flex items-center justify-center p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/85 min-w-[44px] min-h-[44px] shadow-sm active:scale-95 transition-all"
                >
                  {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
