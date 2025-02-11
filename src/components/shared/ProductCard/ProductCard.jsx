import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ProductCard = ({ product, action = false }) => {
  const { _id, name, image, category, price, description } = product;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  const { mutateAsync: deleteProduct } = useMutation({
    mutationFn: () => axiosSecure.delete(`/products/product/${_id}`),
    onSuccess: (res) => {
      if (res?.data?.data?.deletedCount > 0) {
        toast.success("Product deleted successfully!!");
        queryClient.invalidateQueries(["my-products"]);
      }
    },
  });

  const handleUpdate = () => {
    navigate(`/dashboard/update-product/${_id}`);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF0000",
      cancelButtonColor: "#195908",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct();
      }
    });
  };

  return (
    <div className="space-y-4">
      <div
        className="space-y-4 relative cursor-pointer group"
        onClick={() => navigate(`/product/${_id}`)}
      >
        <img
          src={image}
          alt={name}
          className="w-full aspect-square inline-block rounded-[20px] object-cover object-center"
        />
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-louize_medium text-xl text-primary transition-all duration-300 group-hover:underline">
              {name}
            </h2>
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
      {action && (
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleUpdate}
            className="text-xl bg-granny_smith_apple text-primary block w-full text-center p-4 rounded-md"
          >
            <FiEdit className="inline-block" />
          </button>
          <button
            onClick={handleDelete}
            className="text-xl bg-red-400 text-red-600 block w-full text-center p-4 rounded-md"
          >
            <MdDelete className="inline-block" />
          </button>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  action: PropTypes.bool,
};

export default ProductCard;
