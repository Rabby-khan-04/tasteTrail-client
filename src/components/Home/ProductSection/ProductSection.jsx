import OutlineButton from "@/components/shared/OutlineButton/OutlineButton";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import SkeletonCard from "@/components/shared/SkeletonCard/SkeletonCard";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoFastFoodOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery({
    queryFn: async () =>
      await axiosSecure.get("/products/products", {
        params: {
          page: 0,
          size: 3,
        },
      }),

    queryKey: ["products"],
  });

  return (
    <section className="py-32">
      <div className="container">
        <SectionTitle
          title="Meet Our Delicious Menu"
          description="Fresh ingredients, mouthwatering flavors, and handcrafted perfection."
        />
        <div className="mx-auto max-w-7xl grid grid-cols-3 gap-6">
          {isLoading
            ? Array(3).map((item, idx) => <SkeletonCard key={idx} />)
            : products?.data?.data?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
        <div className="flex justify-center mt-12">
          <OutlineButton
            className="text-primary"
            text="Browse All Dishes"
            Icon={IoFastFoodOutline}
            onClick={() => navigate("/shop")}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
