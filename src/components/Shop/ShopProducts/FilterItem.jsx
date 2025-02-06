import PropTypes from "prop-types";

const FilterItem = ({ text, count, filterFunction }) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        name=""
        className="appearance-none p-2 border border-primary rounded-[4px] checked:bg-primary"
        id={text}
        onChange={() => filterFunction(text)}
      />
      <label
        htmlFor={text}
        className="inline-block text-base text-primary font-maax cursor-pointer"
      >
        {text} ({count})
      </label>
    </div>
  );
};

FilterItem.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  filterFunction: PropTypes.func.isRequired,
};

export default FilterItem;
