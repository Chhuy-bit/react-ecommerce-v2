import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
function Header() {
  const header = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(true);
  };
  useEffect(() => {
  if (!header.current) return;

  gsap.fromTo(header.current, {
    scale: 0.9,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  }, {
    delay: 0.3,
    scale: 1,
    opacity: 1,
     duration: 2,
     ease: "power2.out",
  });
  
}, []);
  return (
    <>
      <header ref={header} className="top-0 left-0 right-0 z-50 flex border-b border-gray-200 p-4 font-jost justify-between items-center px-4 lg:px-40 bg-white shadow-sm">
        <div className="flex gap-2 items-center">
          <button onClick={toggleMenu} className="inline-block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h2 className="font-bold">Master IT Store</h2>
        </div>
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <NavLink
              to="/"
              className="hover:underline decoration-amber-500 aria-[current=page]:underline aria-[current=page]:text-yellow-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="hover:underline decoration-amber-500  aria-[current=page]:underline aria-[current=page]:text-yellow-400"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:underline decoration-amber-500 aria-[current=page]:underline aria-[current=page]:text-yellow-400"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:underline decoration-amber-500 aria-[current=page]:underline aria-[current=page]:text-yellow-400"
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center gap-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 hover:text-amber-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </header>
      <header
        className={`${isMenuOpen ? "left-0" : "-left-full"} absolute transition-all duration-700 ease-in-out top-0 z-99 pt-8 px-4 bg-gray-700 min-h-screen w-65`}
      >
        <div className="flex justify-end ">
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="p-2 border border-white border-dashed rounded-full hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <NavLink
            to="/"
            className="text-white hover:bg-gray-700 p-2 rounded-lg transition-all "
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="text-white hover:bg-gray-700 p-2 rounded-lg transition-all "
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white hover:bg-gray-700 p-2 rounded-lg transition-all "
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:bg-gray-700 p-2 rounded-lg transition-all "
          >
            About
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
