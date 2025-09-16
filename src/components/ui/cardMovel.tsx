import VivoPricesMovel from '@/lib/vivopricesmovel'

import {Smartphone} from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import skeelo from '@/assets/skeelo.svg'
import ubook from '@/assets/ubook-logo.svg'


const teste = VivoPricesMovel.map((price)=> {
  return {
    plano: price.Plano,
    gigas: price.Gigas,
    preco: price.Preco
  }
})

export function CardNavMovel() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
          '640': {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          '1520': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '1920': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1)=>(
          <SwiperSlide className='cursor-grab active:cursor-grabbing w-fit h-fit mt-10 flex flex-row justify-center mb-10 items-center'
          key={teste1.gigas}>
            <div className='flex flex-col h-72 justify-between items-center gap-6 rounded-xl tracking-wider w-full p-5 px-6 py-3 bg-branco shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]'>
              <div className='flex items-center gap-3 w-full flex-col'>
                  <p className='text-xs'>
                    {teste1.plano}
                  </p>
                  <p className='text-3xl flex items-center gap-1 font-bold text-roxo'>
                    <Smartphone/> {teste1.gigas} GB
                  </p>
              </div>
              <div className='flex flex-row gap-3 justify-between items-end'>
                              <div><img src={skeelo} alt="logo da skeelo" /></div>
                              <p className='text-4xl font-black text-roxo'>+</p>
                              <div>
                                <div>
                                  <img className='w-20 bg-black px-3 py-2 rounded-xl' src={ubook} alt="logo da ubook" />
                                </div>
                              </div>
              </div>
              <p className='text-lg flex justify-center w-full py-1 px-6 rounded-full bg-branco font-normal text-rosa shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]'>R$ {teste1.preco}/Mês</p>
              <a target='_blank' href={`https://wa.me/5522999682404?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20SmartLagos%20e%20me%20interessei%20pelo%20${teste1.plano}%20de%20${teste1.gigas}%20gigas!`} className='focus:bg-rosa hover:bg-rosa transition-all bg-roxo w-full flex justify-center items-center rounded-full active:bg-roxo'>
                <p className='text-white text-md p-1' >Assine já!</p>
              </a>
            </div>
              
          </SwiperSlide>
        ))}
        
      </Swiper>
  )
} 

export default function CardMovel({ id }: { id: string }) {
  return (
  <>
      <div id={id} className='h-fit w-full flex gap-5 flex-row font-light' >
      <CardNavMovel/> 
      </div>
  </>
)

}