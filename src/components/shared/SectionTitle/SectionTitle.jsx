import PropTypes from "prop-types";

const SectionTitle = ({ title, description = "" }) => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-6xl text-primary font-louize">{title}</h2>
      {description && (
        <p className="text-lg text-black mt-3 font-maax">{description}</p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SectionTitle;
