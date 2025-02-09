import Spinner from "@/components/shared/Spinner/Spinner";
import AuthContext from "@/context/AuthContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Spinner />;

  if (!user)
    return (
      <Navigate
        to="/login"
        state={{ path: location.pathname, orderInfo: location.state }}
      />
    );

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
