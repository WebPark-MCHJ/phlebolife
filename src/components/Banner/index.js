import Section from "../Common/Section";
import { Cta } from "./Cta";
import { Statistics } from "./Statistics";
import { Woman } from "./Woman";

const Banner = () => {
  return (
    <section className="banner fadeIn">
      <div className="content">
        <Cta />
      </div>

      <Woman>
        <div className="woman__decoration" />
      </Woman>
      <Statistics />
    </section>
  );
};

export default Banner;
