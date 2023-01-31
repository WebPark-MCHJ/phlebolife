import Image from "next/legacy/image";
import ReadMore from "../Common/ReadMore";

const Doctor = ({ attributes }) => {
  return (
    <div className="doctor">
      <div className="doctor__photo">
        <Image
          quality={100}
          width={600}
          height={600}
          layout="responsive"
          src={`https://webpark.uz${attributes.photo.data.attributes.url}`}
          alt={attributes.photo.data.attributes.alternativeText}
          objectFit="contain"
        />
      </div>
      <h3 className="doctor__title">{attributes.speciality}</h3>
      <h4 className="doctor__name">{attributes.full_name}</h4>
      <p className="doctor__para">
        {attributes.description.substring(0, 60)}...
      </p>

      <ReadMore
        newWindow
        className="doctor__link"
        href={`/doctors/${attributes.slug}`}
      >
        Узнать больше
      </ReadMore>
    </div>
  );
};

export default Doctor;
