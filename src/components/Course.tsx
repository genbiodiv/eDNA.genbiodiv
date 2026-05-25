/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Download, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Award,
  MapPin,
  Map,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { courseDays, courseResources } from '../data';

interface CourseProps {
  lang: Language;
}

export default function Course({ lang }: CourseProps) {
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2' | 'day3'>('day1');
  const [selectedMapPoint, setSelectedMapPoint] = useState<'bloqueSalud' | 'bloqueJ' | 'laboratoriosDugand' | 'bloqueG' | 'puerta7' | 'puerta4'>('bloqueSalud');

  const pointDays = {
    bloqueSalud: { es: 'Día 2 (Mañana)', en: 'Day 2 (Morning)', colorClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20' },
    bloqueJ: { es: 'Día 3 (Todo el día)', en: 'Day 3 (All day)', colorClass: 'bg-sky-500/10 text-sky-700 dark:text-sky-450 border-sky-500/20' },
    laboratoriosDugand: { es: 'Día 2 (Tarde)', en: 'Day 2 (Afternoon)', colorClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20' },
    bloqueG: { es: 'Día 1 (Teoría/Revisión)', en: 'Day 1 (Theory/Review)', colorClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-450 border-amber-500/20' },
    puerta7: { es: 'Acceso Sugerido', en: 'Suggested Access', colorClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20' },
    puerta4: { es: 'Acceso Sugerido', en: 'Suggested Access', colorClass: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20' }
  };

  const findReferencedMapPoint = (text: string): 'bloqueSalud' | 'bloqueJ' | 'laboratoriosDugand' | 'bloqueG' | 'puerta7' | 'puerta4' | null => {
    const t = text.toLowerCase();
    if (t.includes('dugand')) return 'laboratoriosDugand';
    if (t.includes('bloque de salud') || t.includes('health block') || t.includes('biología molecular')) return 'bloqueSalud';
    if (t.includes('bloque g') || t.includes('block g') || t.includes('harvard 2')) return 'bloqueG';
    if (t.includes('bloque j') || t.includes('block j') || t.includes('sala de usuario')) return 'bloqueJ';
    if (t.includes('puerta 7') || t.includes('gate 7')) return 'puerta7';
    if (t.includes('puerta 4') || t.includes('gate 4')) return 'puerta4';
    return null;
  };

  const handleLocationClick = (pointKey: 'bloqueSalud' | 'bloqueJ' | 'laboratoriosDugand' | 'bloqueG' | 'puerta7' | 'puerta4') => {
    setSelectedMapPoint(pointKey);
    const element = document.getElementById('uninorte-location-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Campus points data structure corresponding exactly to the user markers
  const mapPoints = {
    bloqueSalud: {
      nameEs: 'Bloque de Salud',
      nameEn: 'Health Block',
      detailsEs: 'Laboratorio de Biopsia y Biología Molecular • Uninorte',
      detailsEn: 'Molecular Biology Laboratory • Uninorte',
      plusCode: 'Ubicación de Laboratorios de Ciencias de la Salud',
      descEs: 'Espacio acondicionado para la filtración de muestras de agua de campo y la extracción estéril de ácidos nucleicos de baja biomasa.',
      descEn: 'Clean molecular biosafety laboratory suited for environmental DNA filtration and solid-column extraction.',
      noteEs: 'Ubicado en el área de salud. Utilice el acceso peatonal principal.',
      noteEn: 'Located at the health sciences block. Access via the main pedestrian walkway.',
      embedUrl: 'https://maps.google.com/maps?q=11.0189195,-74.8519105&t=&z=19&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://www.google.com/maps/place/Centro+M%C3%A9dico+Uninorte/@11.0189184,-74.8518984,21z/data=!4m6!3m5!1s0x8ef42c69f5b4eaad:0xa308324dda468a26!8m2!3d11.0189195!4d-74.8519105!16s%2Fg%2F11vly36mtr?authuser=1&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    bloqueJ: {
      nameEs: 'Bloque J, Edificio Mario Santodomingo',
      nameEn: 'Block J, Mario Santodomingo Building',
      detailsEs: 'Sala de Usuario N°11 (Piso 5) • Uninorte',
      detailsEn: 'User Room N°11 (5th Floor) • Uninorte',
      plusCode: 'Edificio de Ingeniería y Ciencias Básicas',
      descEs: 'Sede designada para las sesiones de bioinformática computacional, análisis de secuencias metabarcoding e interpretación de diversidad de especies.',
      descEn: 'Designated computer suite for bioinformatic analysis, running metabarcoding raw pipelines and species annotation.',
      noteEs: 'Subir por el ascensor principal hasta el piso 5.',
      noteEn: 'Take the main elevators to the 5th floor room.',
      embedUrl: 'https://maps.google.com/maps?q=11.0208973,-74.8516737&t=&z=19&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://www.google.com/maps/place/Bloque+J,+Edificio+Mario+Santo+Domingo/@11.0209502,-74.8518823,20z/data=!4m6!3m5!1s0x8ef42dbecd591d31:0xa3c1696409d2ec0a!8m2!3d11.0208973!4d-74.8516737!16s%2Fg%2F11rq9lgzs4?authuser=1&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    laboratoriosDugand: {
      nameEs: 'Laboratorios Armando Dugand Gnecco',
      nameEn: 'Armando Dugand Gnecco Laboratories',
      detailsEs: 'Laboratorio de Química y Biología • Uninorte',
      detailsEn: 'Chemistry & Biology Laboratory • Uninorte',
      plusCode: 'Complejo de Laboratorios de Ciencias Básicas',
      descEs: 'Instalaciones equipadas para los ensayos de amplificación PCR, verificación electroforética y preparación de librerías moleculares.',
      descEn: 'Chemical facilities optimized for PCR amplification runs, agarose gel quality check, and library preparation.',
      noteEs: 'Ubicado en el área central de laboratorios científicos de la universidad.',
      noteEn: 'Positioned in the scientific research labs block of the university campus.',
      embedUrl: 'https://maps.google.com/maps?q=11.0186627,-74.8505741&t=&z=19&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://www.google.com/maps/@11.0186627,-74.8505741,21z?authuser=1&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    bloqueG: {
      nameEs: 'Bloque G (Escuela de Negocios)',
      nameEn: 'Block G (Business School)',
      detailsEs: 'Salón Harvard 2 (Piso 2) • Punto Teórico',
      detailsEn: 'Harvard 2 Room (2nd Floor) • Theoretical Hub',
      plusCode: '2592+V4 Puerto Colombia, Atlántico',
      descEs: 'Lugar designado para las clases teóricas, debates de diseño experimental y revisiones metodológicas de eDNA de la primera jornada.',
      descEn: 'Assigned venue for general theory lectures, experimental designs, and methodological analysis of environmental DNA.',
      noteEs: 'Ubicado en el costado occidental del campus de Uninorte. Fácil acceso directo.',
      noteEn: 'Located at the western side of the Uninorte campus. Simple direct pedestrian walkthrough.',
      embedUrl: 'https://maps.google.com/maps?q=11.019644,-74.849726&t=&z=19&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://www.google.com/maps/place/11%C2%B001\'10.7%22N+74%C2%B050\'59.0%22W/@11.0196299,-74.8497298,21z/data=!4m4!3m3!8m2!3d11.019644!4d-74.849726?authuser=1&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    puerta7: {
      nameEs: 'Puerta 7 (Acceso Campus Uninorte)',
      nameEn: 'Gate 7 (Uninorte Campus Access)',
      detailsEs: 'Acceso Vehicular y Peatonal Recomendado',
      detailsEn: 'Recommended Vehicle & Pedestrian Entrance',
      plusCode: '2592+M5 Puerto Colombia, Atlántico',
      descEs: 'Zona de control de acceso recomendada para llegar ágilmente hacia el sector de los laboratorios de biología molecular del campus.',
      descEn: 'Strategic access control gate recommended for faster routes walking towards the molecular biology laboratories.',
      noteEs: 'Acceso peatonal activo sobre el corredor norte de parqueaderos.',
      noteEn: 'Active pedestrian gateway located along the north parking lot corridors.',
      embedUrl: 'https://maps.google.com/maps?q=11.0193232,-74.8497124&t=&z=19&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://www.google.com/maps/@11.0193232,-74.8497124,21z?authuser=1&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    puerta4: {
      nameEs: 'Puerta 4 (Sabanilla Montecarmelo)',
      nameEn: 'Gate 4 (Sabanilla Montecarmelo Access)',
      detailsEs: 'Entrada Peatonal • Conexión Directa Bloque G',
      detailsEn: 'Pedestrian Entrance • Direct Connection to Block G',
      plusCode: 'Vía Sabanilla Montecarmelo, Puerto Colombia',
      descEs: 'Entrada peatonal principal sobre el lindero occidental. Brinda acceso directo a escasos metros del Bloque G de la Escuela de Negocios.',
      descEn: 'Principal walking gate located on the western boundary. Directly adjacent to the Block G Business School building.',
      noteEs: 'Ideal para quienes llegan en transporte peatonal directo al sector de Escuela de Negocios.',
      noteEn: 'Ideal for those arriving via passenger transit straight to the Business School zone.',
      embedUrl: 'https://maps.google.com/maps?q=11.0173737,-74.8505532&t=&z=19&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://www.google.com/maps/place/%C3%81rea+metropolitana+de,+V%C3%ADa,+Sabanilla+Montecarmelo,+Puerto+Colombia,+Barranquilla,+Atl%C3%A1ntico/@11.0173842,-74.8505908,21z/data=!4m6!3m5!1s0x8ef42c42744d8ccb:0x66f4fda848031c45!8m2!3d11.0173737!4d-74.8505532!16s%2Fg%2F11c4f_tqlc?authuser=1&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'
    }
  };

  const courseTitle = {
    es: 'Curso de Introducción al ADN Ambiental',
    en: 'Introduction to Environmental DNA Course'
  };

  const courseDesc = {
    es: 'Curso introductorio orientado a comprender los fundamentos teóricos y prácticos del ADN ambiental, el diseño experimental, la recolección estéril de muestras, el procesamiento técnico en laboratorio y el análisis bioinformático de metabarcoding.',
    en: 'Introductory syllabus designed to master theoretical paradigms and wet-chemistry protocols of environmental DNA. Explores study planning, filtration rigs, molecular amplification, and NGS metabarcoding pipelines.'
  };

  const activeDayData = courseDays.find(d => d.id === selectedDay)!;

  return (
    <section id="curso" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl animate-fade-in">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'es' ? 'FORMACIÓN ACADÉMICA' : 'ACADEMIC TRAINING'}</span>
          </span>
          <h2 id="course-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {courseTitle[lang]}
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-404 text-xs sm:text-sm leading-relaxed text-justify">
            {courseDesc[lang]}
          </p>
        </div>

        {/* 3-day Interactive Syllabus Block */}
        <div className="mt-12 space-y-6 font-sans">
          
          {/* Day selection tabs - 3 boxes side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courseDays.map((day) => {
              const isActive = selectedDay === day.id;
              const dateLabel = day.id === 'day1' ? (lang === 'es' ? 'Mayo 27' : 'May 27') :
                                day.id === 'day2' ? (lang === 'es' ? 'Mayo 28' : 'May 28') :
                                (lang === 'es' ? 'Mayo 29' : 'May 29');
              const displayTitle = day.title[lang].split(' • ')[1] || day.title[lang];
              
              return (
                <button
                  id={`course-day-tab-${day.id}`}
                  key={day.id}
                  onClick={() => setSelectedDay(day.id as any)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer h-full ${
                    isActive 
                      ? 'border-blue-900 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 card-shadow' 
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <span className={`p-2.5 rounded-xl flex-shrink-0 ${
                    isActive 
                      ? 'bg-blue-900 text-white dark:bg-blue-850' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    <Calendar className="w-5 h-5" />
                  </span>
                  <div className="space-y-1 overflow-hidden">
                    <span className="text-sm font-semibold text-blue-900 dark:text-blue-400 block font-display">
                      {dateLabel}
                    </span>
                    <h3 className="font-display font-medium text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                      {displayTitle}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active module details content - full-width underneath */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 card-shadow w-full">
            <div className="space-y-1.5 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span id="course-active-day-label" className="text-[10px] font-mono tracking-widest text-blue-900 dark:text-blue-400 font-bold uppercase">
                {lang === 'es' ? 'Contenido Seleccionado' : 'Active Curricular Unit'}
              </span>
              <h3 id="course-active-day-title" className="font-display font-medium text-slate-900 dark:text-white text-lg sm:text-xl">
                {activeDayData.title[lang]}
              </h3>
              <p id="course-active-day-sub" className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                {activeDayData.subtitle[lang]}
              </p>
            </div>

            {/* Activities mapped */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 uppercase block">
                {lang === 'es' ? 'ACTIVIDADES CLAVE DEL BLOQUE' : 'CORE LESSONS & EXERCIZES'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeDayData.activities[lang].map((activity, idx) => {
                  const rPoint = findReferencedMapPoint(activity);
                  return (
                    <div 
                      key={idx} 
                      className="flex flex-col gap-2.5 p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-150 dark:border-slate-850 hover:border-blue-300 dark:hover:border-blue-900 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-700 dark:text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-justify flex-1">
                          {activity}
                        </p>
                      </div>
                      {rPoint && (
                        <div className="pl-7">
                          <button
                            type="button"
                            onClick={() => handleLocationClick(rPoint)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 text-[11px] font-medium tracking-tight transition-all border border-blue-105/50 dark:border-blue-900/30 cursor-pointer shadow-sm active:scale-95"
                          >
                            <MapPin className="w-3.5 h-3.5 text-blue-900 dark:text-blue-400" />
                            <span>
                              {lang === 'es' ? 'Ver ubicación en el Mapa' : 'View Location on Map'}
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Google Map & Campus Directory Section */}
        <div id="uninorte-location-section" className="mt-16 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-slate-50/50 dark:bg-slate-950/25 animate-fade-in">
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col: Campus Guide Details & Location Selector buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-900 dark:text-blue-400" />
                  <span>{lang === 'es' ? 'MAPA INTERACTIVO Y ACCESO DE ESTUDIANTES' : 'GOOGLE MAPS & CAMPUS ACCESS'}</span>
                </span>
                <h3 className="mt-2 font-display font-medium text-slate-900 dark:text-white text-xl tracking-tight">
                  {lang === 'es' ? 'Ubicación de Salones y Puertas de Acceso' : 'Uninorte Room & Gate Directory'}
                </h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                  {lang === 'es'
                    ? 'Seleccione uno de los puntos estratégicos para actualizar el mapa interactivo de Google Maps y visualizar el aula designada, laboratorio, código Plus y accesos sugeridos para el campus:'
                    : 'Select one of the strategic campus points to instantly update the interactive Google Map and see designated rooms, labs, Plus codes, and recommended access points:'}
                </p>
              </div>

              {/* Point Selectors */}
              <div className="max-h-[380px] lg:max-h-[460px] overflow-y-auto pr-1.5 space-y-3 font-sans">
                
                {/* Access Gates Category Header */}
                <div className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase pb-1.5 border-b border-slate-100 dark:border-slate-850">
                  {lang === 'es' ? 'PUERTAS Y ACCESOS AL CAMPUS' : 'CAMPUS ENTRANCES & GATES'}
                </div>

                {/* Selector 1: Puerta 7 */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('puerta7')}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'puerta7'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selectedMapPoint === 'puerta7' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                      <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {lang === 'es' ? 'Puerta 7' : 'Gate 7'}
                      </h4>
                    </div>
                    <span className={`flex-shrink-0 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${pointDays.puerta7.colorClass}`}>
                      {lang === 'es' ? pointDays.puerta7.es : pointDays.puerta7.en}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans font-medium">
                    {lang === 'es' ? 'Acceso vehicular recomendado.' : 'Recommended vehicle access.'}
                  </p>
                </button>

                {/* Selector 2: Puerta 4 */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('puerta4')}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'puerta4'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selectedMapPoint === 'puerta4' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                      <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {lang === 'es' ? 'Puerta 4' : 'Gate 4'}
                      </h4>
                    </div>
                    <span className={`flex-shrink-0 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${pointDays.puerta4.colorClass}`}>
                      {lang === 'es' ? pointDays.puerta4.es : pointDays.puerta4.en}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans font-medium">
                    {lang === 'es' ? 'Entrada peatonal y acceso por transporte público.' : 'Pedestrian entrance and public transport access.'}
                  </p>
                </button>

                {/* Classrooms and Labs Category Header */}
                <div className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase pt-2 pb-1.5 border-b border-slate-100 dark:border-slate-850">
                  {lang === 'es' ? 'AULAS Y LABORATORIOS' : 'ACADEMIC HUBS & LABS'}
                </div>

                {/* Selector 3: Bloque G, Escuela de Negocios */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('bloqueG')}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'bloqueG'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selectedMapPoint === 'bloqueG' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                      <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {lang === 'es' ? 'Bloque G (Escuela de Negocios)' : 'Block G (Business School)'}
                      </h4>
                    </div>
                    <span className={`flex-shrink-0 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${pointDays.bloqueG.colorClass}`}>
                      {lang === 'es' ? pointDays.bloqueG.es : pointDays.bloqueG.en}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans font-medium">
                    {lang === 'es' ? 'Salón Harvard, piso 2.' : 'Harvard Room, 2nd floor.'}
                  </p>
                </button>

                {/* Selector 4: Bloque de Salud */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('bloqueSalud')}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'bloqueSalud'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selectedMapPoint === 'bloqueSalud' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                      <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {lang === 'es' ? 'Bloque de Salud' : 'Health Block'}
                      </h4>
                    </div>
                    <span className={`flex-shrink-0 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${pointDays.bloqueSalud.colorClass}`}>
                      {lang === 'es' ? pointDays.bloqueSalud.es : pointDays.bloqueSalud.en}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans font-medium">
                    {lang === 'es' ? 'Piso 5, laboratorio de biología molecular.' : '5th floor, molecular biology lab.'}
                  </p>
                </button>

                {/* Selector 5: Laboratorios Armando Dugand */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('laboratoriosDugand')}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'laboratoriosDugand'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selectedMapPoint === 'laboratoriosDugand' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                      <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {lang === 'es' ? 'Laboratorios Armando Dugand' : 'Armando Dugand Laboratories'}
                      </h4>
                    </div>
                    <span className={`flex-shrink-0 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${pointDays.laboratoriosDugand.colorClass}`}>
                      {lang === 'es' ? pointDays.laboratoriosDugand.es : pointDays.laboratoriosDugand.en}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-405 mt-1 font-sans font-medium">
                    {lang === 'es' ? 'Laboratorio de química y biología.' : 'Chemistry and biology laboratory.'}
                  </p>
                </button>

                {/* Selector 6: Bloque J, Edificio Mario Santodomingo */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('bloqueJ')}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'bloqueJ'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selectedMapPoint === 'bloqueJ' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                      <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {lang === 'es' ? 'Bloque J (Mario Santodomingo)' : 'Block J (Mario Santodomingo)'}
                      </h4>
                    </div>
                    <span className={`flex-shrink-0 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${pointDays.bloqueJ.colorClass}`}>
                      {lang === 'es' ? pointDays.bloqueJ.es : pointDays.bloqueJ.en}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans font-medium">
                    {lang === 'es' ? 'Piso 5, sala de usuario.' : '5th floor, user room.'}
                  </p>
                </button>
              </div>

              {/* Action buttons and Selected Point metadata */}
              <div className="pt-2">
                <a
                  id="open-selected-google-map-directions"
                  href={mapPoints[selectedMapPoint].googleMapsUrl}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-900 hover:bg-blue-950 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-2xl text-xs font-semibold tracking-tight transition-all shadow-md active:scale-[0.983]"
                >
                  <Map className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Ver en Google Maps / Cómo llegar' : 'Open in Google Maps / Directions'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Google Maps Iframe Embedded Frame */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 font-sans">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-md flex-1 min-h-[350px] lg:min-h-[420px] flex">
                <iframe
                  id="google-maps-iframe-embedded"
                  title={mapPoints[selectedMapPoint].nameEs}
                  src={mapPoints[selectedMapPoint].embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full absolute inset-0"
                ></iframe>

                {/* Selected point absolute header overlay */}
                <div className="absolute top-4 left-4 right-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-lg pointer-events-none flex justify-between items-center">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-blue-900 dark:text-blue-400 uppercase tracking-widest block">
                      {lang === 'es' ? 'MARCADOR SELECCIONADO' : 'SELECTED MARKER'}
                    </span>
                    <p className="text-xs font-display font-semibold text-slate-900 dark:text-white mt-0.5">
                      {lang === 'es' ? mapPoints[selectedMapPoint].nameEs : mapPoints[selectedMapPoint].nameEn}
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-900 dark:bg-blue-400 animate-ping"></span>
                </div>

                {/* Bottom floating overlay details */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-lg pointer-events-none text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-405 uppercase tracking-wide">
                      {lang === 'es' ? 'CÓDIGO PLUS / REFERENCIA' : 'PLUS CODE / REFERENCE'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {mapPoints[selectedMapPoint].plusCode}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {lang === 'es' ? 'Indicación: ' : 'Info: '}
                    </span>
                    {lang === 'es' ? mapPoints[selectedMapPoint].noteEs : mapPoints[selectedMapPoint].noteEn}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500 px-1 font-mono">
                <span>© Google Maps Platform</span>
                <span>Uninorte Campus eDNA Guide • 2026</span>
              </div>
            </div>

          </div>
        </div>

        {/* Companion Downloads Block */}
        <div className="mt-16 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 font-sans">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div>
              <h3 className="font-display font-medium text-slate-900 dark:text-white text-base md:text-lg flex items-center gap-1.5">
                <FileText className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                <span>{lang === 'es' ? 'Recursos del Curso y Documentos' : 'Course Materials & Study Files'}</span>
              </h3>
              <p className="text-xs text-slate-505 dark:text-slate-400">
                {lang === 'es' ? 'Formatos de campo y guías preparadas para el diseño del muestreo molecular.' : 'Molecular metadata forms and schedules geared for fast offline reading.'}
              </p>
            </div>
            <div className="text-[10px] font-mono bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-300 px-3 py-1.5 rounded-lg border border-blue-105 dark:border-blue-900/40 flex-shrink-0 self-start md:self-auto uppercase font-bold animate-pulse">
              {lang === 'es' ? 'Disponibles Pronto' : 'Available Soon'}
            </div>
          </div>

          <div className="mt-8 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 text-center space-y-3 max-w-md mx-auto shadow-sm font-sans">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-full flex items-center justify-center mx-auto text-blue-900 dark:text-blue-400">
              <FileText className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                {lang === 'es' ? 'Próximamente disponible' : 'Available Soon'}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {lang === 'es'
                  ? 'Todos los recursos del curso y documentos estarán disponibles en los próximos días.'
                  : 'All course resources and training documents will be available here in the coming days.'}
              </p>
            </div>
          </div>
        </div>

        {/* Uninorte Certification Block at the end */}
        <div id="uninorte-certification-block" className="mt-16 bg-gradient-to-r from-blue-50/50 to-indigo-50/30 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-105 dark:border-blue-900/40 rounded-3xl p-6 md:p-8 font-sans transition-all duration-300 hover:shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-2xl text-blue-900 dark:text-blue-400 flex-shrink-0">
                <Award className="w-6 h-6" />
              </span>
              <div className="space-y-2">
                <h3 className="font-display font-medium text-slate-900 dark:text-white text-base md:text-lg flex items-center gap-1.5">
                  <span>{lang === 'es' ? 'Certificación de la Universidad del Norte' : 'Universidad del Norte Certification'}</span>
                  <Sparkles className="w-4 h-4 text-blue-650 dark:text-blue-400 animate-pulse" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 text-justify leading-relaxed max-w-3xl">
                  {lang === 'es'
                    ? 'El curso está plenamente coordinado y auspiciado por el Departamento de Química y Biología de la Universidad del Norte. Los asistentes reciben un certificado de entrenamiento molecular oficial tras finalizar el curso de forma satisfactoria.'
                    : 'The course is fully coordinated and sponsored by the Department of Chemistry and Biology at Universidad del Norte. Attendees receive an official molecular training certificate upon successful completion.'}
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <a
                id="uninorte-marketplace-inscription-link"
                href="https://tananeo.uninorte.edu.co/marketplace/servicios/cursodeintroduccionaladnambiental"
                target="_blank"
                rel="noreferrer referrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-blue-900 hover:bg-blue-950 dark:bg-blue-800 dark:hover:bg-blue-700 text-white font-semibold rounded-2xl text-xs md:text-sm tracking-tight transition-all shadow-sm active:scale-[0.985] text-center"
              >
                <span>{lang === 'es' ? 'Ver Inscripciones (Marketplace)' : 'View Registration Info (Marketplace)'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
