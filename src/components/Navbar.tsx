import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Navbar = () => {
  const { favoriteIds } = useFavorites();

  return (
    <header className="border border-b border-slate-800 bg-slate-950">
      <nav className="max-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Resource Explorer
        </Link>

        <div className="flex flex-wrap gap-4 sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-slate-300 hover:text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-slate-300 hover:text-white"
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-slate-300 hover:text-white"
            }
          >
            Favorites ({favoriteIds.length})
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
