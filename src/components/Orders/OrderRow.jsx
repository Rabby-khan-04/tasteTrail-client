import PropTypes from "prop-types";
import { TableCell, TableRow } from "../ui/table";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const { orderDate, product, quantity } = order;
  const { _id, price, name, image, addBy } = product;

  const viewProduct = () => {
    navigate(`/product/${_id}`);
  };
  return (
    <TableRow
      onClick={viewProduct}
      className="cursor-pointer text-primary font-maax"
    >
      <TableCell>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg border border-primary">
            <img
              src={image}
              className="size-32 rounded-md inline-block"
              alt=""
            />
          </div>
          <div className="font-maax_medium">
            <h2 className="text-2xl">{name}</h2>
            <p className="text-xl">${price}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <h3 className="font-maax_medium text-xl">name: {addBy.name}</h3>
        <p className="text-base">Emal: {addBy.email}</p>
      </TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{new Date(orderDate).toLocaleDateString("en")}</TableCell>
      <TableCell className="text-right">${quantity * price}</TableCell>
    </TableRow>
  );
};

OrderRow.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderRow;
