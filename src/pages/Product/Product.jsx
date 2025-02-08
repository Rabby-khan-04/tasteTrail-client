import Spinner from "@/components/shared/Spinner/Spinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Product = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { data: product, isLoading: productLoading } = useQuery({
    queryFn: async () => axiosSecure.get(`/products/product/${id}`),
    queryKey: ["product", { id }],
  });

  if (productLoading) return <Spinner />;

  const {
    _id,
    image,
    addBy,
    category,
    quantity,
    price,
    origin,
    description,
    name,
  } = product.data.data;

  const handleQuantityDecrease = () => {
    if (selectedQuantity <= 1) return;
    else {
      setSelectedQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityIncrease = () => {
    if (selectedQuantity === quantity) return;
    else {
      setSelectedQuantity((prev) => prev + 1);
    }
  };

  const handdleAddToCart = () => {
    navigate("/checkout", {
      state: {
        productId: _id,
        price,
        quantity: selectedQuantity,
        image,
        category,
        origin,
        name,
      },
    });
  };

  return (
    <main className="bg-almond">
      <section className="py-20">
        <div className="container grid grid-cols-2 gap-8 font-maax_medium">
          <div className="">
            <img
              src={image}
              className="w-full inline-block rounded-3xl aspect-square object-cover object-center"
              alt=""
            />
          </div>
          <div className="self-center">
            <div className="text-xl text-primary uppercase flex items-center gap-6">
              <p>
                <span>Category: </span>
                {category}
              </p>
              <p>
                <span>Origin: </span>
                {origin}
              </p>
            </div>
            <h1 className="text-7xl text-primary my-4">{name}</h1>
            <p className="text-2xl text-primary">${price}</p>
            <p className="text-xl font-maax text-black max-w-2xl my-5">
              {description}
            </p>
            <div className="flex items-center gap-6 mb-5">
              <p className="text-xl text-primary">
                <span className="uppercase">Item Left: </span>
                {quantity}
              </p>
              <p className="text-xl text-primary">
                <span className="uppercase">Seler: </span>
                {addBy.name}
              </p>
              <p className="text-xl text-primary">
                <span className="uppercase">Email: </span>
                {addBy.email}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <button
                  className="text-base text-primary p-3 rounded-full border border-primary inline-block disabled:opacity-50"
                  disabled={selectedQuantity <= 1}
                  onClick={handleQuantityDecrease}
                >
                  <FaMinus />
                </button>
                <input
                  type="text"
                  name=""
                  value={selectedQuantity}
                  readOnly
                  className="appearance-none outline-none border-none bg-transparent inline-block size-12 text-center text-xl text-primary"
                  id=""
                />
                <button
                  className="text-base text-primary p-3 rounded-full border border-primary inline-block disabled:opacity-50"
                  disabled={selectedQuantity === quantity}
                  onClick={handleQuantityIncrease}
                >
                  <FaPlus />
                </button>
              </div>

              <button
                onClick={handdleAddToCart}
                className="text-xl bg-primary inline-block w-full p-4 text-white rounded-full transition-all duration-200 hover:opacity-75"
              >
                Procced To Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
