export interface IWork {
  id: string,
  slug: string;
  heading: string,
  subHeading?: string,
  thumbUrl?: string,
  thumbConfig?: {
    twClasses?: string,
  },
  content?: any,
  tags: any[],
  fromDate?: any;

  demoUrl?: string;
};

export const data: IWork[] = [
  {
    id: "da", 
    slug: "avalieeme",
    heading: "Avaliee.me",
    subHeading: "Aplicativo Web para coleta de feedback de clientes.",
    thumbUrl: "/avalieeme-logo.jpg", // url
    // thumbConfig: { twClasses: "bg-center"},
    tags: ["aplicativo", "web"],
    fromDate: "2026",

    demoUrl: "https://avaliee.me/"
  },

  {
    id: "dada",
    slug: "votz",
    heading: "Votz",
    thumbUrl: "/works/votz.jpg", // url
    subHeading: "Aplicativo, focado para celulares, para organização e montagem de times de vôlei.",
    tags: ["aplicativo", "web", "pwa"],
    fromDate: "2025",

    demoUrl: "https://votz-sm.vercel.app/"
  }
]