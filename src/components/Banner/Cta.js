import Image from "next/image";
import consultationIcon from "../../assets/images/consultation.png";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Request from "../Request/Request";

export const Cta = () => {
  const { t: translate } = useTranslation("banner");
  const [active, setActive] = useState(false);
  useEffect(() => {  
    active
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [active]);

  return (
    <>
      <div className="cta">
        <h1 className="cta__title">
          Phlebo<span className="accent">Life</span>
        </h1>
        <p className="cta__subtitle">{translate("subtitle")}</p>
        <p className="cta__description">{translate("description")}</p>

        <button onClick={() => setActive(true)} className="cta__btn">
          <Image
            alt="Консультация"
            width={23}
            src={consultationIcon}
            quality={100}
            priority
          />
          {translate("consultation")}
        </button>
      </div>
      {active ? <Request active={active} setActive={setActive} /> : ""}
    </>
  );
};
