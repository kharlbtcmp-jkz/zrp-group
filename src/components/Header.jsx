import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import Footer from "./Footer.jsx";

export default function Header({ cartCount }) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/items", label: "Items" },
    { to: "/checkout", label: `Cart (${cartCount})` },
    { to: "/about", label: "About" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <nav className="sticky top-0 z-50 bg-violet-950 text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="text-xl font-extrabold tracking-wide">
            ZRP-GROUP
          </Link>

          <button className="btn btn-ghost md:hidden" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>

          <div
            className={`${open ? "flex" : "hidden"} w-full flex-col gap-3 pt-3 md:flex md:w-auto md:flex-row md:gap-8 md:pt-0`}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
