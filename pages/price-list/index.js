import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { getData } from "../../src/utils/fetchers";
import { NumericFormat } from "react-number-format";

const PriceListPage = ({ data }) => {
	return (
		<section className="price-page page">
			<Link className="price-page__home" href="/">
				<BsArrowLeft />
			</Link>
			<div className="price-page__main">
				<h1>
					Прайс лист на <span className="accent">наши услуги</span>
				</h1>

				{data.map((item) => {
					return (
						<div className="price-page__row">
							<h2>{item.attributes.category}</h2>

							<ul className="price-page__list">
								{item.attributes.services.data.map(
									(service) => {
										return (
											<li className="price-page__item">
												<span className="service-name">
													{service.attributes.service}
												</span>
												<span className="price">
													<NumericFormat
														value={
															service.attributes
																.cost
														}
														thousandSeparator=" "
														displayType="text"
														renderText={(value) => (
															<span>{value}</span>
														)}
													/>{" "}
													сум
												</span>
											</li>
										);
									}
								)}
							</ul>
						</div>
					);
				})}

				<p className="extra">
					Лазерная облитерация лазером длиной волны 1470 нм и 1940 нм
					и инновационных световодов фирмы{" "}
					<a
						rel="noreferrer"
						target="_blank"
						href="https://lightguide.uz"
					>
						Lightguide
					</a>{" "}
					(Латвия). Подкожная вена - Большая подкожная вена, Малая
					подкожная вена, Передняя добавочная большая подкожная вена,
					Перфорантная вена. Радиочастотная эндовенозная облитерация
					на аппарате VNUS Closure фирмы Covidien с использованием
					катетера ClosureFAST (США).
				</p>
			</div>
		</section>
	);
};

export const getServerSideProps = async ({ locale, params }) => {
	const { data } = await getData({
		url: "https://webpark.uz",
		endpoint: `/api/kategoriya-uslugs?populate=*`,
	});

	if (!data.length) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data,
			locale,
		},
	};
};

export default PriceListPage;
