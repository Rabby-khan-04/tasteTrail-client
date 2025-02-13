import PropTypes from "prop-types";
import { TableCell, TableRow } from "../ui/table";
import { useNavigate } from "react-router-dom";

const AllOrderRow = ({ order }) => {
  const navigate = useNavigate();
  const { orderBy, orderDate, product, quantity } = order;
  const { _id, addBy, category, image, name, ordersCount, price } = product;
  return (
    <TableRow
      className="cursor-pointer text-primary font-maax"
      onClick={() => navigate(`/product/${_id}`)}
    >
      <TableCell>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg border border-primary">
            <img
              src={image}
              className="size-32 rounded-md inline-block object-cover"
              alt=""
            />
          </div>
          <div className="font-maax_medium">
            <h2 className="text-2xl">{name}</h2>
            <p className="text-xl">Category: {category}</p>
            <p className="text-xl">${price}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <h3 className="text-base">Name: {orderBy.name}</h3>
        <p className="text-base">Emal: {orderBy.email}</p>
      </TableCell>
      <TableCell>
        <h3 className="text-base">Name: {addBy.name}</h3>
        <p className="text-base">Emal: {addBy.email}</p>
      </TableCell>
      <TableCell>{ordersCount}</TableCell>
      <TableCell>{new Date(orderDate).toLocaleDateString("en")}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell className="text-right">${quantity * price}</TableCell>
    </TableRow>
  );
};

AllOrderRow.propTypes = {
  order: PropTypes.object.isRequired,
};

export default AllOrderRow;
