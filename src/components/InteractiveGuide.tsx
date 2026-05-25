/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Dna, 
  Compass, 
  Droplets, 
  Activity, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  Play, 
  CheckCircle, 
  Layers, 
  HelpCircle,
  FileText,
  Users,
  Mail
} from 'lucide-react';
import { Language } from '../types';

interface InteractiveGuideProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function InteractiveGuide({ isOpen, onClose, lang }: InteractiveGuideProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'workflow' | 'sections'>('workflow');

  if (!isOpen) return null;

  const workflows = [
    {
      title: {
        es: 'Fase 1: Muestreo de Campo (Recolección)',
        en: 'Phase 1: Field Sampling (Collection)'
      },
      icon: Droplets,
      color: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-900',
      desc: {
        es: 'Colectas 1 litro de agua o haces barrido de vegetación. Anotas coordenadas de GPS exactas, turbidez, pH y temperatura. Mantienes esterilidad absoluta para evitar falsos positivos.',
        en: 'Collect 1 liter of aquatic surface water or sweep vegetation. Record accurate GPS bearings, turbidity, pH, and water temperature. Maintain strict sterility barrier control to prevent foreign contamination.'
      },
      goal: {
        es: 'Capturar el material celular o mitocondrial suspendido en el Caribe.',
        en: 'Harvest structural cellular or mitochondrial fractions floating in the Caribbean.'
      }
    },
    {
      title: {
        es: 'Fase 2: Procesamiento de Laboratorio (Extracción)',
        en: 'Phase 2: Laboratory Processing (Extraction)'
      },
      icon: Dna,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
      desc: {
        es: 'Filtras la muestra al vacío. Lisas las células para abrir el tejido bacteriano/animal, y purificas el ADN genómico purificándolo con columnas de sílice. Multiplicas el ADN usando PCR amplificado.',
        en: 'Pass water through biological membrane filters. Lyse cellular frameworks, washing target environmental genomes out of active silica spin columns. Multiply DNA concentration via custom PCR reactions.'
      },
      goal: {
        es: 'Obtener fragmentos moleculares limpios amplificados de alta biomasa.',
        en: 'Retrieve pure amplified high-density molecular fractions of barcodes of interest.'
      }
    },
    {
      title: {
        es: 'Fase 3: Bioinformática (Secuenciación)',
        en: 'Phase 3: Bioinformatics Pipeline (Sequencing)'
      },
      icon: Cpu,
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900',
      desc: {
        es: 'Secuenciadores masivos (Illumina, Oxford Nanopore) transforman el material físico en datos FASTQ de millones de lecturas. Ejecutas filtros de calidad (FastQC, DADA2) para aislar Variantes de Secuencias (ASVs).',
        en: 'Mass high-throughput sequencers (Illumina/Nanopore) digitalize molecular pools into millions of FASTQ raw text bases. Deploy clean diagnostic tools (DADA2) to sort Amplicon Sequence Variants (ASVs).'
      },
      goal: {
        es: 'Asignar géneros y especies cruzando bases de datos (GenBank, BOLD).',
        en: 'Cross-reference and diagnose exact taxonomic assignments (GenBank, BOLD databases).'
      }
    },
    {
      title: {
        es: 'Fase 4: Interpretación de Conservación (Impacto)',
        en: 'Phase 4: Conservation Metrics (Action)'
      },
      icon: Activity,
      color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
      desc: {
        es: 'Mapeas la distribución ambiental de taxones raros, introducidos o en peligro. Calculas índices de Shannon o Simpson para evaluar la salud de las cuencas del Caribe, estimulando políticas reales.',
        en: 'Map the biological range of endangered, rare, or invasive species. Graph diversity indexes (Shannon/Simpson) to benchmark ecosystem well-being in the Caribbean, steering political decisions.'
      },
      goal: {
        es: 'Saber exactamente qué organismos habitan el ecosistema sin alterarlo.',
        en: 'Know precisely which species occupy habitats without inflicting stress or harm.'
      }
    }
  ];

  const sectionsGuide = [
    {
      title: { es: '1. Inicio / Home', en: '1. Navigation Home' },
      icon: Compass,
      desc: {
        es: 'El foro biológico donde verás de inmediato las tres columnas operativas de GenBioDiv y por qué el ADN ambiental transformará las ciencias ecológicas en Colombia.',
        en: 'The biological launcher showcasing the core goals of environmental genomics and why eDNA is revolutionizing Colombian Caribbean science.'
      }
    },
    {
      title: { es: '2. Curso Académico / Training Course', en: '2. Training Course Curriculum' },
      icon: Layers,
      desc: {
        es: 'Un manual académico dividido en 3 días rigurosos (Fundamentos, Laborado Molecular y Bioinformática) con descargas didácticas gratuitas para estudiantes.',
        en: 'A step-by-step 3-day training module (Theory & Field, Wet-Lab Extraction, Computing Pipeline) with resources curated for young interns.'
      }
    },
    {
      title: { es: '3. Protocolos y Materiales / Protocols', en: '3. Protocols & Lab Checklists' },
      icon: FileText,
      desc: {
        es: 'El mapa científico técnico. Contiene de manera desglosada los pasos clave desde desinfectar frascos hasta calibrar el pipeline bioinformático y la ficha DwC.',
        en: 'Our open field-book. Detailed blueprints from manifold sterilization and silica molecular spin-wash steps up to standard Darwin Core file parameters.'
      }
    },
    {
      title: { es: '4. Proyectos Activos / Active Projects', en: '4. Local & Estuary Expeditions' },
      icon: Sparkles,
      desc: {
        es: 'Explora expediciones vivas: desde el grandioso Río Magdalena, los arrecifes de coral tropicales en el Mar Caribe, hasta la red comparativa Barranquilla-Trier.',
        en: 'Venture into operational field studies: the great Magdalena Basin gradient, the fragile local reefs around Salgar, and our transcontinental research.'
      }
    },
    {
      title: { es: '5. Literatura / Science Library', en: '5. Science & References Library' },
      icon: BookOpen,
      desc: {
        es: 'Selección estricta de documentos con enlaces DOI que todo becario o coinvestigador debe digerir sobre control de contaminación y análisis bioinformático.',
        en: 'A hand-picked bibliography complete with DOI web paths that students must study to avoid errors, false alarms, and PCR amplification biases.'
      }
    },
    {
      title: { es: '6. Red de Colaboración / Networks', en: '6. Collaboration Network' },
      icon: Users,
      desc: {
        es: 'Nuestra comunidad. Alianzas locales, investigadores nacionales y de la Universidad de Trier (Laboratorio del Dr. Henrik Krehenwinkel) en Alemania.',
        en: 'Our co-investigators. Local Univates, national herbaria, and long-standing bonds with Trier University (Dr. Henrik Krehenwinkel) in Germany.'
      }
    },
    {
      title: { es: '7. Contacto / Reach Out', en: '7. Digital Communication' },
      icon: Mail,
      desc: {
        es: 'Buzón integrado para solicitar cupos en seminarios de eDNA del Dr. Rafik Neme, enviar propuestas científicas, o programar muestreos coordinados.',
        en: 'Direct mailbox to target internship applications under Dr. Rafik Neme, coordinate sampling, or solicit outreach workshops.'
      }
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        id="interactive-modal-container"
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden max-h-[90vh]"
      >
        {/* Banner header of scientific guide */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/10 rounded-lg text-blue-300">
              <Dna className="w-6 h-6 animate-pulse" />
            </span>
            <div>
              <h3 className="font-display font-medium text-lg md:text-xl tracking-tight">
                {lang === 'es' ? 'Guía Teórica y Metodológica de eDNA' : 'eDNA Theoretical and Methodological Guide'}
              </h3>
              <p className="text-xs text-blue-100 font-sans mt-0.5">
                {lang === 'es' ? 'Cómo usar este portal, qué significa cada panel y el flujo analítico de eDNA' : 'How to navigate this portal, what the terms represent, and the eDNA analytical workflow'}
              </p>
            </div>
          </div>
          <button 
            id="close-guide-btn-top"
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Selector Categories */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-2 gap-2">
          <button
            id="tab-select-workflow"
            onClick={() => setActiveTab('workflow')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'workflow' 
                ? 'bg-blue-900 text-white dark:bg-blue-800 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>{lang === 'es' ? 'Ciclo Científico de eDNA' : 'How eDNA Works ("The Scientific Cycle")'}</span>
          </button>
          <button
            id="tab-select-sections"
            onClick={() => setActiveTab('sections')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'sections' 
                ? 'bg-slate-800 text-white dark:bg-slate-700 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{lang === 'es' ? 'Secciones de la Plataforma' : 'Touring Platform Sections'}</span>
          </button>
        </div>

        {/* Modal content body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {activeTab === 'workflow' ? (
            <div className="space-y-6">
              <div className="bg-blue-50/20 dark:bg-blue-950/15 rounded-xl p-4 border border-blue-105/20">
                <h4 className="font-display font-semibold text-blue-900 dark:text-blue-400 text-sm md:text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-900 dark:text-blue-400" />
                  <span>{lang === 'es' ? 'Fundamentos del Flujo Molecular' : 'Fundamentals of Molecular Workflows'}</span>
                </h4>
                <p className="text-slate-655 dark:text-slate-300 text-xs md:text-sm mt-1 leading-relaxed text-justify">
                  {lang === 'es' 
                    ? 'El ADN ambiental (eDNA) es ADN celular o extracelular que los seres vivos liberan al agua, suelo, polen sedimentado o aire. La meta del investigador es recolectar esa firma molecular invisible, decodificarla y mapear la biodiversidad sin capturar especímenes vivos.' 
                    : 'Environmental DNA (eDNA) is generic cellular or extracellular code shed by wild organisms into aquatic pools, solid soils, airborne pollen, or winds. The goal of a researcher is to trace this hidden genetic mist, decode it, and map intact biodiversity without any visual stress.'}
                </p>
              </div>

              {/* Progress Stepper indicators */}
              <div className="grid grid-cols-4 gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                {workflows.map((wf, idx) => {
                  const CurrentIcon = wf.icon;
                  return (
                    <button
                      id={`stepper-btn-${idx}`}
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-lg flex flex-col items-center justify-center text-center gap-1.5 border transition-all cursor-pointer ${
                        activeStep === idx 
                          ? 'border-blue-900 bg-blue-50/10 dark:bg-blue-950/20' 
                          : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                      }`}
                    >
                      <span className={`p-1.5 rounded-full ${
                        activeStep === idx ? 'bg-blue-900 text-white dark:bg-blue-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        <CurrentIcon className="w-4 h-4" />
                      </span>
                      <span className={`text-[10px] font-medium hidden sm:inline ${
                        activeStep === idx ? 'text-blue-900 dark:text-blue-300 font-semibold' : 'text-slate-500'
                      }`}>
                        {lang === 'es' ? `Paso ${idx + 1}` : `Step ${idx + 1}`}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Step info section */}
              {(() => {
                const stepDetails = workflows[activeStep];
                const StepIcon = stepDetails.icon;
                return (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 dark:bg-slate-950/40 p-6 rounded-xl border border-slate-100 dark:border-slate-800/80">
                    <div className="md:col-span-3 flex flex-col items-center text-center">
                      <div className={`p-6 rounded-2xl border ${stepDetails.color} flex items-center justify-center`}>
                        <StepIcon className="w-12 h-12" />
                      </div>
                      <span id="workflow-step-badge" className="text-[10px] font-mono tracking-wider font-semibold text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 px-2 py-1 rounded-md mt-4">
                        {lang === 'es' ? `FASE ${activeStep + 1} DE 4` : `PHASE ${activeStep + 1} OF 4`}
                      </span>
                    </div>

                    <div className="md:col-span-9 space-y-3">
                      <h4 id="workflow-step-title" className="font-display font-medium text-slate-900 dark:text-white text-lg tracking-tight">
                        {stepDetails.title[lang]}
                      </h4>
                      <p id="workflow-step-desc" className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed text-justify">
                        {stepDetails.desc[lang]}
                      </p>

                      <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 text-xs text-slate-600 dark:text-slate-400">
                        <div id="workflow-step-goal" className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-700 dark:text-green-400 flex-shrink-0" />
                          <span>
                            <strong>{lang === 'es' ? 'Meta Clave: ' : 'Primary Goal: '}</strong>
                            {stepDetails.goal[lang]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="flex justify-between items-center text-xs text-slate-400 pt-2 font-mono">
                <span>{lang === 'es' ? '* Monitoreo ecológico responsable' : '* Standard biosafety guidelines active'}</span>
                <span className="flex gap-2">
                  <button 
                    id="prev-workflow-step"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="p-1 text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 disabled:opacity-30 disabled:hover:text-slate-500 cursor-pointer"
                  >
                    ←
                  </button>
                  <button 
                    id="next-workflow-step"
                    disabled={activeStep === workflows.length - 1}
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="p-1 text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 disabled:opacity-30 disabled:hover:text-slate-500 cursor-pointer"
                  >
                    →
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 font-sans">
              <div className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-4 text-justify">
                {lang === 'es' 
                  ? 'Esta página web une academia, protocolos prácticos, proyectos científicos de campo y red internacional. Aquí te explicamos lo que encontrarás en cada una de las 7 secciones del portal:'
                  : 'This platform integrates academics, active field protocols, research projects, and collaborative links. Here is how each of the 7 sections of the hub operates:'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectionsGuide.map((sec, idx) => {
                  const SecIcon = sec.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-800/80 flex items-start gap-3 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
                    >
                      <span className="p-2 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-350 rounded-lg shadow-sm flex-shrink-0">
                        <SecIcon className="w-4 h-4 text-blue-900 dark:text-blue-400" />
                      </span>
                      <div>
                        <h4 className="font-display font-medium text-slate-900 dark:text-white text-sm">
                          {sec.title[lang]}
                        </h4>
                        <p className="text-slate-505 dark:text-slate-404 text-xs mt-1 leading-relaxed text-left text-justify">
                          {sec.desc[lang]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal footer controls */}
        <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-1 text-[11px] text-slate-505 dark:text-slate-400 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GenBioDiv • Uninorte</span>
          </div>
          <button 
            id="close-guide-btn-bottom"
            onClick={onClose}
            className="px-5 py-2 bg-blue-900 hover:bg-blue-955 dark:bg-blue-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow transition-all cursor-pointer"
          >
            {lang === 'es' ? 'Entendido, ¡Explorar!' : 'Understood, Let’s Explore!'}
          </button>
        </div>
      </div>
    </div>
  );
}
