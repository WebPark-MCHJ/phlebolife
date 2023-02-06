import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

//Validation
import { yupResolver } from "@hookform/resolvers/yup";
import { sendTelegram } from "./SendTelegram";
import { YupValidation } from "./YupValidation";

//database
import NamePhone from "./NamePHone.json";
import Citys from "./City.json";

//tranlation
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

//icon
import { FiX } from "react-icons/fi";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

function Request({ setActive }) {
  let [close, setClose] = useState(true);
  let [check, setCheck] = useState("");
  let [success, setSuccess] = useState(false);
  const { locale } = useRouter();

  const { t } = useTranslation("request");

  const closeHandler = () => {
    setClose(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupValidation),
  });

  const onSubmit = (data) => {
    sendTelegram(data, setSuccess);

    setTimeout(() => {
      closeHandler();
    }, 5000);
  };

  return (
    <>
      <div className={`request__black ${close ? "" : "request__close"}`} />
      <section className={`request ${close ? "" : "request__close-big"}`}>
        <div className="container">
          <div className="request__bigbox">
            <div className="request__box">
              <div className="request__topbox">
                <h2 className="request__title">{t("request")}</h2>
                <button onClick={closeHandler} className="request__xbtn">
                  <FiX />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="request__form">
                <div className="request__ibox">
                  {NamePhone[locale].map((post, key) => {
                    return (
                      <label
                        key={key + 997}
                        className="request__label"
                        htmlFor={post.type}
                      >
                        <p test className="request__name">
                          {t(post.name)}
                        </p>
                        <input
                          type="text"
                          maxLength={post.maxLength}
                          placeholder={post.placeholder}
                          name={post.type}
                          id={post.type}
                          {...register(post.type)}
                          className={`request__input ${
                            eval(post.error) ? "request__input-error" : ""
                          }`}
                        />
                        {eval(post.error) && (
                          <p className="request__error">
                            {t(eval(post.error))}
                          </p>
                        )}
                      </label>
                    );
                  })}
                </div>
                <div className="request__ibox">
                  <p className="request__name">{t("city")}</p>

                  {Citys[locale].map((post, key) => {
                    return (
                      <label
                        key={key + 234}
                        className="request__rlabel"
                        htmlFor={post.city}
                        onClick={() => setCheck(post.city)}
                      >
                        <input
                          className="request__radio"
                          type="radio"
                          name={"city"}
                          id={post.city}
                          value={post.city}
                          {...register("city")}
                        />
                        <span htmlFor={post.city}>
                          {check === post.city ? (
                            <MdOutlineCheckBox className="request__radio-icon" />
                          ) : (
                            <MdCheckBoxOutlineBlank
                              className={`request__radio-icon ${
                                errors.city?.message
                                  ? "request__radio-error"
                                  : ""
                              }`}
                            />
                          )}
                          {t(post.city)}
                        </span>
                      </label>
                    );
                  })}
                  {errors.city?.message && (
                    <p className="request__error">{t(errors.city?.message)}</p>
                  )}
                </div>

                <button className="request__btn" type="submit">
                  {t("Send a request")}
                </button>

                {success ? (
                  <>
                    <p className="request__success">
                      {t("The message has...")}
                    </p>
                    <p className="request__desc">{t("Thank you for...")}</p>
                  </>
                ) : (
                  <p className="request__desc">
                    {t("By clicking this button")}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Request;
