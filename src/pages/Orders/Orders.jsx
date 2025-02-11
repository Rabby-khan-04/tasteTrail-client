import Spinner from "@/components/shared/Spinner/Spinner";
import AuthContext from "@/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderRow from "@/components/Orders/OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: myOrders, isLoading: myOrderLoading } = useQuery({
    queryFn: () =>
      axiosSecure.get("/orders/my-order", { params: { email: user.email } }),
    queryKey: ["my-order", user],
  });

  if (myOrderLoading) return <Spinner />;

  const totalPrice = myOrders?.data?.data?.reduce(
    (acc, currVal) => acc + currVal.product.price * currVal.quantity,
    0
  );

  console.log(totalPrice);

  return (
    <div>
      <h2 className="text-6xl font-louize_medium text-primary mb-6">Orders</h2>
      <Table>
        <TableHeader>
          <TableRow className="text-2xl font-maax_medium text-primary">
            <TableHead>Product</TableHead>
            <TableHead>Seler</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myOrders?.data?.data?.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-maax_medium text-primary">
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">${totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Orders;
