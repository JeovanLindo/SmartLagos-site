import LogoRoxa from '@/assets/logo-roxa.png'
import VivoEmpresasLogo from '@/assets/VivoEmpresaslogo.webp'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustifyIcon } from "lucide-react"
 
export default function NavBar() {
  return (
  <header className="sticky top-0 z-50 overflow-hidden flex justify-between font-inter items-center h-16 w-full bg-gray-100 sm:px-32 px-4" >
    
    <a href={'/'} className=' flex space-x-2 flex-row w-fit h-fit'> 
        <img className='w-40' src={LogoRoxa} alt="Logo da SmartLagos roxa"/>
        <img className='w-12' src={VivoEmpresasLogo} alt="Logo da Vivo para empresas autorizadas" />
    </a>
    <div className='hidden md:flex flex-row gap-4' >
        <nav className='flex flex-row gap-4' >
          <a className='hover:cursor-pointer hover:text-fuchsia-900 transition-all' href="#servicesMovel">Móvel</a>
          <a className='hover:cursor-pointer hover:text-fuchsia-900 transition-all' href="#beneficios">Benefícios</a>
          <a className='hover:cursor-pointer hover:text-fuchsia-900 transition-all' href="#servicesFibra">Internet</a>
          <a className='hover:cursor-pointer hover:text-fuchsia-900 transition-all' href="#footer">Contatos</a>
        </nav>
        {/* <div>
          <p>Ofertas para</p>
        </div> */}
    </div>
    
    <Sheet modal={false}>
      <SheetTrigger className='md:hidden'>
        <Button className="bg-transparent shadow-none text-fuchsia-800 md:hidden">
          <AlignJustifyIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent className='h-fit flex flex-col gap-5'>
        <div className='flex space-x-2 flex-col self-center w-fit h-fit'> 
          <img className='w-40' src={LogoRoxa} alt="Logo da SmartLagos roxa"/>
        </div>
        <SheetHeader className='flex flex-col gap-7'>
          <div>
            <SheetTitle className='text-xl hover:cursor-pointer hover:translate-x-1 hover:text-fuchsia-900 transition-all'><a href="#servicesMovel">Móvel</a></SheetTitle>
            <SheetDescription>
              Veja nossas ofertas de internet móvel!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl hover:cursor-pointer hover:translate-x-1 hover:text-fuchsia-900 transition-all'><a href="#beneficios">Benefícios</a></SheetTitle>
            <SheetDescription>
              Veja porque deve contratar nossos serviços!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl hover:cursor-pointer hover:translate-x-1 hover:text-fuchsia-900 transition-all'><a href="#servicesFibra">Internet</a></SheetTitle>
            <SheetDescription>
              Veja nossas ofertas de internet fibra!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl hover:cursor-pointer hover:translate-x-1 hover:text-fuchsia-900 transition-all'><a href="#footer">Contatos</a></SheetTitle>
            <SheetDescription>
              Precisa de ajuda ou quer nos encontrar!
            </SheetDescription>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </header> 
  )
} 