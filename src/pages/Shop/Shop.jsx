import Spinner from "@/components/shared/Spinner/Spinner";
import ShopBanner from "@/components/Shop/ShopBanner/ShopBanner";
import ShopProducts from "@/components/Shop/ShopProducts/ShopProducts";
import ShopTitle from "@/components/Shop/ShopTitle/ShopTitle";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const axiosSecure = useAxiosSecure();
  const { data: productInfo, isLoading: productInfoLoading } = useQuery({
    queryFn: async () => await axiosSecure.get("/products/product-info"),
    queryKey: ["productInfo"],
  });

  console.log(productInfo);

  if (productInfoLoading) return <Spinner />;

  return (
    <main className="bg-almond">
      <ShopTitle />
      <ShopBanner />
      <ShopProducts />
    </main>
  );
};

export default Shop;
