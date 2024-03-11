import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const NavBar = () => {
  const cartList = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <nav className="w-full py-5 bg-cyan-600 text-white text-lg">
      <div className="flex justify-between items-center container">
        <Logo />
        <ul className="flex justify-around font-bold w-56">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/cart" className='flex justify-center items-center gap-2'>Cart <span className="text-xs">{cartList.length ? `(${cartList.length})` : ''}</span></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
