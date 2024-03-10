import Logo from "../Logo";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

const NavBar = () => {

  return (
    <nav className="w-full py-5 bg-cyan-600 text-white text-lg">
      <div className="flex justify-between items-center container">
        <Logo />
        <SearchInput />
        <ul className="flex justify-around font-bold w-56">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
