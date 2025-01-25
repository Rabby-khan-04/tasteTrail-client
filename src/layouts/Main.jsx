import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
