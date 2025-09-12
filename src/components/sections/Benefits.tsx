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
    <section id={id} className="flex flex-col px-12 lg:px-32 py-12 w-full gap-10 justify-center h-fit">
      <div>
        <div className="rounded-xl tracking-wider w-fit p-5 px-2 py-2 bg-branco shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
          <h1 className="text-4xl text-roxo font-bold rounded-xl tracking-wider w-fit p-5 px-6 py-3 bg-branco shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">BENEFÍCIOS</h1>
        </div>
      </div>
      <div className="flex flex-col bg-branco lg:flex-row gap-3 justify-between w-full h-fit">
        <div className="flex w-full justify-center lg:justify-start flex-row flex-wrap gap-3 h-fit">
          {list.map((bl)=>(
            <div key={bl.title} className="rounded-lg justify-between hover:scale-105 transition-all flex flex-col border p-2 border-roxo hover:border-rosa h-36 w-36 text-roxo hover:text-rosa">
              <div>
                <div>{bl.icon}</div>
                <h1>{bl.title}</h1>
              </div>
              <p className="text-xs text-gray-600">{bl.desc}</p>
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