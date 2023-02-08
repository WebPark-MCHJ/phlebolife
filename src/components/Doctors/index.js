import Section from "../Common/Section";
import { useState } from "react";
import AppContext from "../../context/AppContext";
import { useContext, useRef } from "react";
import Doctor from "./Doctor";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useTranslation } from "next-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Doctors = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { db } = useContext(AppContext);
  const { t: translate } = useTranslation("doctors");

  return (
    <Section className="doctors">
      <h2 className="doctors__title">
        <span className="accent">
          {translate("title.accent", { returnObject: true })}
        </span>{" "}
        {translate("title.original", { returnObject: true })}
      </h2>

      <Swiper
        className="carousel"
        navigation={true}
        pagination={true}
        modules={[FreeMode, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={100}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((doctor, i) => (
          <SwiperSlide key={i}>
            <Doctor {...doctor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Doctors;
