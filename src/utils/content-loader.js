// Dynamic import of all content files
const contentFiles = import.meta.glob('../content/**/*.json', { eager: true });

export function getContentByType(type, lang) {
  const contents = [];
  
  for (const [path, content] of Object.entries(contentFiles)) {
    if (path.includes(`/${type}s/${lang}/`)) {
      contents.push(content);
    }
  }
  
  return contents;
}

export function getContentBySlug(type, slug, lang) {
  const path = `../content/${type}s/${lang}/${slug}.json`;
  return contentFiles[path];
}

export function getAllContentTypes() {
  const types = new Set();
  
  for (const [path] of Object.entries(contentFiles)) {
    const match = path.match(/\/content\/(.+?)\/[a-z]{2}\//);
    if (match && match[1]) {
      // Remove trailing 's' from folder name (products -> product)
      types.add(match[1].slice(0, -1));
    }
  }
  
  return Array.from(types);
}

export function getAllRoutes() {
  const routes = new Set();
  
  for (const [path] of Object.entries(contentFiles)) {
    const match = path.match(/\/content\/(.+?)\/[a-z]{2}\/(.+?)\.json$/);
    if (match) {
      const [, type, slug] = match;
      routes.add(slug);
    }
  }
  
  return Array.from(routes);
}