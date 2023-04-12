import { useState, useEffect } from "react";

export default function CookieChecker() {
  const [isOpen, setIsOpen] = useState(false);

  function checkCookiesAllowed() {
    const cookiesAllowed = localStorage.getItem("cookiesAllowed");
    if (cookiesAllowed === null) {
      setIsOpen(true);
    }
  }
  function handleAccept() {
    localStorage.setItem("cookiesAllowed", "true");
    setIsOpen(false);
  }
  function handleDecline() {
    window.location.href = "https://www.google.com";
  }

  useEffect(() => {
    checkCookiesAllowed();
  }, []);

  if (isOpen === false) return null;

  return (
    <div className="absolute w-fit h-fit bottom-0 left-0 border-2 border-black overflow-hidden flex items-center flex-col rounded-md bg-purple-600 text-white gap-y-4 pt-4">
      <img src="/cookie-svgrepo-com.svg" className="w-20 h-20" />
      <p className="text-center px-2">
        Cookies are required in order to use this website. Will you allow them?
      </p>
      <div id="button-group" className="flex gap-2 pb-4">
        <button
          className="border border-white p-2 hover:bg-white hover:text-purple-600 duration-300 ease-in-out rounded-lg"
          onClick={handleAccept}
        >
          Allow Cookies
        </button>
        <button
          className="border border-white p-2 hover:bg-white hover:text-purple-600 duration-300 ease-in-out rounded-lg"
          onClick={handleDecline}
        >
          Exit website
        </button>
      </div>
    </div>
  );
}
