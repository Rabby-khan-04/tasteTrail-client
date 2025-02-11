import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AuthContext from "@/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { mutateAsync: addProductToDb } = useMutation({
    mutationFn: (productInfo) =>
      axiosSecure.post("/products/product", productInfo),
    onSuccess: () => toast.success("Product Added Successfully"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const productInfo = {
      name: data.name,
      image: data.image,
      category: data.category,
      origin: data.origin,
      price: parseInt(data.price),
      quantity: parseInt(data.quantity),
      description: data.description,
      addBy: { email: data.email, name: data.userName },
    };
    addProductToDb(productInfo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-3">
        <div className="flex items-center gap-3">
          <div className="space-y-2 w-full">
            <Input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.name && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>

          <div className="space-y-2 w-full">
            <Input
              type="url"
              placeholder="Image URL"
              {...register("image", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.image && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="space-y-2 w-full">
            <Input
              type="text"
              placeholder="Category"
              {...register("category", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.category && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>

          <div className="space-y-2 w-full">
            <Input
              type="number"
              placeholder="Quantity"
              {...register("quantity", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.quantity && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="space-y-2 w-full">
            <Input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.price && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>

          <div className="space-y-2 w-full">
            <Input
              type="text"
              placeholder="Seler Name"
              defaultValue={user.displayName}
              readOnly
              {...register("userName", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.addedBy && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="space-y-2 w-full">
            <Input
              type="text"
              placeholder="Seler Email"
              defaultValue={user.email}
              readOnly
              {...register("email", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.addedBy && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>

          <div className="space-y-2 w-full">
            <Input
              type="text"
              placeholder="Origin"
              {...register("origin", { required: true })}
              className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full"
            />

            {errors.origin && (
              <p className="text-sm text-red-500 font-maax">
                This field is required
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Textarea
            placeholder="Description"
            {...register("description", { required: true })}
            className="block border-primary text-lg text-primary placeholder:text-lg placeholder:text-primary font-maax py-3 px-5 appearance-none w-full h-28"
          />

          {errors.description && (
            <p className="text-sm text-red-500 font-maax">
              This field is required
            </p>
          )}
        </div>

        <button
          className="text-xl bg-primary inline-block w-full p-4 text-white rounded-md transition-all duration-200 hover:opacity-75"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
