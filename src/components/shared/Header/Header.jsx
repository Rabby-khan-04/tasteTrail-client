import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import OutlineButton from "../OutlineButton/OutlineButton";
import { LuLogIn } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/journal">Journal</NavLink>
      </li>
      <li>
        <NavLink to="/">History</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact us</NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-almond text-black border-b border-black">
      <nav className="flex items-center gap-10">
        <div className="px-10 py-7 border-r border-black">
          <Link to="/" className="text-center inline-block space-y-2">
            <h2 className="font-louize text-5xl">TeasteTrail</h2>
            <p className="font-maax text-sm">A Journey of Flavors</p>
          </Link>
        </div>

        <ul className="flex items-center justify-start gap-12 nav__item grow">
          {navLinks}
        </ul>

        <div className="px-10 py-7">
          <OutlineButton
            text="Login"
            Icon={LuLogIn}
            onClick={() => navigate("/login")}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
