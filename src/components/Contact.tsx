/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Building2, 
  Dna,
  Phone
} from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const titleText = {
    es: 'Contacto y Formulario de Registro',
    en: 'Contact & Registration Form'
  };

  const textPrimary = {
    es: 'Completa el formulario integrado a continuación para registrarte, plantear tus consultas académicas o enviarnos un mensaje directo a nuestro buzón de investigación.',
    en: 'Complete the integrated form below to register, submit academic inquiries, or send a message directly to our research mailbox.'
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-50/50 dark:bg-slate-950 bg-pattern py-16 md:py-24 border-b border-slate-200/65 dark:border-slate-850/65 transition-colors">
      
      {/* Wave decoration background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-350 dark:text-slate-750" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 id="contact-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight animate-fade-in">
            {titleText[lang]}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            {textPrimary[lang]}
          </p>
        </div>

        {/* Contact panel layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          
          {/* Left Panel: Direct Coordinates */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-855 rounded-3xl p-6 md:p-8 space-y-6 card-shadow">
            
            {/* Dr. Rafik Neme Profile */}
            <div>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-500 font-bold block uppercase mb-1.5">
                {lang === 'es' ? 'Investigador Principal' : 'Principal Investigator'}
              </span>
              <h3 className="font-display font-medium text-slate-900 dark:text-white text-xl">
                Dr. Rafik Neme
              </h3>
              <p className="text-xs text-blue-900 dark:text-blue-400 font-medium mt-0.5">
                {lang === 'es' ? 'Departamento de Química y Biología' : 'Department of Chemistry & Biology'}
              </p>
            </div>

            {/* GenBioDiv Academic group block */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
              <span className="p-2 border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-955/20 rounded-xl text-blue-900 dark:text-blue-400 inline-block mb-3">
                <Building2 className="w-5 h-5" />
              </span>
              <h4 className="font-display font-medium text-slate-800 dark:text-slate-100 text-sm line-clamp-2">
                GenBioDiv — Genómica y Biodiversidad del Caribe
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Universidad del Norte • Barranquilla, Colombia
              </p>
            </div>

            {/* Direct contact coordinates */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-850">
              
              {/* Physical Address */}
              <div className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-350">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 block">
                    {lang === 'es' ? 'Dirección' : 'Address'}
                  </span>
                  Km 5 Vía a Puerto Colombia, Oficina 630J (Edif. Mario Santodomingo)
                </div>
              </div>

              {/* Telephone */}
              <div className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-350">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 block">
                    {lang === 'es' ? 'Teléfono' : 'Telephone'}
                  </span>
                  +57 5 3509509 <span className="font-semibold text-blue-900 dark:text-blue-400">Ext. 3894</span>
                </div>
              </div>

            </div>



          </div>

          {/* Right Panel: Embedded Forms Iframe */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-855 rounded-3xl overflow-hidden card-shadow">
            <iframe 
              width="100%" 
              height="560px" 
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=ebawul-96E-1Fsa4sxfHgvvmFHSwR-9PjGxGDJKZ9ilUODRGUkhaOE9YOFRBTktKREJCQkJKM09XVC4u&embed=true" 
              frameBorder={0} 
              marginWidth={0} 
              marginHeight={0} 
              className="w-full h-[560px]"
              style={{ border: 'none', maxWidth: '100%', minHeight: '520px' }} 
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
}
