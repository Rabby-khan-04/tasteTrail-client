import PropTypes from "prop-types";
import { LuMoveRight } from "react-icons/lu";

const CTAPoint = ({ text, color, setBgColor }) => {
  return (
    <div
      className="flex items-center justify-between text-primary py-12 border-b border-black cursor-pointer group"
      onMouseEnter={() => setBgColor(color)}
      onMouseLeave={() => setBgColor("#FFFFFF")}
    >
      <div className="grow text-center">
        <h4 className="font-louize text-7xl not-italic transition-all duration-300 group-hover:-skew-x-12">
          {text}
        </h4>
      </div>
      <div>
        <button className="py-1 px-[18px] rounded-full border border-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <LuMoveRight className="text-base" />
        </button>
      </div>
    </div>
  );
};

CTAPoint.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  setBgColor: PropTypes.func,
};

export default CTAPoint;
