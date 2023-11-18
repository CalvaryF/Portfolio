export type Project = {
  id: number;
  title: string;
  subtitle: string;
  overview: string;
  client: string;
  role: string;
  tools: string;
  product: string;
  headerImage: string;
  date: string;
  homeImage: string;
  route: string;
  likeImage: string;
  blocks: { type: string; label: string; text: string; path: string[] }[];
};
