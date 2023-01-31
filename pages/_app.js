import "../styles/app.scss";
import { appWithTranslation } from "next-i18next";
import { usePageLoading } from "../src/utils/usePageLoading";

function MyApp({ Component, pageProps }) {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading ? (
        <div className="loading-wrapper">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <p>Пожалуйста подождите, страница загружается...</p>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default appWithTranslation(MyApp);
