import PropTypes from "prop-types";
import FilterItem from "./FilterItem";
import { useState } from "react";
import ProductPagination from "./ProductPagination";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SkeletonCard from "@/components/shared/SkeletonCard/SkeletonCard";
import { FaTimes } from "react-icons/fa";

const ShopProducts = ({ productInfo }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { categories, count, origins } = productInfo;
  const axiosSecure = useAxiosSecure();

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

  const size = 10;
  const numberOfpages = Math.ceil(count / size);
  const pages = [...Array(numberOfpages).keys()];

  const { data: products, isLoading: ProductLodaing } = useQuery({
    queryFn: async () =>
      axiosSecure.get("/products/products", {
        params: {
          page: currentPage,
          size,
          origin: selectedOrigins,
          category: selectedCategories,
        },
      }),
    queryKey: [
      "products",
      { currentPage, selectedCategories, selectedOrigins },
    ],
  });

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedOrigins([]);
  };

  return (
    <section id="products" className="py-12">
      <div className="container grid grid-cols-4 gap-6">
        <div className="relative">
          <div className="p-4 bg-granny_smith_apple/50 rounded-lg space-y-6 sticky top-6">
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

            <div className="w-full bg-primary h-px"></div>

            {selectedCategories.length > 0 || selectedOrigins.length > 0 ? (
              <div>
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-2 text-xl font-maax_medium text-primary"
                >
                  <span>Clear Filters</span> <FaTimes />
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-6 mb-12">
            {ProductLodaing
              ? Array(size).map((item, idx) => <SkeletonCard key={idx} />)
              : products?.data?.data?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
          </div>
          <ProductPagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

ShopProducts.propTypes = {
  productInfo: PropTypes.object.isRequired,
};

export default ShopProducts;
