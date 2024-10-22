import Beneficios from "@/lib/beneficios"
import logoRoxa from '@/assets/logo-roxa.png'

const list = Beneficios.map((title)=> {
  return {
    title : title.titulo,
    desc : title.descricao,
    icon : title.icon
  }
})

export default function Benefits ({id}: {id: string}){
  return(
    <>
    <section id={id} className="bg-gray-100 flex flex-col px-12 lg:px-32 py-12 w-full gap-10 justify-center h-fit">
      <div>
        <h1 className="text-2xl">
          Beneficios de ser um cliente vivo
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 justify-between w-full h-fit">
        <div className="flex w-full justify-center sm:justify-start flex-row flex-wrap gap-3 h-fit">
          {list.map((bl)=>(
            <div key={bl.title} className="rounded-lg justify-between hover:scale-105 transition-all flex flex-col border p-2 border-fuchsia-600 h-36 w-36">
              <div>
                <div className="text-fuchsia-700" >{bl.icon}</div>
                <h1 className="text-fuchsia-700">{bl.title}</h1>
              </div>
              <p className="text-xs text-gray-500">{bl.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full hidden sm:flex items-center justify-center">
          <div className="lg:h-full h-56 flex items-start p-5 w-full rounded-xl bg-gray-300 bg-no-repeat bg-cover bg-[url('/homem-celular.png')] bg-center" >
           <img className="h-4" src={logoRoxa} alt="" />
          </div> 
        </div>
      </div>
    </section>
    </>
  )
}