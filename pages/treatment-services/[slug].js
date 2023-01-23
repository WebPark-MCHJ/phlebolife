import { getData } from "../../src/utils/fetchers";
import Layout from "../../src/components/Common/Layout";
import AppContext from "../../src/context/AppContext";
import db from "../../src/database/db.json";
import RichContent from "../../src/components/RichContent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const TreatmentServicesPage = ({ data, locale, slugs }) => {
	const [currentPath, setCurrentPath] = useState();
	const { asPath } = useRouter();

	useEffect(() => {
		setTimeout(() => {
			setCurrentPath(asPath);
		}, 500);
	}, [asPath]);

	return (
		<AppContext.Provider value={{ db: db[locale], locale }}>
			<Layout
				className={`page ${currentPath !== asPath ? "fadeIn" : ""}`}
			>
				<RichContent>{data.body}</RichContent>

				<aside>
					<form className="sign-up">
						<h2>
							{locale === "ru"
								? "Оставьте заявку на консультацию"
								: "Флеболог кўригига ёзилинг"}
						</h2>

						<div className="sign-up__field field">
							<label>Ваше имя</label>
							<input type="email" />
						</div>

						<div className="sign-up__field field">
							<label>Номер телефона</label>
							<input type="text" />
						</div>

						<input
							type="submit"
							value={locale === "ru" ? "Отправить" : "Юбориш"}
						/>
					</form>

					<div className="links">
						<h2>
							{locale === "ru"
								? "Другие услуги"
								: "Бошқа хизматларимиз"}
						</h2>

						<ul>
							{slugs.data.map((item) => {
								if (
									item.attributes.slug === data.slug ||
									!item.attributes.body
								)
									return;

								return (
									<li
										key={`${item.id}-${item.attributes.slug}`}
									>
										<Link
											href={`/treatment-services/${item.attributes.slug}`}
										>
											{item.attributes.heading.substring(
												0,
												30
											)}
											...
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</aside>
			</Layout>
		</AppContext.Provider>
	);
};

export default TreatmentServicesPage;

export const getServerSideProps = async ({ locale, params }) => {
	const { data } = await getData({
		url: "https://webpark.uz",
		endpoint: `/api/treatment-services?filters[slug]=${params.slug}&locale=${locale}`,
	});

	const slugs = await getData({
		url: "https://webpark.uz",
		endpoint: `/api/treatment-services?locale=${locale}`,
	});

	if (!data.length || !data[0].attributes.body) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data[0].attributes,
			slugs,
			locale,
			db,
		},
	};
};
