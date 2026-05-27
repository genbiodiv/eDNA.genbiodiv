/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Course from './components/Course';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveGuide from './components/InteractiveGuide';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [dark, setDark] = useState<boolean>(false);
  const [guideOpen, setGuideOpen] = useState<boolean>(false); // Guide is closed by default. No automatic splash popup.
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash || '#curso');

  // Listen to hash changes for sub-page routing setup
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#curso');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Consensually verify and apply system dark modes or local dark triggers
  useEffect(() => {
    const savedDark = localStorage.getItem('genbiodiv-theme-dark');
    if (savedDark === 'true') {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('genbiodiv-theme-dark', dark.toString());
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const handleCloseGuide = () => {
    setGuideOpen(false);
    localStorage.setItem('genbiodiv-guide-visited', 'true');
  };

  const handleOpenGuide = () => {
    setGuideOpen(true);
  };

  return (
    <div id="app-viewport-root" className={`${dark ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-800'} min-h-screen text-slate-700 dark:text-slate-300 font-sans transition-colors antialiased`}>
      
      {/* Dynamic Back-to-top hidden anchor at zero */}
      <div id="inicio"></div>

      {/* Modern Sticky Navigation */}
      <Header lang={lang} setLang={setLang} dark={dark} setDark={setDark} currentHash={currentHash} />

      {/* Main Container Pages with clean fade-in entry transition */}
      <main className="flex-1">
        <div key={currentHash} className="animate-fade-in">
          {(currentHash === '#curso' || !['#contacto'].includes(currentHash)) && <Course lang={lang} />}
          {currentHash === '#contacto' && <Contact lang={lang} />}
        </div>
      </main>

      {/* Corporate trademark indices */}
      <Footer lang={lang} />

      {/* Interactive Scientific Guide popup modal */}
      <InteractiveGuide isOpen={guideOpen} onClose={handleCloseGuide} lang={lang} />

    </div>
  );
}
