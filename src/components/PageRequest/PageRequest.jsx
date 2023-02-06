import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { YupValidation } from "../Request/YupValidation";

//database
import NamePhone from "../Request/NamePHone.json";
import { useRouter } from "next/router";
import Citys from "../Request/City.json";

//translation
import { useTranslation } from "next-i18next";

//icon
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { sendTelegram } from "../Request/SendTelegram";

function PageRequest({ locale }) {
  let [close, setClose] = useState(true);
  let [check, setCheck] = useState("");
  let [success, setSuccess] = useState(false);

  const { t } = useTranslation("request");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupValidation),
  });

  const onSubmit = (data) => {
    sendTelegram(data, setSuccess);
    reset();

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="sign-up">
        <h2>
          {locale === "ru"
            ? "Оставьте заявку на консультацию"
            : "Флеболог кўригига ёзилинг"}
        </h2>
        {NamePhone[locale].map((post, key) => {
          return (
            <div key={key + 3644} className="sign-up__field field">
              <label>{t(post.name)}</label>
              <input
                type="text"
                maxLength={post.maxLength}
                placeholder={post.placeholder}
                name={post.type}
                id={post.type}
                {...register(post.type)}
                className={`sign-up__input ${
                  eval(post.error) ? "sign-up__input-error" : ""
                }`}
              />
              {eval(post.error) && (
                <p className="sign-up__error">{t(eval(post.error))}</p>
              )}
            </div>
          );
        })}

        {Citys[locale].map((post, key) => {
          return (
            <label
              key={key + 2132}
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
                  <MdOutlineCheckBox className="sign-up__radio-icon" />
                ) : (
                  <MdCheckBoxOutlineBlank
                    className={`sign-up__radio-icon ${
                      errors.city?.message ? "sign-up__radio-error" : ""
                    }`}
                  />
                )}
                {t(post.city)}
              </span>
            </label>
          );
        })}
        {errors.city?.message && (
          <p className="sign-up__error">{t(errors.city?.message)}</p>
        )}

        {success && (
          <>
            <p className="request__success">{t("The message has...")}</p>
            <p className="request__desc">{t("Thank you for...")}</p>
          </>
        )}

        <input type="submit" value={locale === "ru" ? "Отправить" : "Юбориш"} />
      </form>
    </div>
  );
}

export default PageRequest;
