/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  Send, 
  CheckCircle,
  FileText,
  User,
  HelpCircle,
  Dna
} from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('colaboracion');
  const [message, setMessage] = useState('');

  const titleText = {
    es: 'Contacto y Correspondencia',
    en: 'Contact & Inquiries'
  };

  const labels = {
    name: { es: 'Nombre Completo', en: 'Full Name' },
    institution: { es: 'Institución / Universidad', en: 'Institution / Affiliation' },
    email: { es: 'Correo Electrónico', en: 'Email Address' },
    interest: { es: 'Tipo de Interés / Asunto', en: 'Area of Interest' },
    msg: { es: 'Tu Mensaje / Consulta', en: 'Your Message / Inquiry' },
    btn: { es: 'Enviar mensaje', en: 'Send message' },
    successTitle: { es: '¡Mensaje Enviado!', en: 'Message Dispatched!' },
    successBody: {
      es: 'Tu mensaje ha sido registrado exitosamente. El equipo de GenBioDiv se pondrá en contacto contigo a la brevedad para coordinar acciones.',
      en: 'Your inquiry has been successfully captured. The GenBioDiv academic staff will review your metrics and respond shortly.'
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setErrorMessage('');

    // Obfuscated email assembly to protect from scrapers
    const targetLocal = 'rneme';
    const targetDom = 'uninorte.edu.co';
    const targetEmail = `${targetLocal}@${targetDom}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          institution: institution || 'N/A',
          interest: interest,
          message: message || '(No message)',
          _subject: `GenBioDiv Contact - ${interest.toUpperCase()}: ${name}`
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        throw new Error(lang === 'es' ? 'Hubo un inconveniente al enviar. Por favor intente de nuevo.' : 'Submission error. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || (lang === 'es' ? 'Error al conectar con el servidor. Intente de nuevo.' : 'Network connection issue. Please retry.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage('');
    setName('');
    setInstitution('');
    setEmail('');
    setInterest('colaboracion');
    setMessage('');
  };

  return (
    <section id="contacto" className="relative overflow-hidden py-16 bg-slate-50/50 dark:bg-slate-950/40 bg-pattern border-b border-slate-200/50 dark:border-slate-850/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl animate-fade-in">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-900 dark:text-blue-400 uppercase flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>{lang === 'es' ? 'CANAL DE COMUNICACIÓN' : 'COMMUNICATION PORT'}</span>
          </span>
          <h2 id="contact-section-title" className="mt-2 font-display font-medium text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight">
            {titleText[lang]}
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
            {lang === 'es' 
              ? '¿Tienes preguntas sobre el curso, requieres asesoramiento en muestreos de campo, tecnicas en genomica o te gustaría proponer una pasantia o tesis de pregrado/ maestria? Escríbenos directamente.'
              : 'Do you have questions about the course, require advice on field sampling or genomic techniques, or would you like to propose an internship or undergraduate/Master\'s thesis? Write to us directly.'}
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* Left panel: Address details, PI Info */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-855 rounded-3xl p-6 md:p-8 flex flex-col justify-between card-shadow">
            <div className="space-y-6">
              
              {/* Institution Title block */}
              <div className="space-y-2">
                <span className="p-2 border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-900 dark:text-blue-400 inline-block">
                  <Building2 className="w-5 h-5" />
                </span>
                <h3 className="font-display font-medium text-slate-900 dark:text-white text-base leading-snug">
                  GenBioDiv — Genómica y Biodiversidad del Caribe
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Universidad del Norte • Departamento de Química y Biología
                </p>
                <p className="text-[11px] font-mono text-slate-400">
                  Barranquilla • Colombia
                </p>
              </div>

              {/* PI Specific Block */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-150 dark:border-slate-850 space-y-2.5 text-justify">
                <span className="text-[9px] font-mono tracking-widest text-blue-900 dark:text-blue-400 font-bold block uppercase">
                  {lang === 'es' ? 'Responsable Científico' : 'Lead Investigator'}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm">
                    Rafik Neme
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {lang === 'es'
                      ? 'Profesor asistente, Departamento de Química y Biología'
                      : 'Assistant Professor, Department of Chemistry and Biology'}
                  </p>
                </div>
              </div>

            </div>

            {/* Micro disclaimer on bottom */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-850 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Estándares moleculares éticos' : 'Ethical biosecurity values active'}</span>
            </div>

          </div>

          {/* Right panel: Digital Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-855 rounded-3xl p-6 md:p-8 flex flex-col justify-center card-shadow">
            {formSubmitted ? (
              <div id="contact-success-panel" className="text-center py-8 px-4 space-y-4 animate-fade-in">
                <span className="inline-flex p-4 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-400 rounded-full border border-blue-100/50 dark:border-blue-900/30">
                  <CheckCircle className="w-10 h-10" />
                </span>
                <h3 className="font-display font-medium text-slate-900 dark:text-white text-lg sm:text-xl">
                  {labels.successTitle[lang]}
                </h3>
                <p className="text-slate-505 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                  {labels.successBody[lang]}
                </p>
                <div className="pt-4">
                  <button
                    id="reset-form-btn"
                    onClick={handleResetForm}
                    className="px-5 py-2.5 bg-blue-900 hover:bg-blue-955 dark:bg-blue-800 dark:hover:bg-blue-750 text-white text-xs font-semibold rounded-xl tracking-tight transition-all cursor-pointer"
                  >
                    {lang === 'es' ? 'Volver a formular' : 'Send another inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-portal-form" onSubmit={handleFormSubmit} className="space-y-4 text-justify">
                
                {/* Dual Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                      {labels.name[lang]} *
                    </label>
                    <input
                      id="form-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Gabriel García"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-blue-900 outline-none text-slate-800 dark:text-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                      {labels.institution[lang]}
                    </label>
                    <input
                      id="form-institution-input"
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Uninorte"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-blue-900 outline-none text-slate-800 dark:text-white transition-all"
                    />
                  </div>
                </div>

                {/* Email address */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    {labels.email[lang]} *
                  </label>
                  <input
                    id="form-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. gabriel@uninorte.edu.co"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-blue-900 outline-none text-slate-800 dark:text-white transition-all"
                  />
                </div>

                {/* Dropdown Options selector */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    {labels.interest[lang]}
                  </label>
                  <select
                    id="form-interest-select"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-blue-900 outline-none text-slate-880 dark:text-white cursor-pointer transition-all"
                  >
                    <option value="curso">{lang === 'es' ? 'Curso / Seminarios de Formación' : 'Course & Training Modules'}</option>
                    <option value="protocolo">{lang === 'es' ? 'Protocolos técnicos de laboratorio' : 'Wet-lab / Field Protocols'}</option>
                    <option value="colaboracion">{lang === 'es' ? 'Colaboración Científica' : 'Cooperative Joint Program'}</option>
                    <option value="estudiantil">{lang === 'es' ? 'Proyecto estudiantil / Pasantía' : 'Undergraduate Thesis / Internship'}</option>
                    <option value="ciudadana">{lang === 'es' ? 'Ciencia Ciudadana / Colegios' : 'Citizen Science & Schools Outreach'}</option>
                    <option value="divulgacion">{lang === 'es' ? 'Medios de Comunicación / Divulgación' : 'Media Inquiries / Science outreach'}</option>
                  </select>
                </div>

                {/* Message area */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    {labels.msg[lang]}
                  </label>
                  <textarea
                    id="form-message-input"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'es' ? 'Escribe aquí tu consulta...' : 'Detail your inquiry...'}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-1 focus:ring-blue-900 outline-none text-slate-800 dark:text-white resize-none transition-all"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 text-xs bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/40 rounded-xl leading-relaxed">
                    {errorMessage}
                  </div>
                )}

                {/* Submission button */}
                <div className="pt-2 flex justify-end">
                  <button
                    id="form-submit-trigger"
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 font-semibold text-xs sm:text-sm tracking-tight rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer ${
                      isSubmitting
                        ? 'bg-blue-900/50 dark:bg-blue-800/50 text-white/70 cursor-not-allowed'
                        : 'bg-blue-900 hover:bg-blue-955 hover:shadow text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-1 h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{lang === 'es' ? 'Enviando...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{labels.btn[lang]}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
