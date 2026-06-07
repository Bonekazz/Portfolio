import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { data } from "@/lib/database/work-data";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const work = data.find(x => x.slug === slug);

  if (!work || !slug) {
    notFound();
  }

  let Content;

  try {
    const { default: file } = await import(`@/lib/database/work-content/${work.slug}.mdx`);
    if (!file) return notFound();
    Content = file;
  } catch (error) {
    return notFound();
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full md:container md:max-w-3xl md:py-16 flex flex-col gap-8 pt-12 px-4 md:px-0">
        <div>
          <Link
            href="/"
            className="text-[14px] text-[#737373] hover:text-purple-700 transition-colors"
          >
            ← Voltar para trabalhos
          </Link>
        </div>

        <header className="flex flex-col gap-3">
          <h1 className="text-[32px] font-semibold text-[#000000]">
            {work.heading}
          </h1>
          <div className="text-[#737373] flex flex-col gap-5">
            <p>{work.subHeading}</p>
            {work.tags.length > 0 && (
              <section className="flex flex-wrap gap-3">
                {work.tags.map((tag: any) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-100 text-[14px] text-[rgba(0,0,0,0.5)]"
                  >
                    {tag}
                  </span>
                ))}
              </section>
            )}
          </div>
        </header>

        <Separator />

        <section className="prose max-w-none w-full flex flex-col gap-2">
          { work.thumbUrl && (
            <div className="w-full h-80 border rounded-xl overflow-hidden">
              <div
                className={cn(
                  "w-full h-full transition-all ease-in-out duration-300 group-hover:scale-[1.1] bg-cover",
                  work.thumbConfig && work.thumbConfig.twClasses && work.thumbConfig.twClasses
                )}
                style={{
                  backgroundImage: work.thumbUrl
                    ? `url(${work.thumbUrl})`
                    : "linear-gradient(to bottom right, #e5e7eb, #d1d5db)",
                }}
              />
            </div>
          )}
          { work.demoUrl && (
            <a href={work.demoUrl} target="_blank">
              <Button variant="link" className="text-muted-foreground opacity-80 cursor-pointer">acesse aqui <ExternalLink /></Button>
            </a>
          )}
          <div className="w-full">
            <Content />
          </div>
          {/* {work.thumbUrl ? (
            <div className="w-full md:h-[400px] h-[250px] rounded-xl overflow-hidden border">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${work.thumbUrl})` }}
              />
            </div>
          ) : (
            <div className="w-full md:h-[400px] h-[250px] rounded-xl bg-slate-100 border flex items-center justify-center text-[#737373]">
              <span>Sem thumbnail cadastrada no Notion</span>
            </div>
          )} */}
        </section>


      </div>
    </div>
  );
}
