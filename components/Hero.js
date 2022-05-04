import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { hero } from "./data.js";

const Hero = () => {
  return (
    <section className="pt-[10vh] relative shadow">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper bg-green-100"
      >
        {hero.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="hero-container w-[90%] m-auto">
                <div className="text-container my-6 space-y-2">
                  <p className=" text-green-900 capitalize font-medium ">
                    {data.subtitle}
                  </p>
                  <p className=" text-slate-900 text-4xl font-black leading-none ">
                    {data.title}
                  </p>
                  <p className=" text-black/70 font-medium w-[90%] ">
                    {data.paragraph}
                  </p>
                  <div className="pt-2">
                    <Link href="/menu">
                      <a className="bg-green-800 text-white text-sm font-medium uppercase py-3 px-4 rounded shadow-md hover:shadow-lg transition-all hover:bg-green-900 cursor-pointer">
                        {data.link}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="img-container">
                  <img src={data.image} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
