import Section from "../Common/Section";
import Event from "./Event";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Pagination } from "swiper";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "next-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Master = ({ data }) => {
  const swiperRef = useRef(null);
  const { t: translate } = useTranslation("masters");

  return (
    <Section className="master">
      <h2 className="master__title">
        {translate("title.original", { returnObject: true })}{" "}
        <span className="accent">
          {translate("title.accent", { returnObject: true })}
        </span>
      </h2>

      <div className="master__list">
        <Swiper
          ref={swiperRef}
          pagination={{
            clickable: true,
          }}
          speed={500}
          modules={[Pagination]}
          className="carousel"
          loop={true}
        >
          {data.map((master) => {
            return (
              <SwiperSlide key={master.id}>
                <Event {...master} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="controllers">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="controllers__prev prev"
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="controllers__next next"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Master;
