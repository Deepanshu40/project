import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const companies = [
  "/trusted/image1.png",
  "/trusted/image2.png",
  "/trusted/image3.png",
  "/trusted/image4.png",
  "/trusted/image5.png",
  "/trusted/image1.png",
  "/trusted/image2.png",
  "/trusted/image3.png",
  "/trusted/image4.png",
  "/trusted/image5.png",
];

const TrustedByClients = () => {
  return (
    <div className="flex flex-col gap-16 py-20">
      <h1 className="text-blue text-3xl font-semibold text-center">
        Trusted by Leading Companies
      </h1>
      <div className="flex">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
        breakpoints={{
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="flex justify-center items-center"
        >
          {companies.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img src={item} alt="client_company_logo" className="mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedByClients;
