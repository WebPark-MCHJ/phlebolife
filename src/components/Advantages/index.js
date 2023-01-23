import Section from "../Common/Section";
import Advantage from "./Advantage";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import Image from "next/legacy/image";
import App from "next/app";
import { useTranslation } from "next-i18next";

const Advantages = () => {
  const { db } = useContext(AppContext);
  const { t: translate } = useTranslation("advantages");

  return (
    <Section className="advantages">
      <h2 className="advantages__title">
        {translate("title.original", { returnObjects: true })}{" "}
        <span className="accent">
          {translate("title.accent", { returnObjects: true })}
        </span>
      </h2>

      <div className="advantages__list">
        {db.advantages.map(({ name, icon }, index) => (
          <Advantage key={index} className="advantage" name={name}>
            <Image
              src={icon}
              width={75}
              height={75}
              objectFit="contain"
              quality={100}
              alt="transparent img"
            />
          </Advantage>
        ))}
      </div>
    </Section>
  );
};

export default Advantages;
