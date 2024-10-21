import LogoBranca from '@/assets/logo-branca.png'
import LogoVivoEmpresas from '@/assets/LogoVivo.svg'

export default function Footer ({ id }: { id: string }){

  return(
    <>
    <footer id={id} className="bg-purple-950 font-inter md:px-32 flex-row flex justify-between items-center w-full py-10 px-10 h-fit min-h-44">
      <div className='lg:flex-row flex-col flex gap-12 items-center justify-between w-full' >
  
        <div className='flex flex-col justify-between lg:flex-row gap-8 w-full'>

        <div className='flex-col gap flex justify-center items-center'>
            <img className='w-48' src={LogoBranca} alt="Logo da SmartLagos branca" />
            <div className='flex flex-row justify-center items-center space-x-1'>
              <p className='text-white' >Parceiro autorizado</p>
              <img className='w-12' src={LogoVivoEmpresas} alt="Logo da Vivo para empresas autorizadas" />
            </div>
          </div>

          <div className='flex flex-col gap-6 text-white items-center' >
            <h2 className='text-xl font-medium' >
              Central de vendas
            </h2>
            <div className='flex flex-col items-center max-w-96 gap-1'>
              <p className='opacity-90'>Cabo Frio-RJ</p>
              <a className='hover:opacity-100 opacity-60 transition-all' target='blank' href='https://www.google.com.br/maps/place/Av.+Ver.+Ant%C3%B4nio+Ferreira+dos+Santos,+1330+-+loja+06+-+Braga,+Cabo+Frio+-+RJ,+28908-290/@-22.8949285,-42.0379222,18.25z/data=!4m6!3m5!1s0x971b20edbd76e5:0x8b412f5dd320560d!8m2!3d-22.8949764!4d-42.0371505!16s%2Fg%2F11v0gmgksr?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D'>Avenida Vereador Antônio Ferreira dos Santos 1330 loja 06 Braga Cabo Frio. 28908200</a>
            </div>
            <div className='flex flex-col items-center max-w-96 gap-1'>
              <p className='opacity-90'>Vila da Penha-RJ</p>
              <a className='hover:opacity-100 opacity-60 transition-all' target='blank' href='https://www.google.com.br/maps/search/Estrada+Padre+Roser,+n%C2%B042+-+Sala+1207+-+Edif%C3%ADcio+Punto+Offices+-+Vila+da+Penha+-+Rio+de+Janeiro+-RJ+CEP21220-560/@-22.8399001,-43.3144842,19z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D'>Estrada Padre Roser, n°42 - Sala 1207 - Edifício Punto Offices - Vila da Penha - Rio de Janeiro -RJ CEP21220-560</a>
            </div>
          </div>
          <div className='flex flex-col gap-6 text-white items-center' >
            <h2 className='text-xl font-medium' >
              Contatos
            </h2>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <p className='opacity-90'>Cabo Frio-RJ</p>
              <ul className='flex flex-col'>
                <li><a className='hover:opacity-100 opacity-60 transition-all' href=''>(22) 99968-2404</a></li>
                <li><a className='hover:opacity-100 opacity-60 transition-all' href=''>(22) 3031-5505</a></li>
              </ul>
            </div>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <p className='opacity-90'>Vila da Penha-RJ</p>
              <ul className='flex flex-col'>
                <li><a className='hover:opacity-100 opacity-60 transition-all' href=''>(21) 3525-1110</a></li>
                <li><a className='hover:opacity-100 opacity-60 transition-all' href=''>(21) 99633-0831</a></li>
                <li><a className='hover:opacity-100 opacity-60 transition-all' href=''>(21) 99633-0831</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>    
    </>
  )
}