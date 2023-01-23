import Image from "next/image";
import Link from "next/link";
import arrowLeft from "../../assets/images/arrow-left.png";

const ReadMore = ({ children, href, className, newWindow }) => {
  return (
    <Link href={href} legacyBehavior>
      <a target={newWindow ? "_blank" : ""} className={className}>
        {children}
        <Image src={arrowLeft} alt="read more" />
      </a>
    </Link>
  );
};

export default ReadMore;
