import { MdOutlineMenuOpen } from "react-icons/md";
import { Link } from "react-router";
// import { AuthContext } from "../context/AuthContext"; // future use

const Navbar = () => {
  // const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MdOutlineMenuOpen />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          🚗 VehicleRent
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        {/* user ? (
          <>
            <span className="hidden md:block font-medium">
              {user.email}
            </span>
            <button onClick={logout} className="btn btn-outline btn-error btn-sm">
              Logout
            </button>
          </>
        ) : ( */}
        <>
          <Link to="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary btn-sm">
            Register
          </Link>
        </>
        {/* ) */}
      </div>
    </div>
  );
};

export default Navbar;
