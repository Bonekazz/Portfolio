import LinkedinIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { data, IWork } from "@/lib/database/work-data";
import { cn } from "@/lib/utils";

export default async function Page() {

  const works: IWork[] = data;
  
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="
        md:container md:h-full md:grid md:grid-cols-[43%_1fr] 
        flex flex-col h-fit
      ">

        { /** 1st COLUMN **/ }
        <div className={`
          md:pr-[6em] md:border-r-2 md:pb-[3em] 
          md:sticky md:top-0 md:self-start
          flex flex-col justify-between h-full border-[#EAEAEA] pt-12 gap-5 bg-white
        `}>

          <main className={`
            md:px-0
            flex flex-col gap-5 px-4
          `}>

            <div className={`
              md:flex-row md:gap-4
              flex flex-col gap-2
            `}>
              <div className="w-18.75 h-18.75 rounded-full bg-slate-600 bg-[url('/pfp.jpg')] bg-cover bg-center"></div>
              <div className="flex flex-col">
                <h1 className="text-[32px] font-semibold text-[#000000]">Hierro Fernandes</h1>
                <h2 className="text-[20px] -mt-2.5 text-[#000000]">Desenvolvedor de Software | Fullstack</h2>
              </div>
            </div>
            
            { /** LOCATION AND EMAIL **/ }
            <div className={`
              md:flex-row md:gap-5 md:items-start
              flex flex-col gap-2
            `}>
              <div className="flex items-center gap-1">
                <MapPin color="#737373" size={22}/>
                <p className="text-[#737373] text-[15px]">Natal, Rio Grande do Norte, Brasil</p>
              </div>
              <div className="flex items-center gap-1">
                <Mail color="#737373" size={22}/>
                <p className="text-[#737373] text-[15px]">hierrofernandes25@gmail.com</p>
              </div>
            </div>

            {/** DESCRIPTION **/}
            <div className="w-full mt-5">
              <p className="text-[25px] text-[#808080] whitespace-pre-line">{`Especialista em resolução de problemas e inovação, com foco em sistemas web distribuídos.`}</p>
            </div>

            { /** SOCIALS AND CONTACT **/ }
            <div className="flex gap-4">
              <a target="_blank" href="https://www.linkedin.com/in/hierro-fernandes-1b56311ab/" className="flex hover:scale-[1.1] transition-all ease-in-out">
                <LinkedinIcon className="text-muted-foreground"/>
              </a>
              <a target="_blank" href="https://github.com/Bonekazz" className="flex hover:scale-[1.1] transition-all ease-in-out">
                <GitHubIcon className="text-muted-foreground"/>
              </a>
            </div>

          </main>

          { /** GIF **/ }
          <div className={`
            md:h-75
            w-full h-50 rounded-xl bg-[url('/follow-the-white-rabbit.gif?L1ptRjZiMnc9LmpwZw==')] bg-cover bg-bottom
          `} >
          </div>

        </div>

        {/** 2nd COLUMN **/}
        <div className={`
          md:pl-12 md:px-0 md:pb-6 md:h-full md:overflow-y-auto
          flex flex-col gap-8 pt-12 px-4
        `}>
          <h1 className="text-[32px] text-[#000000]">Trabalhos</h1>
          <div className={`
            md:grid md:grid-cols-2 md:gap-3 md:gap-y-12
            flex flex-col gap-4
          `}>

          {works.map((work: IWork) => (
            <Link
              key={work.id}
              href={`/works/${work.slug}`}
              className="group transition-all ease-in-out duration-300 hover:cursor-pointer hover:border-purple-700 w-full flex flex-col gap-3 border-2 rounded-3xl px-3 pt-3 py-8"
            >
              <div className="w-full h-50 border rounded-xl overflow-hidden">
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
              {work.tags.length > 0 && (
                <div className="relative">
                  <div className="flex gap-3 flex-wrap overflow-hidden pr-8">
                    {work.tags.slice(0, 2).map((tag: any) => (
                      <p
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 w-fit text-[14px] text-[rgba(0,0,0,0.5)]"
                      >
                        {tag}
                      </p>
                    ))}
                    {work.tags.length > 2 && (
                      <p className="px-3 py-1 rounded-full bg-slate-100 w-fit text-[14px] text-[rgba(0,0,0,0.5)]">
                        +{work.tags.length - 2}
                      </p>
                    )}
                  </div>
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-linear-to-l from-white to-transparent" />
                </div>
              )}
              <h1 className="text-[20px] text-[#000000] px-2 group-hover:text-purple-700 transition-all ease-in-out duration-300">
                {work.heading}
              </h1>
              <p className="px-2 text-muted-foreground">{work.subHeading}</p>
            </Link>
          ))}
          </div>
        </div>

      </div> 
    </div>
  );
}
