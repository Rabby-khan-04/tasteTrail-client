import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import OutlineButton from "../OutlineButton/OutlineButton";
import { LuLogIn } from "react-icons/lu";
import hamburgerIcon from "@/assets/icons/hamburger.svg";
import crossIcon from "@/assets/icons/cross.svg";
import bgPaper from "@/assets/image/background/bg-paper.jpg";
import userIco from "@/assets/icons/user.png";
import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const Header = () => {
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        axiosSecure
          .post("/users/logout")
          .then(() => {
            toast.success("User logged out successfully!!");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink onClick={() => setToggle(false)} to="/">
          Home
        </NavLink>
        {toggle && <span>.I</span>}
      </li>
      <li>
        <NavLink onClick={() => setToggle(false)} to="/shop">
          Shop
        </NavLink>
        {toggle && <span>.II</span>}
      </li>
      <li>
        <NavLink onClick={() => setToggle(false)} to="/journal">
          Journal
        </NavLink>
        {toggle && <span>.III</span>}
      </li>
      <li>
        <NavLink onClick={() => setToggle(false)} to="/">
          History
        </NavLink>
        {toggle && <span>.VI</span>}
      </li>
      <li>
        <NavLink onClick={() => setToggle(false)} to="/contact">
          Contact us
        </NavLink>
        {toggle && <span>.V</span>}
      </li>
    </>
  );

  useEffect(() => {
    const header = document.getElementById("header");
    setHeaderHeight(header.offsetHeight);
  }, []);

  return (
    <>
      <header
        id="header"
        className="bg-almond p-3 lg:p-0 text-black border-b border-black"
      >
        <nav className="flex justify-between lg:justify-normal items-center gap-10">
          <div className="w-[60px] block lg:hidden">
            <button
              onClick={() => setToggle((prev) => !prev)}
              className="size-9"
            >
              {toggle ? (
                <img src={crossIcon} className="inline-block" alt="" />
              ) : (
                <img src={hamburgerIcon} className="inline-block" alt="" />
              )}
            </button>
          </div>
          <div className="lg:px-5 lg:py-4 xl:px-[2.14rem] xl:py-[1.4rem] lg:border-r lg:border-black">
            <Link to="/" className="text-center inline-block xl:space-y-2">
              <h2 className="font-louize text-3xl xl:text-5xl">TeasteTrail</h2>
              <p className="font-maax text-xs xl:text-sm">
                A Journey of Flavors
              </p>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-7 xl:gap-[2.5rem] nav__item w-full xl:w-auto xl:grow">
            {navLinks}
          </ul>

          <div className="lg:px-5 lg:py-4 xl:px-[2.14rem] xl:py-[1.4rem] w-[60px] lg:w-auto">
            {toggle || user ? (
              <div className="flex items-center gap-3 cursor-pointer">
                <OutlineButton text="Logout" onClick={handleLogout} />
                <div>
                  <Link to="/dashboard/my-account">
                    <img
                      src={user.photoURL || userIco}
                      className="inline-block size-12 rounded-full"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <OutlineButton
                text="Login"
                Icon={LuLogIn}
                onClick={() => navigate("/login")}
              />
            )}
          </div>
        </nav>
      </header>
      <section
        style={{ backgroundImage: `url(${bgPaper})` }}
        className={`h-screen w-full bg-cover bg-center bg-no-repeat pt-10 pb-6 fixed top-[${headerHeight}px] transition-all duration-700 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] origin-right ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4">
          <div className="mb-6">
            <ul className="mobile__nav_menu space-y-5">{navLinks}</ul>
          </div>

          <div className="space-y-3 mb-4">
            <h4 className="font-louize_medium text-base text-black">Contact</h4>
            <a
              href="mailto:ajrabbyk72@gmail.com"
              className="inline-block font-maax_medium text-base underline uppercase transition-opacity duration-200 ease-in-out hover:opacity-50 hover:no-underline"
            >
              ajrabbyk72@gmail.com
            </a>
            <ul className="flex items-center justify-between text-black text-base social__menu">
              <li>
                <a href="/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaSpotify />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="border-y border-black px-4 py-3 grid grid-cols-2 gap-2 font-maax_medium text-base text-black uppercase">
            <Link to="/">Terms & conditions</Link>
            <Link to="/">Nutrition</Link>
            <Link to="/">Privacy & cookies notice!!</Link>
            <Link to="/">Personal Data & Cookies</Link>
          </div>
          <div className="px-4 py-3 text-center">
            <Link
              to="/"
              className="inline-block text-base font-maax_medium text-black transition-opacity duration-200 hover:opacity-50"
            >
              TeasteTrail 2025&copy;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
