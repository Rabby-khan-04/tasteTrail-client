import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, image, category, price, description } = product;

  const navigate = useNavigate();

  return (
    <div
      className="space-y-4 relative cursor-pointer"
      onClick={() => navigate(`/product/${_id}`)}
    >
      <img
        src={image}
        alt={name}
        className="w-full aspect-square inline-block rounded-[20px] object-cover object-center"
      />
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-louize_medium text-xl text-primary">{name}</h2>
          <p className="font-louize_medium text-2xl text-primary">${price}</p>
        </div>
        <p className="font-maax text-sm text-black">{description}</p>
      </div>

      <div
        className="absolute top-4 right-4 bg-granny_smith_apple rounded py-1 px-4"
        style={{ marginTop: "0px" }}
      >
        <p className="text-sm font-louize_medium text-black">{category}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
