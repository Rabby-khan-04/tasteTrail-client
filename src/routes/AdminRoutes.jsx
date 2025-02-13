import Spinner from "@/components/shared/Spinner/Spinner";
import AuthContext from "@/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: userInfo, isLoading: userInfoLoading } = useQuery({
    queryFn: () => axiosSecure.get(`/users/user/${user.email}`),
    queryKey: ["userInfo", { user }],
  });

  if (loading || userInfoLoading) return <Spinner />;

  if (user && userInfo?.data?.data?.role === "admin") return children;

  return <Navigate to="/login" />;
};

AdminRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoutes;
