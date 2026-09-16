import type { Resource } from "../types/Resource";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

type ResourceCardProps = {
  resource: Resource;
};

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(resource.id);

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-700">
      <span className="text-sm font-medium text-sky-400">
        {resource.category}
      </span>

      <h2 className="mt-2 text-xl font-bold text-white">{resource.name}</h2>

      <p className="mt-3 flex-1 text-slate-400">{resource.description}</p>

      <p className="mt-4 text-sm text-slate-300">⭐ {resource.rating}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to={`/resources/${resource.id}`}
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={() => toggleFavorite(resource.id)}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          {favorite ? "★ Saved" : "☆ Favorite"}
        </button>
      </div>
    </article>
  );
};

export default ResourceCard;
