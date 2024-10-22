import VivoPricesMovel from '@/lib/vivopricesmovel'

import {Smartphone} from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

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
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          '@0.60': {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1)=>(
          <SwiperSlide className='cursor-grab active:cursor-grabbing w-fit h-fit flex flex-row justify-center mb-10 items-center'
          key={teste1.gigas}>
            <div className='flex flex-col h-72 justify-between items-center border border-black gap-6 rounded-md w-full p-5'>
              <div className='flex gap-3 w-full flex-col'>
                  <p className='text-xs'>
                    {teste1.plano}
                  </p>
                  <p className='text-3xl flex items-center gap-1'>
                    <Smartphone/> {teste1.gigas} GB
                  </p>
              </div>
              <p className='text-lg justify-center w-full border-y border-black py-1'>R$ {teste1.preco}/Mês</p>
              <a target='_blank' href={`https://wa.me/5522997242334?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20SmartLagos%20e%20me%20interessei%20pela%20${teste1.plano}%20de%20${teste1.gigas}%20gigas!`} className='focus:bg-fuchsia-600 hover:bg-fuchsia-600 transition-all bg-fuchsia-700 w-full rounded flex items-center justify-center active:bg-fuchsia-900' >
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