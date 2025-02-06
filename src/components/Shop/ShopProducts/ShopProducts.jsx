import PropTypes from "prop-types";
import FilterItem from "./FilterItem";
import { useState } from "react";

const ShopProducts = ({ productInfo }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const { categories, count, origins } = productInfo;

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleOriginChange = (origin) => {
    setSelectedOrigins((prev) =>
      prev.includes(origin)
        ? prev.filter((item) => item !== origin)
        : [...prev, origin]
    );
  };

  console.log(selectedCategories);
  console.log(selectedOrigins);

  return (
    <section id="products" className="py-12">
      <div className="container grid grid-cols-4">
        <div className="p-4 bg-granny_smith_apple/50 rounded-lg space-y-6">
          <div>
            <h4 className="font-maax_medium text-xl text-primary mb-4">
              Categories
            </h4>
            <div className="space-y-2">
              {categories.map((category, idx) => (
                <FilterItem
                  key={idx}
                  text={category.category}
                  count={category.count}
                  filterFunction={handleCategoryChange}
                />
              ))}
            </div>
          </div>

          <div className="w-full bg-primary h-px"></div>

          <div>
            <h4 className="font-maax_medium text-xl text-primary mb-4">
              Origins
            </h4>
            <div className="space-y-2">
              {origins.map((origin, idx) => (
                <FilterItem
                  key={idx}
                  text={origin.origin}
                  count={origin.count}
                  filterFunction={handleOriginChange}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3"></div>
      </div>
    </section>
  );
};

ShopProducts.propTypes = {
  productInfo: PropTypes.object.isRequired,
};

export default ShopProducts;
