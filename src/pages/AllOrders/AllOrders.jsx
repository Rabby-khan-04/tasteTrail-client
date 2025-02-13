import Spinner from "@/components/shared/Spinner/Spinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AllOrderRow from "@/components/AllOrder/AllOrderRow";

const AllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryFn: () => axiosSecure.get("/orders/all-order"),
    queryKey: ["orders"],
  });

  if (ordersLoading) return <Spinner />;

  const totalPrice = orders?.data?.data?.reduce(
    (acc, currVal) => acc + currVal.product.price * currVal.quantity,

    0
  );

  console.log(totalPrice);
  console.log(orders.data.data);

  return (
    <div>
      <Table>
        <TableCaption>A list of all orders.</TableCaption>
        <TableHeader>
          <TableRow className="text-2xl font-maax_medium text-primary">
            <TableHead>Product</TableHead>
            <TableHead>Order By</TableHead>
            <TableHead>Saler</TableHead>
            <TableHead>Total Order</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.data?.data?.map((order) => (
            <AllOrderRow key={order._id} order={order} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-maax_medium text-primary">
            <TableCell colSpan={6}>Total Sales</TableCell>
            <TableCell className="text-right">${totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllOrders;
