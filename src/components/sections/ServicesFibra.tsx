import CardFibra from "../ui/cardFibra"

function ServicesFibra({ id }: { id: string }){

  return (
    <>
    <section id={id} className='flex-col flex font-inter justify-center items-start py-12 px-12 gap-10 md:px-32' >
      <div className="h-fit w-full flex flex-col gap-10">
        <div className="rounded-xl tracking-wider w-fit p-5 px-2 py-2 bg-branco shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
          <h1 className="text-4xl text-roxo font-bold rounded-xl tracking-wider w-fit h-fit p-5 px-6 py-3 bg-branco shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">VIVO FIBRA</h1>
        </div>
        <CardFibra id="card Fibra"/>
      </div>
    </section>
    </>
  )
}

export default ServicesFibra