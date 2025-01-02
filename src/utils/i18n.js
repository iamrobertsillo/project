// Dynamic import of all language files
const languages = Object.fromEntries(
  Object.entries(import.meta.glob('../content/i18n/*.json', { eager: true }))
    .map(([path, content]) => [path.split('/').pop()?.replace('.json', ''), content])
);

export function getAvailableLanguages() {
  return Object.keys(languages);
}

export function getLanguageFromURL(pathname) {
  const [, lang] = pathname.split('/');
  return getAvailableLanguages().includes(lang) ? lang : 'it';
}

export function useTranslations(lang) {
  const translations = languages[lang] || languages['it'];
  return (key) => {
    return key.split('.').reduce((obj, key) => obj?.[key], translations) || key;
  };
}

export function getLangFromFilename(filename) {
  return filename.split('.')[0];
}