import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const works = [
  { 
    thumb: "votz.webp",
    title: "Votz - Balanced Volleyball Matchups Web App",
    description: "Description here Description here Description here.",
    tags: [ "Trabalho Voluntário", "PWA", "React"]
  },
  { 
    thumb: "finance-tracker.jpg",
    title: "Finance Tracker",
    description: "Description here Description here Description here.",
    tags: [ "Trabalho Voluntário", "Next.js", "FullStack"]
  },
  { 
    thumb: "digital-scoreboard.jpg",
    title: "Digital Scoreboard",
    description: "Description here Description here Description here.",
    tags: [ "Trabalho Voluntário", "PWA"]
  },

]

export default function Page() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <div className="
        md:container md:h-full md:grid md:grid-cols-[43%_1fr] 
        flex flex-col h-fit
      ">

        { /** 1st COLUMN **/ }
        <div className={`
          md:pr-[6em] md:border-r-2 md:pb-[3em] 
          flex flex-col justify-between h-full border-[#EAEAEA] pt-12 gap-5
        `}>

          <main className={`
            md:px-0
            flex flex-col gap-5 px-4
          `}>

            <div className={`
              md:flex-row md:gap-4
              flex flex-col gap-2
            `}>
              <div className="w-[75px] h-[75px] rounded-full bg-slate-600 bg-[url('/pfp.jpg')] bg-cover bg-center"></div>
              <div className="flex flex-col">
                <h1 className="text-[32px] font-semibold text-[#000000]">Hierro Fernandes</h1>
                <h2 className="text-[20px] mt-[-10px] text-[#000000]">Desenvolvedor de Software | Fullstack</h2>
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
                <p className="text-[#737373] text-[15px]">hierrofernandes23@gmail.com</p>
              </div>
            </div>

            {/** DESCRIPTION **/}
            <div className="w-full mt-5">
              <p className="text-[25px] text-[#808080] whitespace-pre-line">{`Especialista em resolução de problemas e inovação, com foco em sistemas web distribuídos.`}</p>
            </div>

            { /** SOCIALS AND CONTACT **/ }
            <div className="flex gap-4">
              <a target="_blank" href="https://www.linkedin.com/in/hierro-fernandes-1b56311ab/" className="flex border-2 border-black rounded-lg p-1 hover:scale-[1.1] transition-all ease-in-out">
                <Linkedin color="#000000" size={22}/>
              </a>
              <a target="_blank" href="https://github.com/Bonekazz" className="flex border-2 border-black rounded-lg p-1 hover:scale-[1.1] transition-all ease-in-out">
                <Github color="#000000" size={22} strokeWidth={2.5}/>
              </a>
            </div>

          </main>

          { /** GIF **/ }
          <div className={`
            md:h-[300px]
            w-full h-[200px] rounded-xl bg-[url('/follow-the-white-rabbit.gif?L1ptRjZiMnc9LmpwZw==')] bg-cover bg-bottom
          `} >
          </div>

        </div>

        {/** 2nd COLUMN **/}
        <div className={`
          md:pl-12 md:px-0 md:pb-0
          flex flex-col gap-8 pt-12 px-4
        `}>
          <h1 className="text-[32px] text-[#000000]">Trabalhos</h1>
          <div className={`
            md:grid md:grid-cols-2 md:gap-3 md:gap-y-12
            flex flex-col gap-4
          `}>

          {
            works.map((work, i) => (
              <div key={i} className="group transition-all ease-in-out duration-300 hover:cursor-pointer hover:border-purple-700 w-full flex flex-col gap-3 border-2 rounded-3xl px-3 pt-3 py-8">
                <div className="w-full h-[200px] border rounded-xl overflow-hidden">
                  <div 
                    className={`w-full h-full transition-all ease-in-out duration-300 group-hover:scale-[1.1] bg-cover relative`}
                    style={{ backgroundImage: `url(/works/${work.thumb})` }}
                  >
                    { /** <div className="absolute inset-0 bg-black bg-[rgba(0,0,0,0.1)] rounded-xl transition-opacity duration-300 group-hover:bg-opacity-60"></div> **/ }
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <p className="px-3 py-1 rounded-full bg-slate-100 w-fit text-[14px] text-[rgba(0,0,0,0.5)]">Trabalho Voluntário</p>
                  <p className="px-3 py-1 rounded-full bg-slate-100 w-fit text-[14px] text-[rgba(0,0,0,0.5)]">Typescript</p>
                </div>
                <h1 className="text-[20px] text-[#000000] px-2 group-hover:text-purple-700 transition-all ease-in-out duration-300">{work.title}</h1>
              </div>
            ))
          }
          </div>
        </div>

      </div> 
    </div>
  );
}
