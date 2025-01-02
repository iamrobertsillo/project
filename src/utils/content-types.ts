export type ContentType = 'product' | 'solution' | 'page';

export interface BaseContent {
  slug: string;
  type: ContentType;
  title: string;
  description: string;
}

export interface ProductContent extends BaseContent {
  type: 'product';
  features: Array<{
    title: string;
    description: string;
  }>;
  specifications: Record<string, string>;
}

export interface SolutionContent extends BaseContent {
  type: 'solution';
  benefits: Array<{
    title: string;
    description: string;
  }>;
}

export interface PageContent extends BaseContent {
  type: 'page';
  content: string;
}

export type Content = ProductContent | SolutionContent | PageContent;