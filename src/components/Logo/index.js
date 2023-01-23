import Image from "next/image";
import PhleboLife from "../../assets/images/logo.png";
import Link from "next/link";

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <Image
        width={220}
        src={PhleboLife}
        quality={100}
        priority
        alt="Phlebolife"
      />
      <span>Главная страница</span>
    </Link>
  </div>
);

export default Logo;
