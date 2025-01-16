import LogoBranca from '@/assets/logo-branca.png'
import LogoVivoEmpresas from '@/assets/LogoVivo.svg'
import { FaWhatsapp,FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer ({ id }: { id: string }){

  return(
    <>
    <footer id={id} className="bg-purple-950 font-inter md:px-32 flex-col flex justify-between items-center w-full py-10 px-10 h-fit min-h-44">
      <div className='lg:flex-row flex-col flex gap-12 items-center justify-between w-full' >
  
        <div className='flex flex-col justify-between lg:flex-row gap-8 w-full'>

        <div className='flex-col gap-4 flex justify-center items-center'>
            <div>
              <img className='w-48' src={LogoBranca} alt="Logo da SmartLagos branca" />
              <div className='flex flex-row justify-center items-center space-x-1'>
                <p className='text-white' >Parceiro autorizado</p>
                <img className='w-12' src={LogoVivoEmpresas} alt="Logo da Vivo para empresas autorizadas" />
              </div>
            </div>
            <div>
              <ul className='flex flex-row gap-3 items-start justify-center'>
                <li className='w-5 hover:w-6 transition-all'>
                  <a className='hover:opacity-70 opacity-100 transition-all text-white w-full h-full' target='_blank' href="https://www.instagram.com/smartlagos/">
                    <FaInstagram className='w-full h-full'/>
                  </a>
                </li>
                <li className='w-5 hover:w-6 transition-all'>
                  <a className='hover:opacity-70 opacity-100 transition-all text-white w-full h-full' target='_blank' href="https://api.whatsapp.com/send/?phone=5522999682404&text=Ol%C3%A1%2C+estou+interessado+em+conhecer+mais+sobre+os+servi%C3%A7os+da+SmartLagos.+Gostaria+de+saber+mais+sobre+os+planos+dispon%C3%ADveis+e+como+posso+me+tornar+um+cliente.+Agrade%C3%A7o+desde+j%C3%A1+pela+aten%C3%A7%C3%A3o%21&type=phone_number&app_absent=0">
                    <FaWhatsapp className='w-full h-full'/>
                  </a>
                </li>
                <li className='w-5 hover:w-6 transition-all'>
                  <a className='hover:opacity-70 opacity-100 transition-all text-white w-full h-full' target='_blank' href="https://www.linkedin.com/company/smart-lagos/">
                    <FaLinkedin className='w-full h-full'/>
                  </a>
                </li>
                <li className='w-5 hover:w-6 transition-all'>
                  <a className='hover:opacity-70 opacity-100 transition-all text-white w-full h-full' target='_blank' href="https://www.facebook.com/smartlagos">
                    <FaFacebook className='w-full h-full'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-6 text-white items-center' >
            <h2 className='text-xl font-medium' >
              Central de vendas
            </h2>
            <div className='flex flex-col items-center max-w-96 gap-1'>
              <ul className='text-center flex flex-col items-center'>
                <li><p className='opacity-90'>Cabo Frio-RJ</p></li>
                <li><a className='hover:opacity-100 opacity-60 transition-all' target='blank' href='https://www.google.com.br/maps/place/Av.+Ver.+Ant%C3%B4nio+Ferreira+dos+Santos,+1330+-+loja+06+-+Braga,+Cabo+Frio+-+RJ,+28908-290/@-22.8949285,-42.0379222,18.25z/data=!4m6!3m5!1s0x971b20edbd76e5:0x8b412f5dd320560d!8m2!3d-22.8949764!4d-42.0371505!16s%2Fg%2F11v0gmgksr?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D'>Avenida Vereador Antônio Ferreira dos Santos 1330 loja 06 Braga Cabo Frio. 28908200</a></li>
              </ul>
            </div>
            <div className='flex flex-col items-center max-w-96 gap-1'>
              <ul className='text-center flex flex-col items-center'>
                <li>
                  <p className='opacity-90'>Vila da Penha-RJ</p>
                </li>
                <li><a className='hover:opacity-100 opacity-60 transition-all' target='blank' href='https://www.google.com.br/maps/search/Estrada+Padre+Roser,+n%C2%B042+-+Sala+1207+-+Edif%C3%ADcio+Punto+Offices+-+Vila+da+Penha+-+Rio+de+Janeiro+-RJ+CEP21220-560/@-22.8399001,-43.3144842,19z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D'>Estrada Padre Roser, n°42 - Sala 1207 - Edifício Punto Offices - Vila da Penha - Rio de Janeiro -RJ CEP21220-560</a></li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-6 text-white items-center' >
            <h2 className='text-xl font-medium' >
              Contatos
            </h2>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <p className='opacity-90'>Cabo Frio-RJ</p>
              <ul className='flex flex-col'>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all' href='https://wa.me/5522999682404?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20SmartLagos.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!'>(22) 99968-2404</a></li>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all' href='https://wa.me/552230315505?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20SmartLagos.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!'>(22) 3031-5505</a></li>
              </ul>
            </div>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <p className='opacity-90'>Vila da Penha-RJ</p>
              <ul className='flex flex-col'>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all' href='https://wa.me/552135251110?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20SmartLagos.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!'>(21) 3525-1110</a></li>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all' href='https://wa.me/5521996330831?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20SmartLagos.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!'>(21) 99633-0831</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>    
    <div className='w-full bg-purple-950 border-t-[1px] border-gray-400 text-white h-fit py-1 flex md:flex-row flex-col md:gap-3 gap-1 justify-center items-center'>
        <p className='opacity-60'>Made by <a className='hover:opacity-100 opacity-80 transition-all' target='_blank' href="https://www.instagram.com/agenciawrdigital/">WR Digital</a></p>
        <p className='opacity-60'>Developed by <a className='hover:opacity-100 opacity-80 transition-all' target='_blank' href="https://www.behance.net/jeovanjnior/projects">Jeovan Lindo</a></p>
    </div>
    </>
  )
}