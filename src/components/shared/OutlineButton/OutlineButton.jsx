import PropTypes from "prop-types";
import borderLine from "@/assets/icons/button-line.svg";

const OutlineButton = ({
  text,
  type = "button",
  className = "",
  disabled = false,
  onClick,
  Icon,
}) => {
  return (
    <button
      type={type}
      className={`${className} py-5 px-[50px] text-black uppercase text-xl relative font-maax_medium flex items-center gap-3`}
      disabled={disabled}
      onClick={onClick}
    >
      <img
        src={borderLine}
        className="absolute top-0 left-0 w-full h-full"
        alt=""
      />
      <span>{text}</span>
      {Icon && <Icon className="text-2xl" />}
    </button>
  );
};

OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  Icon: PropTypes.node,
};

export default OutlineButton;
