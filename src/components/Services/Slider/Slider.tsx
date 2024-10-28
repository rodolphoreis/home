import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderDataImages } from "./Slider.data";
import Image from "next/image";
export function Slider() {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={15}
      freeMode={true}
      navigation
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        draggable: true,
      }}
      modules={[Navigation, Scrollbar]}
      className="h-[340px] md:h-[320px] w-[400px] md:[500px]"
      grabCursor
    >
      {sliderDataImages.map(({ id, urlImage }) => (
        <SwiperSlide key={id}>
          <Image
            src={`/assets/houses/${urlImage}`}
            alt="House"
            className="object-cover w-full h-[300px] rounded-2xl"
            width={300}
            height={700}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
