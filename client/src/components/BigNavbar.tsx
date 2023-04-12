import { Link } from "react-router-dom";

export default function BigNavbar() {
  return (
    <div className="flex justify-around w-full">
      <div id="logo-wrapper" className=" left-4 top-5 sm:flex hidden">
        <div id="logo">Note-Maker</div>
      </div>
      <div
        id="link-wrapper"
        className="w-fit h-fit sm:flex sm:justify-between hidden"
      >
        <ul id="link-list" className="sm:flex sm:gap-16">
          <li>
            <Link
              to="/"
              className="ease-in-out duration-300 hover:text-red-600"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="ease-in-out duration-300 hover:text-red-600"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="ease-in-out duration-300 hover:text-red-600"
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              to="/logout"
              className="ease-in-out duration-300 hover:text-red-600"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
