import Image from "next/image";
import phoneCall from "../../assets/images/phone-call.png";
import AppContext from "../../context/AppContext";
import ReadMore from "../Common/ReadMore";
import { useContext } from "react";
import { useTranslation } from "next-i18next";

export const Main = () => {
  const { db } = useContext(AppContext);
  const { t: translate } = useTranslation("about");

  return (
    <div className="main">
      <h2 className="main__title">
        {translate("title.original", { returnObjects: true })}{" "}
        <span className="accent">{translate("title.accent")}</span>
      </h2>

      {translate("paragraphs", { returnObjects: true }).map(
        (paragraph, index) => (
          <p className="main__paragraph" key={index}>
            {paragraph}
          </p>
        )
      )}

      <ReadMore className="main__link" href={"/about-us"}>
        {translate("read-more")}
      </ReadMore>

      <ul className="main-contacts">
        {db.branches.map(({ city, phone }, index) => (
          <li key={index} className="main-contacts__item">
            {city}
            <div className="main-contacts__phone">
              <Image width={20} quality={100} src={phoneCall} alt="call" />
              <a href={`tel:${phone.href}`}>{phone.render}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
