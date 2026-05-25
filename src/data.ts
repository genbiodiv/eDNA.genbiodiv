/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTranslation, CourseDay, CourseResource, ProtocolCategory, ProjectData, LitCategory, NetworkGroup } from './types';

// Central Translations Bundle
export const translations: Record<'es' | 'en', BaseTranslation> = {
  es: {
    navStart: 'Inicio',
    navCourse: 'Curso',
    navProtocols: 'Protocolos y Materiales',
    navProjects: 'Proyectos',
    navLiterature: 'Literatura',
    navNetwork: 'Red',
    navContact: 'Contacto',

    guideBtn: 'Guía Interactiva & Funcionamiento',
    closeBtn: 'Cerrar',
    nextBtn: 'Siguiente',
    prevBtn: 'Anterior',
    submitBtn: 'Enviar Mensaje',
    downloadBtn: 'Descargar',
    viewProtocolBtn: 'Ver Protocolo',
    downloadTemplateBtn: 'Descargar Formato',
    learnMoreBtn: 'Saber Más',
    collaborateBtn: 'Proponer colaboración',
    badgeLabel: 'eDNA Caribe',

    heroTitle: 'ADN ambiental GenBioDiv',
    heroFrase: 'ADN ambiental para entender y monitorear la biodiversidad del Caribe colombiano.',
    heroSub: 'Desde el grupo GenBioDiv desarrollamos herramientas de ADN ambiental para estudiar la biodiversidad del Caribe colombiano y otros de sus sistemas comparativos. Integramos muestreo de campo, trabajo molecular, análisis bioinformático, ecología urbana, ciencia ciudadana y colaboración internacional para generar información útil sobre ecosistemas acuáticos, marinos y urbanos.',
    exploreCourse: 'Explorar curso',
    viewProtocols: 'Ver protocolos',
    knowProjects: 'Conocer proyectos',

    aboutCardsTitle1: 'Aprender eDNA',
    aboutCardsText1: 'Formación introductoria para comprender los fundamentos del ADN ambiental, desde el diseño de estudios hasta la interpretación de resultados.',
    aboutCardsTitle2: 'Aplicar protocolos',
    aboutCardsText2: 'Materiales, listas de chequeo y protocolos para trabajo de campo, laboratorio y análisis bioinformático.',
    aboutCardsTitle3: 'Explorar proyectos',
    aboutCardsText3: 'Proyectos activos en ríos, mar Caribe, biodiversidad urbana y comparaciones internacionales.',

    whatWeDoTitle: 'Qué hacemos',
    whatWeDoText: 'Desarrollamos y aplicamos herramientas de ADN ambiental para estudiar biodiversidad acuática, marina, urbana y terrestre en el Caribe colombiano y en colaboración con redes internacionales.',
    whyItMattersTitle: 'Por qué importa',
    whyItMattersText: 'El eDNA permite detectar especies, comparar comunidades, monitorear cambios ambientales y generar información útil para conservación, restauración, educación y gestión territorial sin la necesidad de aislar físicamente especímenes complejos.',

    uninorteTitle: 'Universidad del Norte — Barranquilla, Colombia'
  },
  en: {
    navStart: 'Home',
    navCourse: 'Course',
    navProtocols: 'Protocols & Materials',
    navProjects: 'Projects',
    navLiterature: 'Literature',
    navNetwork: 'Network',
    navContact: 'Contact',

    guideBtn: 'Interactive Guide & Operations',
    closeBtn: 'Close',
    nextBtn: 'Next',
    prevBtn: 'Back',
    submitBtn: 'Send Message',
    downloadBtn: 'Download',
    viewProtocolBtn: 'View Protocol',
    downloadTemplateBtn: 'Download Template',
    learnMoreBtn: 'Learn More',
    collaborateBtn: 'Propose Collaboration',
    badgeLabel: 'eDNA Caribbean',

    heroTitle: 'eDNA GenBioDiv',
    heroFrase: 'Environmental DNA to understand and monitor the biodiversity of the Colombian Caribbean.',
    heroSub: 'From the GenBioDiv group, we develop environmental DNA tools to study the biodiversity of the Colombian Caribbean and other comparative systems. We integrate field sampling, molecular work, bioinformatics analysis, urban ecology, citizen science, and international collaboration to generate actionable data on aquatic, marine, and urban ecosystems.',
    exploreCourse: 'Explore Course',
    viewProtocols: 'View Protocols',
    knowProjects: 'Explore Projects',

    aboutCardsTitle1: 'Learn eDNA',
    aboutCardsText1: 'Introductory training to understand environmental DNA fundamentals, from design of studies to analysis and result interpretation.',
    aboutCardsTitle2: 'Apply Protocols',
    aboutCardsText2: 'Materials, check-lists, and protocols for field adventures, laboratory chemistry, and bioinformatics pipelines.',
    aboutCardsTitle3: 'Explore Projects',
    aboutCardsText3: 'Active research on rivers, the Caribbean Sea, urban biodiversity, and international landscape comparisons.',

    whatWeDoTitle: 'What We Do',
    whatWeDoText: 'We develop and apply environmental DNA tools to study aquatic, marine, urban, and terrestrial biodiversity in the Colombian Caribbean and in alliance with global scientific networks.',
    whyItMattersTitle: 'Why It Matters',
    whyItMattersText: 'eDNA enables the detection of species, community comparisons, and environmental change monitoring. It generates key evidence for conservation, ecological restoration, education, and territorial planning without physically harvesting taxa.',

    uninorteTitle: 'Universidad del Norte — Barranquilla, Colombia'
  }
};

// Course curriculum data
export const courseDays: CourseDay[] = [
  {
    id: 'day1',
    title: {
      es: 'D27-May • Fundamentos, Preparación y Muestreo',
      en: 'D27-May • Fundamentals, Preparation & Sampling'
    },
    subtitle: {
      es: 'Bloque G, piso 2, Salón Harvard 2 • Universidad del Norte',
      en: 'Block G, 2nd floor, Harvard 2 Room • Universidad del Norte'
    },
    activities: {
      es: [
        '08:00 – 10:00 | Introducción al ADN ambiental (eDNA): conceptos, desarrollo y aplicaciones. (Lugar: Bloque G; piso 2, Salón Harvard 2 • Jorge Moreno Tilano)',
        '10:00 – 12:00 | Diseño de estudios y planificación del muestreo. (Lugar: Bloque G; piso 2, Salón Harvard 2 • Jorge Moreno Tilano)',
        '12:00 – 14:00 | Almuerzo libre.',
        '14:00 – 15:00 | Revisión de protocolo y materiales. (Lugar: Bloque G; piso 2, Salón Harvard 2 • Damaris Grandas Gaona)',
        '15:00 – 17:00 | Salida de campo: recolección de muestras mediante barrido de vegetación. (Práctica grupal de campo)'
      ],
      en: [
        '08:00 – 10:00 | Introduction to environmental DNA (eDNA): concepts, development and applications. (Location: Block G; 2nd floor, Harvard 2 Room • Jorge Moreno Tilano)',
        '10:00 – 12:00 | Study design and sampling planning. (Location: Block G; 2nd floor, Harvard 2 Room • Jorge Moreno Tilano)',
        '12:00 – 14:00 | Lunch break.',
        '14:00 – 15:00 | Review of protocol and materials. (Location: Block G; 2nd floor, Harvard 2 Room • Damaris Grandas Gaona)',
        '15:00 – 17:00 | Field outing: sample collection using vegetation sweeping. (Field practice)'
      ]
    }
  },
  {
    id: 'day2',
    title: {
      es: 'D28-May • Procesamiento de Laboratorio',
      en: 'D28-May • Laboratory Processing & Extraction'
    },
    subtitle: {
      es: 'Laboratorios de Ciencias • Bloque de Salud y Edificio Armando Dugand',
      en: 'Science Laboratories • Health Block & Armando Dugand Building'
    },
    activities: {
      es: [
        '08:00 – 12:00 | Filtrado y Extracción de ADN a partir de muestras recolectadas. (Lugar: Bloque de salud, piso 5, laboratorio de biología molecular • Jorge Moreno Tilano | Keyner Moreno)',
        '12:00 – 14:00 | Almuerzo libre.',
        '14:00 – 17:00 | Amplificación por PCR y preparación de librerías. (Lugar: Laboratorio de química y Biología Armando Dugand • Damaris Grandas Gaona | Roberto Castro | Luis Bustamante)'
      ],
      en: [
        '08:00 – 12:00 | Filtration and DNA Extraction from collected samples. (Location: Health Block, 5th floor, molecular biology lab • Jorge Moreno Tilano | Keyner Moreno)',
        '12:00 – 14:00 | Lunch break.',
        '14:00 – 17:00 | PCR Amplification and library preparation. (Location: Armando Dugand chemistry and biology lab • Damaris Grandas Gaona | Roberto Castro | Luis Bustamante)'
      ]
    }
  },
  {
    id: 'day3',
    title: {
      es: 'D29-May • Análisis de Datos',
      en: 'D29-May • Data Analysis'
    },
    subtitle: {
      es: 'Bloque J, piso 5, Sala de usuario N°11 • Universidad del Norte',
      en: 'Block J, 5th floor, User Room N°11 • Universidad del Norte'
    },
    activities: {
      es: [
        '08:00 – 12:00 | Análisis de datos de metabarcoding: filtrado de secuencias, asignación taxonómica e interpretación de resultados. (Lugar: Bloque J; piso 5, Sala de usuario N°11 • Jorge Moreno Tilano | Keyner Moreno)',
        '12:00 – 14:00 | Almuerzo libre.',
        '14:00 – 17:00 | Introducción a tecnologías de secuenciación. (Lugar: Bloque J; piso 5, Sala de usuario N°11 • Rochem Biocare - Illumina)'
      ],
      en: [
        '08:00 – 12:00 | Metabarcoding data analysis: sequence filtering, taxonomic assignment, and result interpretation. (Location: Block J; 5th floor, User Room N°11 • Jorge Moreno Tilano | Keyner Moreno)',
        '12:00 – 14:00 | Lunch break.',
        '14:00 – 17:00 | Introduction to sequencing technologies. (Location: Block J; 5th floor, User Room N°11 • Rochem Biocare - Illumina)'
      ]
    }
  }
];

// Resources available for download
export const courseResources: CourseResource[] = [
  {
    id: 'res-cron',
    name: {
      es: 'Cronograma Detallado del Curso (PDF)',
      en: 'Detailed Course Syllabus (PDF)'
    },
    type: 'PDF',
    size: '1.4 MB',
    link: '#cronograma'
  },
  {
    id: 'res-mat',
    name: {
      es: 'Inventario de Materiales & Reactivos Necesarios',
      en: 'Reagent Catalog & Required Field Checklist'
    },
    type: 'DOCX',
    size: '840 KB',
    link: '#materiales'
  },
  {
    id: 'res-proc',
    name: {
      es: 'Protocolo Unificado de Campo GenBioDiv V2',
      en: 'GenBioDiv Unified Field Protocol V2'
    },
    type: 'PDF',
    size: '3.1 MB',
    link: '#protocolo_campo'
  },
  {
    id: 'res-lab',
    name: {
      es: 'Guía Química y Protocolos de Extracción',
      en: 'Wet-Lab DNA Extraction & PCR Protocols Guide'
    },
    type: 'PDF',
    size: '2.5 MB',
    link: '#protocolo_lab'
  },
  {
    id: 'res-plantilla',
    name: {
      es: 'Plantilla de Metadatos y Registro de Muestras (XLSX)',
      en: 'Geographical Metadata & Sample Log Sheet Template (XLSX)'
    },
    type: 'XLSX',
    size: '450 KB',
    link: '#plantillas'
  }
];

// Protocols block
export const protocolsList: ProtocolCategory[] = [
  {
    id: 'p-campo',
    title: {
      es: 'Protocolos de Campo',
      en: 'Field Protocols'
    },
    description: {
      es: 'Preparativos tácticos antes del embarque, rotulado molecular hermético, prevención activa de la contaminación exógena y georreferenciación multiparamétrica.',
      en: 'Practical checklists prior to deployment, hermetic molecular sampling labels, barrier hygiene, and multi-parametric geographical surveying.'
    },
    steps: {
      es: [
        'Esterilización de frascos y equipos móviles de filtrado con cloro al 10% y agua ultrapura.',
        'Registro descriptivo de metadatos ambientales: temperatura, pH, conductividad, turbidez y coordenadas GPS.',
        'Rotulado triple que garantice la trazabilidad de la muestra física en condiciones tropicales húmedas.',
        'Cadena de frío inmediata: conservación de filtros en viales con buffer de preservación (Lysis buffer / RNA later) o congelados.'
      ],
      en: [
        'Sterilization of collection bottles and filter manifolds with 10% bleach and ultrapure water.',
        'On-site environmental recording: temperature, pH, conductivity, turbidity, and GPS coordinates.',
        'Triple-tagging indexing to secure complete provenance metadata under hot, humid tropical climates.',
        'Immediate cold chain maintenance: stabilizing filters in pre-aliquoted lysis buffer, RNAlater, or liquid nitrogen.'
      ]
    },
    buttonText: {
      es: 'Ver Guía de Campo',
      en: 'View Field Protocol'
    },
    status: 'available'
  },
  {
    id: 'p-lab',
    title: {
      es: 'Protocolos de Laboratorio',
      en: 'Laboratory Protocols'
    },
    description: {
      es: 'Maniobras estériles de filtración al vacío, purificación de ácidos nucleicos sobre membranas, amplificación multiplexada y cuantificación mediante fluorómetros.',
      en: 'Sterile vacuum aspiration systems, nucleic acid purification on spin columns, multiplex targets, and fluorometric metrics.'
    },
    steps: {
      es: [
        'Flujo de trabajo separado: áreas estrictamente divididas para Pre-PCR y Post-PCR.',
        'Extracción con kits comerciales validados para ADN de baja biomasa o lisis fenol-cloroformo para lodos densos.',
        'Amplificación robusta por PCR en duplicado o triplicado para mitigar sesgos de estocasticidad.',
        'Cuantificación fluorescente selectiva (Qubit o similar) y evaluación de integridad por geles de agarosa.'
      ],
      en: [
        'Sterile spatial compartmentalization: separate rooms for Pre-PCR and Post-PCR workflows.',
        'Solid spin-column extraction tuned for ultra-low biomass or phenol-chloroform lysis for thick sediments.',
        'Replicate PCR amplification (duplicate/triplicate assays) to control amplification stochasticity.',
        'Fluorometric standard quantification (Qubit fluorometer) and size verification via agarose electrophoresis.'
      ]
    },
    buttonText: {
      es: 'Ver Guía de Laboratorio',
      en: 'View Wet-Lab Protocol'
    },
    status: 'available'
  },
  {
    id: 'p-analisis',
    title: {
      es: 'Visualización y Análisis Ecológico',
      en: 'Bioinformatics Pipelines'
    },
    description: {
      es: 'Depuración taxonómica, procesamiento de lecturas emparejadas FASTQ, filtración de ruido no específico y mapeo metabarcode correlativo.',
      en: 'Taxonomic refining, read merging of FASTQ files, filtering of low-quality amplicons, and reference ecological mapping.'
    },
    steps: {
      es: [
        'Inspección de adaptadores de secuenciación y corte de bases de baja calidad con herramientas como fastp o Trimmomatic.',
        'Denoising de secuencias con algoritmos modernos (DADA2 o usearch) para rescatar variantes nucleotídicas (ASVs).',
        'Búsqueda taxonómica cruzada utilizando bases locales del Caribe y repositorios mundiales (NCBI / Barcode of Life).',
        'Análisis en lenguajes especializados (R / Python) utilizando paquetes como phyloseq, vegan o QIIME2.'
      ],
      en: [
        'Adapter stripping and quality trimming of raw sequencing files with fastp or Trimmomatic.',
        'Modern denoising processing (DADA2 or USEARCH) to resolve Single Nucleotide Amplicon Sequence Variants (ASVs).',
        'Taxonomic query curation against custom Caribbean reference libraries and global engines (NCBI / BOLD).',
        'Ecological downstream analysis (R / Jupyter notebooks) harnessing phyloseq, vegan, and QIIME2 software suites.'
      ]
    },
    buttonText: {
      es: 'Ver Pipeline Bioinformático',
      en: 'View Pipeline Spec'
    },
    status: 'available'
  },
  {
    id: 'p-formatos',
    title: {
      es: 'Formatos y Plantillas',
      en: 'Sheets & Templates'
    },
    description: {
      es: 'Registros normalizados para asegurar el cumplimiento estricto de los estándares internacionales de datos FAIR en metadatos ecológicos.',
      en: 'Standard charts curated to uphold FAIR data principles and robust environmental metadata formatting.'
    },
    steps: {
      es: [
        'Hoja de campo estandarizada para anotar coordenadas geográficas precisas y parámetros del cuerpo de agua.',
        'Bitácora de extracción: seguimiento del lote de reactivos, calibración de pipetas y personal técnico responsable.',
        'Tabla matriz de metadatos Darwin Core (DwC), compatible con publicaciones del GBIF y SiB Colombia.',
        'Estructura guía para el depósito seguro de datos crudos crudos (SRA de NCBI o ENA).'
      ],
      en: [
        'Shorthand field log template to trace geographical points and quick ambient water characteristics.',
        'Extraction logs tracking batch numbers of reagent columns, micropipettes, and extraction technicians.',
        'Darwin Core (DwC) compliant spreadsheets for streamlined ingestion into global GBIF registries.',
        'Structured guide to submit clean raw FASTQ sequences to NCBI Sequence Read Archive (SRA) or ENA registries.'
      ]
    },
    buttonText: {
      es: 'Descargar Formatos',
      en: 'Download Template Pack'
    },
    status: 'available'
  }
];

// Research projects data
export const projectsList: ProjectData[] = [
  {
    id: 'proj-magdalena',
    title: {
      es: 'Biodiversidad molecular del río Magdalena',
      en: 'Magdalena River Molecular Biodiversity'
    },
    description: {
      es: 'Proyecto orientado a caracterizar la biodiversidad de todo el curso fluvial del río Magdalena mediante ADN ambiental, integrando muestras a lo largo de gradientes espaciales y ambientales. Busca aportar información sobre peces, tetrápodos y macroinvertebrados asociados a uno de los sistemas de transporte ecológico más cruciales de Colombia.',
      en: 'Wide project targeting the biological profiles throughout the entire basin flow of the Magdalena River using environmental DNA. By collecting samples along ecological and water-quality gradients, the team aims to catalogue fish, terrestrial vertebrates, and macro-invertebrates associated with the main drainage system in Colombia.'
    },
    tags: ['Magdalena', 'eDNA acuático', 'Vertebrados', 'Monitoreo fluvial'],
    scope: {
      es: [
        'Sitios de muestreo: Gradientes longitudinales en el curso bajo y medio del río (Estación Barranquilla, Palmar de Varela, Magangué).',
        'Tipos de muestra: Muestras de agua superficial (1L a 2L de agua filtrada por duplicado).',
        'Marcadores genéticos: MiFish (12S rRNA) para peces; COI y 16S para taxones eucarióticos complementarios.',
        'Resultados: Detección remota de gremios de peces migratorios nativos (e.g., bocachico, bagre rayado) y especies invasoras invasivas (e.g., colossoma).'
      ],
      en: [
        'Sampling Points: Longitudinal transects along lower and middle basins (Barranquilla, Palmar de Varela, Magangué).',
        'Sample Types: Surface water collection (1L to 2L vacuum filtered in duplicates).',
        'Genetic Assays: MiFish (12S rRNA primer) for bony fishes; COI & 16S for broader complementary eukaryotic taxa.',
        'Achievements: Remote detection of key native migratory fish (e.g. Prochilodus, Pseudoplatystoma) and invasive exotic species.'
      ]
    },
    markers: ['Barranquilla (Lower Basin)', 'Palmar de Varela (Middle Basin)', 'Sitionuevo (Estuary)'],
    metrics: { es: '12S rRNA / COI', en: '12S rRNA / COI' }
  },
  {
    id: 'proj-wildinsync',
    title: {
      es: 'WildInSync: biodiversidad y sincronía ecológica',
      en: 'WildInSync: Biological Patterns & Ecological Synchrony'
    },
    description: {
      es: 'Iniciativa internacional colaborativa enfocada en descifrar cómo las comunidades de seres vivos responden de manera sincronizada frente a cambios ambientales agudos o estacionales. Desarrollamos y refinamos herramientas de monitoreo no invasivo combinando eDNA y modelos bioestadísticos de series temporales de alta resolución.',
      en: 'International collaboration focusing on how whole biological communities synchronize their geographical dynamics in response to climate or spatial perturbations. We integrate non-invasive genetic profiling with high-resolution biostatistical modeling and time-series designs.'
    },
    tags: ['Colaboración', 'Biodiversidad', 'Sincronía ecológica', 'Monitoreo'],
    scope: {
      es: [
        'Objetivo: Establecer un marco de monitoreo estandarizado que asocie pulsos de inundación con recambio de biodiversidad.',
        'Ecosistemas de prueba: Humedales costeros de Barranquilla, sabanas del Caribe húmedo colombianos y cuencas comparativas en Alemania.',
        'Método: Extración multiparamétrica de metabarcoding de fauna silvestre y perfiles microbianos ambientales.',
        'Cooperaciones: Alianza estrecha con grupos de ecología evolutiva europeos e institutos de computación científica.'
      ],
      en: [
        'Objective: Standardize analytical pipelines to cross-reference water pulses and biodiversity turnover.',
        'Ecosystems: Inlets around coastal wetlands, Caribbean savannas in Colombia, and baseline forests in Germany.',
        'Workflow: High-throughput metabarcoding of terrestrial sweep-nets and aquatic micro-habitats.',
        'Partners: Active connections with evolutionary ecology groups and computational modeling hubs.'
      ]
    },
    metrics: { es: 'Multi-marcador eDNA', en: 'Multi-primer eDNA' }
  },
  {
    id: 'proj-marcaribe',
    title: {
      es: 'ADN ambiental en ecosistemas marinos del Caribe',
      en: 'eDNA in Marina & Reef Ecosystems of the Colombian Caribbean'
    },
    description: {
      es: 'Evaluaciones ecológicas de la composición biológica marina mediante ADN ambiental en arrecifes costeros y zonas rocosas costeras. Diseñado para contrastar diagnósticos visuales convencionales de corales y peces con capturas genéticas de agua marina sobre áreas influenciadas por descargas de pluma fluvial.',
      en: 'Evaluating coral and marine biodiversity compositions through marine environmental DNA profiles. It balances conventional visual censuses with water filtering assays in areas highly influenced by sediment plumes, river inputs, and anthropogenic coast footprints.'
    },
    tags: ['Caribe colombiano', 'Ecosistemas marinos', 'Corales', 'Peces', 'Esponjas'],
    scope: {
      es: [
        'Zonas de interés: Parques Nacionales Naturales (Rosario y San Bernardo, Tayrona) y arrecifes locales de Barranquilla (Puerto Colombia, Salgar).',
        'Grupos objetivo: Comunidades de corales hermatípicos (Scleractinia), peces arrecifales asociados y consorcios bacterianos simbiontes.',
        'Desafío: Altas concentraciones de sedimentos en suspensión del Magdalena y su impacto en la dilución del ADN libre de agua.',
        'Comprensión: Detección precoz de patógenos coralinos y mapeo de esponjas raras ocultas en grietas sedimentarias.'
      ],
      en: [
        'Focus Areas: National Protected Parks (Rosario & San Bernardo, Tayrona) and local reefs near Barranquilla (Salgar, Puerto Colombia).',
        'Target Groups: Hermatypic corals (Scleractinia), reef fishes, microbial symbiotic communities, and structural demosponges.',
        'Key Bottleneck: High particulate concentration of Magdalena sediment plume and its dilution effect on extracellular ocean DNA.',
        'Impact: Preemptive identification of localized coral pathogens and mapping of rare subterranean sponge species.'
      ]
    },
    metrics: { es: '12S, 16S, COI & 18S', en: '12S, 16S, COI & 18S' }
  },
  {
    id: 'proj-parques',
    title: {
      es: 'Biodiversidad urbana en parques de Barranquilla',
      en: 'Urban Biodiversity in Barranquilla Public Parks'
    },
    description: {
      es: 'Proyecto transversal enfocado en la ecología de los parques metropolitanos del Distrito de Barranquilla. Utiliza barrido molecular de fauna aérea y polen suspendido para descifrar el impacto de la conectividad ecológica y el manejo paisajístico sobre los insectos polinizadores, aves y vegetación introducida y nativa.',
      en: 'Cross-sectional research focused on urban park ecology in Barranquilla. Using molecular sweeps of airborne fauna, dust-borne pollens, and environmental surfaces, our team maps out how urban green spaces steer the patterns of insect pollinators, birds, and flora.'
    },
    tags: ['Barranquilla', 'Biodiversidad urbana', 'Parques', 'Ciencia ciudadana', 'Vegetación urbana'],
    scope: {
      es: [
        'Ubicaciones: Parques emblemáticos (Sagrado Corazón, Parque Bosques del Norte, Parque Surí Salcedo).',
        'Colección: Muestreo pasivo de polen depositado, eDNA en fuentes ornamentales y muestreo directo de superficies foliares.',
        'Enfoque social: Salidas interactivas de monitoreo con colegios distritales, empoderando a estudiantes en ciencia ciudadana.',
        'Hallazgos: Catálogo molecular de comunidades de artrópodos hiperdiversos y su relación directa con el arbolado nativo.'
      ],
      en: [
        'Locations: Major public parks (Sagrado Corazón, Bosques del Norte, Surí Salcedo).',
        'Collection: Passive sediment and dust collection, water basins eDNA, and direct leaf environmental swabs.',
        'Citizen Science: Interactive campaigns with local high schools, involving youth across urban biological surveillance.',
        'Findings: Molecular catalogues of hyperdiverse arthropod communities and their strict correlation with native trees.'
      ]
    },
    metrics: { es: 'ITS2 / COI Artrópodos', en: 'ITS2 / COI Arthropoda' }
  },
  {
    id: 'proj-trier',
    title: {
      es: 'Comparación urbana Barranquilla–Trier (Colombia–Alemania)',
      en: 'Urban Biodiversity Gradient: Barranquilla – Trier'
    },
    description: {
      es: 'Estudio transcontinental comparativo entre una urbe tropical de rápido crecimiento (Barranquilla) y una ciudad histórica de escala media en zona templada (Trier, Alemania). Evaluamos las firmas moleculares que el desarrollo urbano, la temperatura ambiente y la planificación de jardines imprimen en el eDNA terrestre.',
      en: 'Transcontinental comparative framework between a fast-growing tropical city (Barranquilla) and an ancient template urban zone (Trier, Germany). We study the molecular prints of urban morphology, local microclimates, and landscaping designs on terrestrial environmental DNA.'
    },
    tags: ['Barranquilla', 'Trier', 'eDNA urbano', 'Comparación internacional', 'Univ. Trier'],
    scope: {
      es: [
        'Coordinación: Esfuerzo binacional con el Laboratorio de Ecología Evolutiva e Biogeografía de la Universidad de Trier.',
        'Protocolo unificado: Muestreo de ADN ambiental idéntico en suelos urbanos y polvillo aéreo estandarizado.',
        'Comparación de biodiversidad: Contraste de abundancias de filos de invertebrados terrestres y hongos saprófitos.',
        'Estudio climático: Evaluación de cómo el calentamiento urbano actúa en latitudes contrastantes sobre especies adaptadas.'
      ],
      en: [
        'Coordination: Joint venture with the Laboratory of Evolutionary Ecology & Biogeography at Trier University.',
        'Unified Assay: Standardized soil protocols and atmospheric particulate traps deployed across both cities.',
        'Ecological Scope: Contrast between hyperdiverse soil micro-invertebrates and wood-decaying fungal cohorts.',
        'Climatic Axis: Insight into how Urban Heat Island profiles regulate biological assembly across latitudes.'
      ]
    },
    metrics: { es: 'COI Invertebrados / 18S', en: 'COI Invertebrates / 18S' }
  }
];

// Reference eDNA Literature
export const literatureCategories: LitCategory[] = [
  {
    id: 'lit-intro',
    title: {
      es: '1. Introducción al ADN ambiental',
      en: '1. Introduction to Environmental DNA'
    },
    description: {
      es: 'Lecturas conceptuales básicas y revisiones generales que describen la química de los ácidos nucleicos libres en el ambiente.',
      en: 'Core conceptual blueprints and general reviews establishing the chemistry of free-flowing nucleic acids in landscapes.'
    },
    items: [
      {
        id: 'lit-1',
        title: 'Environmental DNA: An emerging tool in conservation for monitoring past and present biodiversity',
        authors: 'Thomsen, P. F., & Willerslev, E.',
        year: 2015,
        whyRead: {
          es: 'Fabulosa introducción clásica que resume las técnicas iniciales de eDNA y las transformaciones para monitorear vida silvestre.',
          en: 'Excellent classic foundation reviewing the pioneering technical history of eDNA and its application in contemporary biomonitoring.'
        },
        link: 'https://doi.org/10.1016/j.biocon.2014.11.019'
      },
      {
        id: 'lit-2',
        title: 'Environmental DNA (eDNA) metabarcoding for biodiversity assessment',
        authors: 'Taberlet, P., Coissac, E., Hajibabaei, M., & Rieseberg, L. H.',
        year: 2012,
        whyRead: {
          es: 'Artículo clave pionero que acuña conceptos sólidos de metabarcoding y la preparación de reactivos para secuenciación de amplicón.',
          en: 'Invaluable pioneer manuscript defining the limits of metabarcoding setups and mass primer selections.'
        },
        link: 'https://doi.org/10.1111/j.1365-294X.2012.05570.x'
      }
    ]
  },
  {
    id: 'lit-meta',
    title: {
      es: '2. Metabarcoding y bioinformática',
      en: '2. Metabarcoding & Bioinformatics Pipelines'
    },
    description: {
      es: 'Literatura especializada en limpieza de bases de datos, asignación de taxones y algoritmos matemáticos.',
      en: 'Specialized work describing taxonomic filtration, operational sequence assignment, and mathematical algorithms.'
    },
    items: [
      {
        id: 'lit-3',
        title: 'DADA2: High-resolution sample inference from Illumina amplicon data',
        authors: 'Callahan, B. J., McMurdie, P. J., et al.',
        year: 2016,
        whyRead: {
          es: 'El artículo científico donde se introduce el algoritmo DADA2 que permite resolver variantes nucleotídicas (ASVs) eliminando el ruido técnico.',
          en: 'The breakthrough manuscript establishing DADA2 workflow parameters to resolve real DNA variants while removing base noise.'
        },
        link: 'https://doi.org/10.1038/nmeth.3869'
      },
      {
        id: 'lit-4',
        title: 'QIIME 2: Reproducible, interactive, scalable, and extensible microbiome data science',
        authors: 'Bolyen, E., Rideout, J. R., et al.',
        year: 2019,
        whyRead: {
          es: 'Describe la arquitectura multiplataforma de QIIME2, el estándar para organizar flujos de análisis de metabarcoding.',
          en: 'Illustrates the modular cross-platform engineering of QIIME2, the scientific standard for biological data curation.'
        },
        link: 'https://doi.org/10.1038/s41587-019-0209-9'
      }
    ]
  },
  {
    id: 'lit-rios',
    title: {
      es: '3. eDNA en ríos y sistemas fluviales',
      en: '3. eDNA in Rivers & Freshwater Catchments'
    },
    description: {
      es: 'Artículos sobre transporte hidrológico del material genético, degradación en agua corriente y muestreo de redes hidrográficas.',
      en: 'Hydraulic transport of extracellular matrices, degradation dynamics inside currents, and drainage basin modeling.'
    },
    items: [
      {
        id: 'lit-5',
        title: 'Transport and study dynamics of environmental DNA in a natural river system',
        authors: 'Deiner, K., & Altermatt, F.',
        year: 2014,
        whyRead: {
          es: 'Muestra empíricamente el rango de distancia de transporte del eDNA en corrientes de ríos, relevante para ubicar estaciones de muestreo.',
          en: 'Empirically shows the physical transport range of eDNA plumes downstream, critical for positioning river monitoring stations.'
        },
        link: 'https://doi.org/10.1371/journal.pone.0106851'
      }
    ]
  },
  {
    id: 'lit-marino',
    title: {
      es: '4. eDNA marino y arrecifal',
      en: '4. eDNA in Marine & Coral Reef Environments'
    },
    description: {
      es: 'Monitoreo de peces tropicales, estimaciones en arrecifes coralinos y dinámicas de dispersión oceánica.',
      en: 'surveillance of tropical assemblages, coral community indexes, and current dispersion matrices in oceans.'
    },
    items: [
      {
        id: 'lit-6',
        title: 'Environmental DNA metabarcoding reveals local fish communities in a marine nature reserve',
        authors: 'Thomsen, P. F., et al.',
        year: 2012,
        whyRead: {
          es: 'Estudio fundacional sobre la precisión del eDNA para detectar peces bentónicos y pelágicos en comparación con métodos tradicionales.',
          en: 'Pioneering work reporting high precision of eDNA assays compared with physical netting assessments in coastal waters.'
        },
        link: 'https://doi.org/10.1371/journal.pone.0041732'
      }
    ]
  },
  {
    id: 'lit-urbano',
    title: {
      es: '5. eDNA urbano y ciencia ciudadana',
      en: '5. Urban eDNA & Stakeholder Involvement'
    },
    description: {
      es: 'Estudios sobre cómo capturar firmas de vida en ciudades usando bio-barridos, recolección pasiva y participación pública.',
      en: 'Delineating footprints of multi-taxa life in urban landscapes using passive collectors and community-led sampling campaigns.'
    },
    items: [
      {
        id: 'lit-7',
        title: 'eDNA in the City: Passive dust traps act as biomonitoring portals in dense locations',
        authors: 'Krehenwinkel, H., et al.',
        year: 2021,
        whyRead: {
          es: 'Evaluación del uso de polvillo urbano y filtros pasivos para caracterizar artrópodos locales en ecosistemas metropolitanos.',
          en: 'Investigates the potential of urban dust matrices and active ventilation traps to register arthropod richness in complex settings.'
        },
        link: '#doi-place-holder'
      }
    ]
  },
  {
    id: 'lit-limits',
    title: {
      es: '6. Limitaciones, sesgos y buenas prácticas',
      en: '6. Limitations, Bias, & Laboratory Safety Guidelines'
    },
    description: {
      es: 'Aborda la degradación catalizada, contaminantes externos, tasas de falsos positivos y la necesidad de controles metodológicos férreos.',
      en: 'Addresses UV/temperature degradation rates, exogenous carrier molecules, false positive detection, and essential control designs.'
    },
    items: [
      {
        id: 'lit-8',
        title: 'Best practices for environmental DNA research and critical laboratory control architectures',
        authors: 'Goldberg, C. S., et al.',
        year: 2016,
        whyRead: {
          es: 'Guía fundamental que sienta las bases de limpieza para laboratorios molecularizados de ADN ambiental, recomendación obligada del grupo.',
          en: 'The definitive guidelines outlining clean containment configurations for low-concentration eDNA labs.'
        },
        link: 'https://doi.org/10.1111/2041-210X.12595'
      }
    ]
  }
];

// Collaboration networks & active sectors
export const networkSections: NetworkGroup[] = [
  {
    id: 'net-local',
    title: {
      es: 'Equipo Local GenBioDiv',
      en: 'Local GenBioDiv Team'
    },
    description: {
      es: 'Liderado por el Departamento de Ciencias Naturales de la Universidad del Norte, fomentando el talento local.',
      en: 'Hosted at the Department of Natural Sciences at Universidad del Norte, training academic leaders in northern Colombia.'
    },
    members: {
      es: [
        'Dr. Rafik Neme (Líder / Profesor Asistente de Ciencias Genómicas)',
        'Investigadores Asistentes en Biología Molecular y Humedales',
        'Estudiantes de Pregrado y Semilleros en Ciencias de la Vida',
        'Candidatos a Maestría y Doctorado en Biodiversidad y Ecología'
      ],
      en: [
        'Dr. Rafik Neme (Principal Investigator / Assistant Genomical Professor)',
        'Staff Molecular Wet-lab Specialists & Wetland Researchers',
        'Undergraduate Scholars and Biology Department Trainees',
        'M.Sc. and Ph.D. Candidates concentrating in Biodiversity & Ecology'
      ]
    }
  },
  {
    id: 'net-nacional',
    title: {
      es: 'Colaboradores Nacionales',
      en: 'National Coalitions'
    },
    description: {
      es: 'Unión de fuerzas biológicas, ONG de conservación, bancos de germoplasma y redes de monitoreo estatales.',
      en: 'Interconnecting biological networks, conservation NGOs, local herbaria, and national monitoring offices.'
    },
    members: {
      es: [
        'Universidades aliadas de la Región Caribe colombiana',
        'Organizaciones no gubernamentales de conservación de ciénagas',
        'Institutos públicos nacionales de monitoreo ambiental',
        'Redes de Ciencia Ciudadana de Colombia'
      ],
      en: [
        'Partnering universities in the Colombian Caribbean coastal region',
        'Wetland preservation associations and swamp monitoring NGOs',
        'Public national research agencies active in ecosystem assessments',
        'Citizen Science networks scaling up bio-audits in Colombia'
      ]
    }
  },
  {
    id: 'net-inter',
    title: {
      es: 'Colaboradores Internacionales',
      en: 'International Collaborators'
    },
    description: {
      es: 'La ciencia trasciende fronteras. Intercambio académico de postgrado y secuenciación internacional conjunta.',
      en: 'Bridging international boundaries through active scientific cooperation, fellowships, and shared NGS sequencing libraries.'
    },
    members: {
      es: [
        'Universidad de Trier, Alemania (Lab. de Ecología Evolutiva, Dr. Henrik Krehenwinkel)',
        'Instituto Max Planck de Biología Evolutiva',
        'Servicio Alemán de Intercambio Académico (DAAD)',
        'Pew Latin American Fellows Program in the Biomedical Sciences',
        'Iniciativas de monitoreo biológico binacional'
      ],
      en: [
        'Trier University, Germany (Laboratory of Evolutionary Ecology, Dr. Henrik Krehenwinkel)',
        'Max Planck Institute for Evolutionary Biology',
        'German Academic Exchange Service (DAAD) fellowships',
        'Pew Latin American Fellows Program in the Biomedical Sciences',
        'Transnational high-density genomic mapping groups'
      ]
    }
  },
  {
    id: 'net-join',
    title: {
      es: '¿Cómo colaborar con nosotros?',
      en: 'How to Collaborate?'
    },
    members: {
      es: [
        'Proponer proyectos de tesis para pregrado y posgrado en ecología molecular.',
        'Socio de campo: Apoyo logístico, toma de muestras coordinada o envío de filtros.',
        'Iniciativas comunitarias: Monitorear parques urbanos o caños de agua de tu localidad.',
        'Apoyo tecnológico: Bioinformática, catalogación de base de datos de referencia.'
      ],
      en: [
        'Graduate and undergrad thesis project submissions focusing on environmental genomics.',
        'Field partners: logistical local coordination, joint surveys, or filter sample dispatch.',
        'Community projects: monitoring public local sectors, urban streams, or backyards.',
        'Bioinformatics partnership: curated sequence databases and algorithm enhancements.'
      ]
    },
    ctaText: {
      es: 'Proponer colaboración',
      en: 'Pitch a Proposal'
    }
  }
];
