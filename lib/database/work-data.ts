export interface IWork {
  id: string,
  heading: string,
  subHeading?: string,
  thumbUrl?: string,
  content?: any,
  tags: any[],
  fromDate?: any
};

export const data = [
  {
    id: "da", 
    slug: "avalieeme",
    heading: "Avaliee.me",
    subHeading: "Aplicativo Web que auxiliou uma empresa de Impressão Gráfica a coletar feedback de clientes.",
    thumbUrl: "/avalieeme-logo.png", // url
    tags: [],
    fromDate: "2026",
  }
]