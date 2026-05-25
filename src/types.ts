/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'es' | 'en';

export interface BaseTranslation {
  // Navigation
  navStart: string;
  navCourse: string;
  navProtocols: string;
  navProjects: string;
  navLiterature: string;
  navNetwork: string;
  navContact: string;

  // General buttons
  guideBtn: string;
  closeBtn: string;
  nextBtn: string;
  prevBtn: string;
  submitBtn: string;
  downloadBtn: string;
  viewProtocolBtn: string;
  downloadTemplateBtn: string;
  learnMoreBtn: string;
  collaborateBtn: string;
  badgeLabel: string;

  // Hero & Splash Page Text
  heroTitle: string;
  heroFrase: string;
  heroSub: string;
  exploreCourse: string;
  viewProtocols: string;
  knowProjects: string;

  // About cards text
  aboutCardsTitle1: string;
  aboutCardsText1: string;
  aboutCardsTitle2: string;
  aboutCardsText2: string;
  aboutCardsTitle3: string;
  aboutCardsText3: string;

  // Simple what we do sections
  whatWeDoTitle: string;
  whatWeDoText: string;
  whyItMattersTitle: string;
  whyItMattersText: string;

  // Live indicators / Non-obtrusive info
   uninorteTitle: string;
}

export interface CourseDay {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  activities: Record<Language, string[]>;
}

export interface CourseResource {
  id: string;
  name: Record<Language, string>;
  type: string;
  size: string;
  link: string;
}

export interface ProtocolCategory {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  steps: Record<Language, string[]>;
  buttonText: Record<Language, string>;
  status: 'available' | 'link' | 'soon';
}

export interface ProjectData {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  scope: Record<Language, string[]>;
  markers?: string[];
  metrics?: Record<Language, string>;
}

export interface LitItem {
  id: string;
  title: string;
  authors: string;
  year: number;
  whyRead: Record<Language, string>;
  link: string;
}

export interface LitCategory {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: LitItem[];
}

export interface NetworkGroup {
  id: string;
  title: Record<Language, string>;
  description?: Record<Language, string>;
  members: Record<Language, string[]>;
  ctaText?: Record<Language, string>;
}
