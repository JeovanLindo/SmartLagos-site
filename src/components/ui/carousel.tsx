'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={false}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
        type: 'progressbar'
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="min-h-[24rem] flex w-full lg:min-h-[32rem]"
    >
      <SwiperSlide className="relative min-h-[24rem] lg:min-h-[32rem]">
        <div className="min-h-[24rem] bg-no-repeat bg-cover bg-[url('/carousel/Mulher-1.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[24rem] lg:min-h-[32rem]">
        <div className="min-h-[24rem] bg-no-repeat bg-cover bg-[url('/carousel/Mulher-2.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>
      
      <SwiperSlide className="relative min-h-[24rem] lg:min-h-[32rem]">
        <div className="min-h-[24rem] bg-no-repeat bg-cover bg-[url('/carousel/Mulher-3.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[24rem] lg:min-h-[32rem]">
        <div  className="min-h-[24rem] bg-no-repeat bg-cover bg-[url('/carousel/Iphone16.jpg')] bg-center lg:min-h-[32rem]"></div>
      </SwiperSlide>
    </Swiper>
  )
}
