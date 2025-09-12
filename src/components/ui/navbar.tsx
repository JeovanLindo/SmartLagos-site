import LogoRoxa from '@/assets/Logo Vertical Alt.svg'
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
 

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
    const offset = 50; // ajuste esse valor conforme necessário

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Posição do elemento
      const offsetPosition = sectionPosition - offset; // Subtrai o offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
};

export default function NavBar() {
  return (
  <header className="sticky top-0 z-50 overflow-hidden flex justify-between font-inter items-center h-16 w-full bg-branco sm:px-32 px-4 shadow-lg" >
    
    <a href={'/'} className=' flex space-x-2 flex-row w-fit h-fit'> 
        <img className='w-28' src={LogoRoxa} alt="Logo da SmartLagos roxa"/>
    </a>
    <div className='hidden md:flex flex-row gap-4' >
        <nav className='flex flex-row gap-4' >
          <button onClick={()=> scrollToSection('servicesMovel')} className='text-roxo hover:cursor-pointer hover:text-roxoClaro transition-all'>Móvel</button>
          <button onClick={()=> scrollToSection('beneficios')} className='text-roxo hover:cursor-pointer hover:text-roxoClaro transition-all'>Benefícios</button>
          <button onClick={()=> scrollToSection('servicesFibra')} className='text-roxo hover:cursor-pointer hover:text-roxoClaro transition-all'>Internet</button>
          <button onClick={()=> scrollToSection('footer')} className='text-roxo hover:cursor-pointer hover:text-roxoClaro transition-all'>Contatos</button>
        </nav>
    </div>
    
    <Sheet modal={false}>
      <SheetTrigger className='md:hidden'>
        <Button className="bg-transparent shadow-none text-roxo md:hidden">
          <AlignJustifyIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent className='h-fit flex flex-col gap-5'>
        <div className='flex space-x-2 flex-col self-center w-fit h-fit'> 
          <img className='w-40' src={LogoRoxa} alt="Logo da SmartLagos roxa"/>
        </div>
        <SheetHeader className='flex flex-col gap-7'>
          <div>
            <SheetTitle className='text-xl text-roxo hover:cursor-pointer hover:translate-x-1 hover:text-roxoClaro transition-all'><button onClick={()=> scrollToSection('servicesMovel')}>Móvel</button></SheetTitle>
            <SheetDescription>
              Veja nossas ofertas de internet móvel!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-roxo hover:cursor-pointer hover:translate-x-1 hover:text-roxoClaro transition-all'><button onClick={()=> scrollToSection('beneficios')}>Benefícios</button></SheetTitle>
            <SheetDescription>
              Veja porque deve contratar nossos serviços!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-roxo hover:cursor-pointer hover:translate-x-1 hover:text-roxoClaro transition-all'><button onClick={()=> scrollToSection('servicesFibra')}>Internet</button></SheetTitle>
            <SheetDescription>
              Veja nossas ofertas de internet fibra!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-roxo hover:cursor-pointer hover:translate-x-1 hover:text-roxoClaro transition-all'><button onClick={()=> scrollToSection('footer')}>Contatos</button></SheetTitle>
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