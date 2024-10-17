import LogoBranca from '@/assets/logo-branca.png'
import LogoVivoEmpresas from '@/assets/LogoVivo.svg'

export default function Footer ({ id }: { id: string }){

  return(
    <>
    <footer id={id} className="bg-purple-950 font-inter md:px-32 flex-row flex justify-between items-center w-full py-10 px-10 min-h-44">
      <div className='sm:flex-row flex-col flex gap-10 justify-center items-center flex-wrap md:justify-between w-full' >
        <div className='flex-col gap flex justify-center items-center'>
          <img className='w-48' src={LogoBranca} alt="Logo da SmartLagos branca" />
          <div className='flex flex-row justify-center items-center space-x-1'>
            <p className='text-white' >Parceiro autorizado</p>
            <img className='w-12' src={LogoVivoEmpresas} alt="Logo da Vivo para empresas autorizadas" />
          </div>
        </div>
        <div className='flex flex-col gap-2 text-white items-center' >
          <h2 className='text-xl' >
            Central de vendas
          </h2>
          <a href=''>xxxxxxxxxx</a>
        </div>
        <div className='flex flex-col gap-2 text-white items-center' >
          <h2 className='text-xl' >
            Contatos
          </h2>
          <a href=''>xxxx-xxxx</a>
          <a href=''>xxxx-xxxx</a>
          <a href=''>xxxx-xxxx</a>
        </div>
        </div>
    </footer>    
    </>
  )
}