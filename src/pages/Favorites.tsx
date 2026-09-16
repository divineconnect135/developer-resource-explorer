import { Link } from "react-router-dom";
import ResourceGrid from "../components/ResourceGrid";
import { useFavorites } from "../context/FavoritesContext";
import { resources } from "../data/resources";

const Favorites = () => {
  const { favoriteIds } = useFavorites();

  const favoriteResources = resources.filter((resource) =>
    favoriteIds.includes(resource.id),
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Favorites</h1>
        <div className="mt-10">
          {favoriteResources.length > 0 ? (
            <ResourceGrid resources={favoriteResources} />
          ) : (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-xl font-semibold">No favorites yet</h2>

              <p className="mt-2 text-slate-400">
                Save resources you want to revisit later.
              </p>

              <Link
                to="/resources"
                className="mt-5 inline-block text-sky-400 hover:text-sky-300"
              >
                Browse resources
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Favorites;
