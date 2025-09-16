import Carousel from "../ui/carousel";


export default function Main({ id }: { id: string }){
  return(
    <>
      <section id={id} className="h-fit relative">
        <div className="flex absolute z-40 bottom-14 left-14">
          <button className="bg-branco px-4 rounded-sm py-2 border text-roxo hover:bg-gray-300 transition-all">
            <a target="_blank" href='https://api.whatsapp.com/send/?phone=5522999682404&text=Ol%C3%A1%2C+estou+interessado+em+conhecer+mais+sobre+os+servi%C3%A7os+da+SmartLagos.+Gostaria+de+saber+mais+sobre+os+planos+dispon%C3%ADveis+e+como+posso+me+tornar+um+cliente.+Agrade%C3%A7o+desde+j%C3%A1+pela+aten%C3%A7%C3%A3o%21&type=phone_number&app_absent=0'>Seja nosso cliente!</a>
          </button>
        </div>
        <Carousel/>
      </section>
    </>
  )
}