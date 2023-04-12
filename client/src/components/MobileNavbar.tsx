import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div>
      <div
        id="mobile-wrapper"
        className="flex justify-center gap-2 sm:hidden h-screen w-full"
      >
        <div
          id="link-wrapper-mobile"
          className="w-fit sm:hidden flex flex-col justify-center gap-y-4"
        >
          <div id="logo-wrapper-mobile" className="">
            <div id="logo-mobile">Note-Maker</div>
          </div>
          <ul
            id="link-list-mobile"
            className="flex justify-end items-center gap-4 flex-col "
          >
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
    </div>
  );
}
