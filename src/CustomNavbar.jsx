import "./Navbar.css";
import { useWindowDimensions, useCurrentPossition } from "./useWindowDimension";

const navbar = ({ refOne, refTwo }) => {

  const { height } = useWindowDimensions();
  const positionY = useCurrentPossition();

  const scrollToOne = () => {
    refOne.current.scrollIntoView();
  };
  const scrollToTwo = () => {
    refTwo.current.scrollIntoView();
  };

  return (
    <div className="nevbar">
      <div className="leftside">
        sticky navbar
      </div>
      <ul className="rigthside">
        <li
          className={
            Math.ceil(positionY) == 0
              ? "active"
              : ""
          }
          onClick={scrollToOne}
        >
          {/* <a href="#section-1">section 1</a>  */}
          section 1
        </li>
        <li
          className={
            Math.ceil(positionY) == height
              ? "active"
              : ""
          }
          onClick={scrollToTwo}
        >
          {/* <a href="#section-2">section 2</a>  */}
          section 2
        </li>
      </ul>
    </div>
  );
};

export default navbar;
