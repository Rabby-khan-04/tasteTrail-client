import OutlineButton from "@/components/shared/OutlineButton/OutlineButton";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Spinner from "@/components/shared/Spinner/Spinner";
import AuthContext from "@/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: myProducts, isLoading: myProductLoading } = useQuery({
    queryFn: () =>
      axiosSecure.get("/products/my-products", {
        params: { email: user.email },
      }),

    queryKey: ["my-products", { user }],
  });

  if (myProductLoading) return <Spinner />;

  return (
    <div>
      {myProducts?.data?.data?.length === 0 ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-xl font-maax_medium text-primary">
            No products Found.
          </h2>
          <OutlineButton
            text="Add new product"
            className="text-primary"
            onClick={() => navigate("/dashboard/add-product")}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {myProducts?.data?.data?.map((product) => (
            <ProductCard key={product._id} product={product} action />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProduct;
