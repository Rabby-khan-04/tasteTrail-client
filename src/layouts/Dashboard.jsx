import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Spinner from "@/components/shared/Spinner/Spinner";
import AuthContext from "@/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: userInfo, isLoading: userInfoLoading } = useQuery({
    queryFn: () => axiosSecure.get(`/users/user/${user.email}`),
    queryKey: ["userInfo", { user, axiosSecure }],
  });

  if (userInfoLoading) return <Spinner />;

  return (
    <>
      <Header />
      <main className="bg-almond">
        <section className="py-20">
          <div className="container grid grid-cols-9 gap-6">
            <div className="col-span-2 relative">
              <div className="bg-granny_smith_apple p-5 rounded-lg sticky top-8">
                <ul className="text-xl text-primary font-maax">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block p-3 rounded-md ${
                          isActive ? "bg-[#87B27B] font-bold" : ""
                        }`
                      }
                      to="/dashboard/my-account"
                    >
                      Account
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block p-3 rounded-md ${
                          isActive ? "bg-[#87B27B] font-bold" : ""
                        }`
                      }
                      to="/dashboard/add-product"
                    >
                      Add Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block p-3 rounded-md ${
                          isActive ? "bg-[#87B27B] font-bold" : ""
                        }`
                      }
                      to="/dashboard/my-product"
                    >
                      My Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block p-3 rounded-md ${
                          isActive ? "bg-[#87B27B] font-bold" : ""
                        }`
                      }
                      to="/dashboard/orders"
                    >
                      Orders
                    </NavLink>
                  </li>
                  {userInfo?.data?.data?.role === "admin" && (
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          `block p-3 rounded-md ${
                            isActive ? "bg-[#87B27B] font-bold" : ""
                          }`
                        }
                        to="/dashboard/all-orders"
                      >
                        All Orders
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-span-7">
              <Outlet context={{ userInfo: userInfo.data.data }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
