import type { Content, ContentType } from './content-types';
import type { Language } from './i18n';

// Dynamic import of all content files
const contentFiles = import.meta.glob('../content/**/*.json', { eager: true });

export function getContentByType(type: ContentType, lang: Language): Content[] {
  const contents: Content[] = [];
  
  for (const [path, content] of Object.entries(contentFiles)) {
    if (path.includes(`/${type}s/${lang}/`)) {
      contents.push(content as Content);
    }
  }
  
  return contents;
}

export function getContentBySlug(type: ContentType, slug: string, lang: Language): Content | undefined {
  const path = `../content/${type}s/${lang}/${slug}.json`;
  return contentFiles[path] as Content | undefined;
}

export function getAllRoutes(): string[] {
  const routes = new Set<string>();
  
  for (const [path] of Object.entries(contentFiles)) {
    const match = path.match(/\/content\/(.+?)\/[a-z]{2}\/(.+?)\.json$/);
    if (match) {
      const [, type, slug] = match;
      routes.add(slug);
    }
  }
  
  return Array.from(routes);
}