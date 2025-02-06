import Spinner from "@/components/shared/Spinner/Spinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const axiosSecure = useAxiosSecure();
  const { data: productInfo, isLoading } = useQuery({
    queryFn: async () => await axiosSecure.get("/products/product-info"),
    queryKey: ["productInfo"],
  });

  if (isLoading) return <Spinner />;

  return <main></main>;
};

export default Shop;
