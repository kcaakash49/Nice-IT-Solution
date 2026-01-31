import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  // { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const activeClass = "text-indigo-600 font-semibold";
  const baseClass = "text-gray-700 hover:text-indigo-600 transition";

  return (
    <header className="w-full bg-white shadow sticky top-0 z-10 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src="logo.svg"     // <-- replace with your logo file
              alt="Nice IT Solution"
              className="h-8 sm:h-10 md:h-12 w-auto"  // adjust size as needed
            />
          </NavLink>
        </div>


        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                (isActive ? activeClass : baseClass) + " text-sm"
              }
            >
              {l.label}
            </NavLink>
          ))}
          {/* <NavLink
            to="/akc/dashboard"
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-500 transition"
          >
            Dashboard
          </NavLink> */}
          <ThemeToggle />
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {open ? (
              <HiOutlineX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  (isActive ? activeClass : baseClass) + " block text-base"
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-500 transition"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
