

export async function getDynamicRoutes() {
  const dataDir = './src/content/data/';
  const files = fs.readdirSync(dataDir);

  const routes = files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const [prodotto, lang] = file.replace('.json', '').split('_');
      return {
        route: `/${lang.toLowerCase()}/prodotto/${prodotto.toLowerCase()}`,
        filePath: path.join(dataDir, file),
      };
    });

  return routes;
}