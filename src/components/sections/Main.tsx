import Carousel from "../ui/carousel";


export default function Main({ id }: { id: string }){
  return(
    <>
      <section id={id} className="h-fit relative">
        <div className="flex absolute z-40 bottom-14 left-14">
          <button className="bg-white px-4 rounded-sm py-2 border text-fuchsia-700 hover:bg-gray-300 transition-all">
            Veja nossas ofertas!
          </button>
        </div>
        <Carousel/>
      </section>
    </>
  )
}