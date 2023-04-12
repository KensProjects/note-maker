import { useState } from "react";

import Hamburger from "./Hamburger";
import MobileNavbar from "./MobileNavbar";
import BigNavbar from "./BigNavbar";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setMobileMenu((prev) => !prev);
  }

  return (
    <nav className="flex sm:justify-around  items-center relative top-0 w-full sm:h-fit  h-fit text-xl bg-gray-100 sm:py-4 py-8 px-2 border-b border-gray-800 flex-col sm:flex-row">
      <BigNavbar />
      {mobileMenu ? <MobileNavbar /> : null}
      <Hamburger onClick={toggleMobileMenu} />
    </nav>
  );
}
