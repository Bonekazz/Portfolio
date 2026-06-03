export interface IWork {
  id: string,
  slug: string;
  heading: string,
  subHeading?: string,
  thumbUrl?: string,
  content?: any,
  tags: any[],
  fromDate?: any
};

export const data: IWork[] = [
  {
    id: "da", 
    slug: "avalieeme",
    heading: "Avaliee.me",
    subHeading: "Aplicativo Web para coleta de feedback de clientes.",
    thumbUrl: "/avalieeme-logo.png", // url
    tags: ["aplicativo", "web"],
    fromDate: "2026",
  },

  {
    id: "dada",
    slug: "votz",
    heading: "Votz",
    subHeading: "Aplicativo, focado para celulares, para organização e montagem de times de vôlei.",
    tags: ["aplicativo", "web", "pwa"],
    fromDate: "2025",
  }
]