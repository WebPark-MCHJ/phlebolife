import AppContext from "../../context/AppContext";
import { useContext } from "react";

export const Statistics = () => {
  const { db } = useContext(AppContext);

  return (
    <ul className="statistics">
      {db.statistics.map((item, index) => (
        <li key={index} className="statistics__item">
          <h3 className="statistics__number">{item.number}</h3>
          <p className="statistics__description">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
