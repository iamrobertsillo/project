export function generateProductSchema(product, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.image,
    "url": url
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Are Ascensori",
    "url": "https://www.areascensori.it",
    "logo": "/are-ascensori-logo.svg",
    "description": "Ascensori Elettrici ad Elevata Efficienza Energetica"
  };
}