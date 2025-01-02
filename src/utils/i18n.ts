import { readdirSync } from 'fs';
import { join } from 'path';

// Dynamic import of all language files
const languages = Object.fromEntries(
  Object.entries(import.meta.glob('../content/i18n/*.json', { eager: true }))
    .map(([path, content]) => [path.split('/').pop()?.replace('.json', ''), content])
);

export type Language = keyof typeof languages;

export function getAvailableLanguages(): Language[] {
  return Object.keys(languages) as Language[];
}

export function getLanguageFromURL(pathname: string) {
  const [, lang] = pathname.split('/');
  return getAvailableLanguages().includes(lang as Language) ? lang as Language : 'it';
}

export function useTranslations(lang: Language) {
  const translations = languages[lang] || languages['it'];
  return (key: string) => {
    return key.split('.').reduce((obj, key) => obj?.[key], translations) || key;
  };
}

export function getLangFromFilename(filename: string): Language {
  return filename.split('.')[0] as Language;
}