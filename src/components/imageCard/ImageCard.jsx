import winter from "../../assets/images/winter.avif";
import fall from "../../assets/images/fall.avif";
import spring from "../../assets/images/spring.avif";
import summer from "../../assets/images/summer.avif";
import "./index.style.css";

export const ImageCard = (props) => {
  return (
    <div className="imgContainer">
      <img className="img" src={winter} alt="Winter" />
      <img className="img" src={fall} alt="Fall" />
      <img
        style={{ height: "50%" }}
        className="img"
        src={spring}
        alt="Spring"
      />
      <img className="img" src={summer} alt="Summer" />
    </div>
  );
};
