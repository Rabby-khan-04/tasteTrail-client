import Spinner from "@/components/shared/Spinner/Spinner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const { data: productData, isLoading: productDataLoading } = useQuery({
    queryFn: () => axiosSecure.get(`/products/product/${id}`),
    queryKey: ["product", { id }],
  });

  const { mutateAsync: updateProduct } = useMutation({
    mutationFn: (productInfo) =>
      axiosSecure.patch(
        `/products/product/${productData?.data?.data?._id}`,
        productInfo
      ),
    onSuccess: (res) => {
      if (res.data.data.modifiedCount > 0) {
        queryClient.invalidateQueries(["product"]);
        toast.success("Product Added Successfully");
      }
    },
  });

  const onSubmit = (data) => {
    const productInfo = {
      name: data.name,
      image: data.image,
      category: data.category,
      origin: data.origin,
      price: parseFloat(data.price),
      quantity: parseInt(data.quantity),
      description: data.description,
      addBy: { email: data.email, name: data.userName },
    };
    updateProduct(productInfo);
  };

  if (productDataLoading) return <Spinner />;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Name"
              defaultValue={productData?.data?.data?.name}
              {...register("name")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>

          <div className="w-full">
            <Input
              type="url"
              placeholder="Image URL"
              defaultValue={productData?.data?.data?.image}
              {...register("image")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Category"
              defaultValue={productData?.data?.data?.category}
              {...register("category")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>

          <div className="w-full">
            <Input
              type="number"
              placeholder="Quantity"
              defaultValue={productData?.data?.data?.quantity}
              {...register("quantity")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Price"
              defaultValue={productData?.data?.data?.price}
              {...register("price")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>

          <div className="w-full">
            <Input
              type="text"
              placeholder="Seler Name"
              defaultValue={productData?.data?.data?.addBy?.name}
              readOnly
              {...register("userName")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Seler Email"
              defaultValue={productData?.data?.data?.addBy?.email}
              readOnly
              {...register("email")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>

          <div className="w-full">
            <Input
              type="text"
              placeholder="Origin"
              defaultValue={productData?.data?.data?.origin}
              {...register("origin")}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />
          </div>
        </div>

        <div className="w-full">
          <Textarea
            placeholder="Description"
            defaultValue={productData?.data?.data?.description}
            {...register("description")}
            className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full h-28"
          />
        </div>

        <button
          className="text-xl bg-primary inline-block w-full p-4 text-white rounded-md transition-all duration-200 hover:opacity-75"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
