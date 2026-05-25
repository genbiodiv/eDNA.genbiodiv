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
  const [selectedMapPoint, setSelectedMapPoint] = useState<'bloqueG' | 'puerta7' | 'puerta4'>('bloqueG');

  // Campus points data structure corresponding exactly to the user markers
  const mapPoints = {
    bloqueG: {
      nameEs: 'Bloque G - Escuela de Negocios, Álvaro Jaramillo Vengoechea',
      nameEn: 'Block G - Business School, Álvaro Jaramillo Vengoechea',
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
      descEn: 'Principal walking gate located on the western boundary. Directly adjacent to the Block G Business School building building.',
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
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
            {courseDesc[lang]}
          </p>
        </div>

        {/* 3-day Interactive Syllabus Block */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          
          {/* Day selection tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {courseDays.map((day) => {
              const isActive = selectedDay === day.id;
              return (
                <button
                  id={`course-day-tab-${day.id}`}
                  key={day.id}
                  onClick={() => setSelectedDay(day.id as any)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isActive 
                      ? 'border-blue-900 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 card-shadow' 
                      : 'border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-850'
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
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-blue-900 dark:text-blue-400 uppercase">
                      {lang === 'es' ? 'MÓDULO DE APRENDIZAJE' : 'CURRICULUM MODULE'}
                    </span>
                    <h3 className="font-display font-medium text-slate-900 dark:text-white text-sm sm:text-base truncate">
                      {day.title[lang]}
                    </h3>
                  </div>
                </button>
              );
            })}

            {/* Quick notice of enrollment */}
            <div className="p-5 bg-blue-50/50 dark:bg-blue-950/25 rounded-2xl border border-blue-100 dark:border-blue-900/60 text-xs space-y-3 mt-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-display font-semibold text-slate-850 dark:text-slate-200 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-900 dark:text-blue-400" />
                  <span>{lang === 'es' ? 'Certificación Uninorte' : 'Uninorte Certification'}</span>
                </span>
                <p className="text-slate-600 dark:text-slate-350 text-xs text-justify font-sans leading-relaxed">
                  {lang === 'es'
                    ? 'El curso está auspiciado por el Departamento de Química y Biología de la Universidad del Norte. Los asistentes reciben un certificado de entrenamiento molecular oficial tras finalizar el curso de forma satisfactoria.'
                    : 'The course is sponsored by the Department of Chemistry and Biology at Universidad del Norte. Attendees receive an official molecular training certificate upon successful completion.'}
                </p>
              </div>
              <div className="pt-1.5">
                <a
                  id="uninorte-marketplace-inscription-link"
                  href="https://tananeo.uninorte.edu.co/marketplace/servicios/cursodeintroduccionaladnambiental"
                  target="_blank"
                  rel="noreferrer referrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-900 hover:bg-blue-950 dark:bg-blue-800 dark:hover:bg-blue-700 text-white font-semibold rounded-xl text-[10.5px] tracking-tight transition-all shadow-sm active:scale-[0.985]"
                >
                  <span>{lang === 'es' ? 'Ver Inscripciones (Marketplace)' : 'View Registration Info (Marketplace)'}</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Active module details content */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 card-shadow">
            <div className="space-y-1.5 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span id="course-active-day-label" className="text-[10px] font-mono tracking-widest text-blue-900 dark:text-blue-400 font-bold uppercase">
                {lang === 'es' ? 'Contenido Seleccionado' : 'Active Curricular Unit'}
              </span>
              <h3 id="course-active-day-title" className="font-display font-medium text-slate-900 dark:text-white text-lg sm:text-xl">
                {activeDayData.title[lang]}
              </h3>
              <p id="course-active-day-sub" className="text-xs text-slate-500 dark:text-slate-404 leading-relaxed text-justify">
                {activeDayData.subtitle[lang]}
              </p>
            </div>

            {/* Activities mapped */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 uppercase block">
                {lang === 'es' ? 'ACTIVIDADES CLAVE DEL BLOQUE' : 'CORE LESSONS & EXERCIZES'}
              </span>
              <div className="grid grid-cols-1 gap-3.5">
                {activeDayData.activities[lang].map((activity, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-150 dark:border-slate-850 hover:border-blue-300 dark:hover:border-blue-950 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-700 dark:text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Google Map & Campus Directory Section */}
        <div id="uninorte-location-section" className="mt-16 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-slate-50/50 dark:bg-slate-950/25">
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
                    ? 'Seleccione uno de los tres puntos estratégicos para actualizar el mapa interactivo de Google Maps y visualizar el acceso sugerido, códigos Plus y guías peatonales para el curso:'
                    : 'Select one of the three strategic landmarks to instantly update the interactive Google Map and see directions, Plus codes, and campus tips:'}
                </p>
              </div>

              {/* Point Selectors */}
              <div className="space-y-3 font-sans">
                {/* Selector 1: Bloque G */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('bloqueG')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'bloqueG'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full ${selectedMapPoint === 'bloqueG' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {lang === 'es' ? 'Bloque G (Escuela de Negocios)' : 'Block G (Business School)'}
                    </h4>
                  </div>
                  <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-1 font-mono uppercase font-bold tracking-tight">
                    {lang === 'es' ? 'Álvaro Jaramillo Vengoechea • Salón Harvard 2' : 'Álvaro Jaramillo Vengoechea • Harvard 2 Room'}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug text-justify line-clamp-2">
                    {lang === 'es' ? mapPoints.bloqueG.descEs : mapPoints.bloqueG.descEn}
                  </p>
                </button>

                {/* Selector 2: Puerta 7 */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('puerta7')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'puerta7'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full ${selectedMapPoint === 'puerta7' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {lang === 'es' ? 'Puerta 7' : 'Gate 7'}
                    </h4>
                  </div>
                  <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-1 font-mono uppercase font-bold tracking-tight">
                    {lang === 'es' ? 'Acceso Vehicular y Peatonal de laboratorios' : 'Lab Area Access • Plus Code 2592+M5'}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug text-justify line-clamp-2">
                    {lang === 'es' ? mapPoints.puerta7.descEs : mapPoints.puerta7.descEn}
                  </p>
                </button>

                {/* Selector 3: Puerta 4 */}
                <button
                  type="button"
                  onClick={() => setSelectedMapPoint('puerta4')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col ${
                    selectedMapPoint === 'puerta4'
                      ? 'bg-blue-900/5 dark:bg-blue-950/20 border-blue-900 dark:border-blue-500 shadow-sm ring-1 ring-blue-900 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full ${selectedMapPoint === 'puerta4' ? 'bg-blue-900 dark:bg-blue-400 animate-pulse' : 'bg-slate-300'}`}></span>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {lang === 'es' ? 'Puerta 4' : 'Gate 4'}
                    </h4>
                  </div>
                  <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-1 font-mono uppercase font-bold tracking-tight">
                    {lang === 'es' ? 'Entrada Peatonal Escuela de Negocios' : 'Business School Pedestrian Entry'}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug text-justify line-clamp-2">
                    {lang === 'es' ? mapPoints.puerta4.descEs : mapPoints.puerta4.descEn}
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
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
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
                    <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
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

          <div className="mt-8 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 text-center space-y-3 max-w-md mx-auto shadow-sm">
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

      </div>
    </section>
  );
}
