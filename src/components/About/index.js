import Section from "../Common/Section";
import { Main } from "./Main";
import Rectangle from "../Common/Rectangle";
import Image from "next/image";

const About = () => {
  return (
    <Section className="about">
      <Main />
      <Rectangle>
        <div className="image-wrapper">
          <Image
            quality={100}
            priority
            width={390}
            height={600}
            src={"/images/doctor002.png"}
            alt="phlebolife specialist"
          />
        </div>
      </Rectangle>
    </Section>
  );
};

export default About;
