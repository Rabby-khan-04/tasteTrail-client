import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const AboutPoint = ({ text }) => {
  return (
    <div className="text-primary flex items-center gap-2 mr-32">
      <div>
        <IoIosCheckmarkCircle className="text-xl" />
      </div>
      <p className="text-[22px] font-maax_medium">{text}</p>
    </div>
  );
};

AboutPoint.propTypes = { text: PropTypes.string };

export default AboutPoint;
