import Image from "next/legacy/image";

const Event = ({ attributes }) => {
  console.log(attributes.images.data[0].attributes.url);

  return (
    <article className="event">
      <div className="col col__info">
        <h3 className="event__title">{attributes.title}</h3>

        <p className="event__description">{attributes.description}</p>
      </div>

      <div className="col col__image">
        <Image
          alt="Мастерклассы"
          src={`https://webpark.uz${attributes.images.data[0].attributes.url}`}
          width={700}
          height={600}
          layout="responsive"
        />
      </div>
    </article>
  );
};

export default Event;
