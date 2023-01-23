import Image from "next/image";
import woman from "../../assets/images/woman.png";

export const Woman = ({ children }) => {
  return (
    <div className="woman">
      <Image width={450} src={woman} alt="Phlebolife" quality={100} priority />

      {children}
    </div>
  );
};
