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
      className=" min-h-[32rem] flex w-full lg:min-h-[32rem]"
    >
      <SwiperSlide className="relative min-h-[32rem] lg:min-h-[32rem]">
        <div className=" min-h-[32rem] bg-no-repeat bg-cover bg-[url('/carousel/banner-mulher.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[32rem] lg:min-h-[32rem]">
        <div className=" min-h-[32rem] bg-no-repeat bg-cover bg-[url('/carousel/banner-iphone17.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[32rem] lg:min-h-[32rem]">
        <div className=" min-h-[32rem] bg-no-repeat bg-cover bg-[url('/carousel/banner-instagram.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[32rem] lg:min-h-[32rem]">
        <div className=" min-h-[32rem] bg-no-repeat bg-cover bg-[url('/carousel/banner-olhando.jpg')] bg-bottom lg:min-h-[32rem]"></div>
      </SwiperSlide>
    </Swiper>
  )
}
