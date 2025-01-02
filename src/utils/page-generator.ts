import type { Language } from './i18n';

export interface PageData {
  title: string;
  content: string;
}

export async function generatePage(lang: Language, pageName: string): Promise<PageData> {
  // This is where you'll implement the logic to generate page content
  // based on language and page name. For now, it returns a basic structure
  return {
    title: `${pageName} - ${lang.toUpperCase()}`,
    content: `Content for ${pageName} in ${lang}`
  };
}

export const routes = [
  'chi-siamo',
  'ricerca-e-sviluppo',
  'blog',
  'contatti',
  'installatori',
  'mangusta',
  'per-disabili',
  'certificazioni',
  'domande-frequenti'
] as const;

export type Route = typeof routes[number];