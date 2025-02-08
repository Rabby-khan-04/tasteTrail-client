import { useLocation, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { productId, price, quantity, image, category, origin, name } = state;

  const { mutateAsync: handleCheckOut } = useMutation({
    mutationFn: async () => {
      const orderInfo = { productId, quantity };
      const response = await axiosSecure.post("/orders/place-order", orderInfo);
      console.log(response);
    },
    onSuccess: () => toast.success("Order placed successfully!!"),
    onError: () => {
      toast.error("Failed to place the order!!");
    },
  });

  return (
    <main className="bg-almond">
      <section className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-7xl font-louize_medium text-primary">
            Your Cart, <br />
            Your Choices
          </h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="px-10 space-y-6">
          <Table className="border-y border-primary">
            <TableHeader>
              <TableRow className="border-primary text-primary text-2xl font-maax_medium">
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-end">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="py-2 px-5 text-xl text-primary font-maax">
                <TableCell>
                  <div className="flex items-center gap-8">
                    <div>
                      <img
                        src={image}
                        alt=""
                        className="w-40 aspect-square object-cover object-center rounded-3xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl">{name}</h2>
                      <p className="text-2xl">${price}</p>
                      <p>
                        <span className="font-bold">Category:</span> {category}
                      </p>
                      <p>
                        <span className="font-bold">Origin:</span> {origin}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell className="text-end">${quantity * price}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="max-w-2xl ml-auto">
            <button
              onClick={handleCheckOut}
              className="text-xl bg-primary inline-block w-full p-4 text-white rounded-full transition-all duration-200 hover:opacity-75"
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
