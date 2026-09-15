import type { Resource } from "../types/Resource";

type ResourceCardProps = {
  resource: Resource;
};

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">{resource.name}</h2>

      <p className="mt-1 text-sm text-sky-400">{resource.category}</p>
      <p className="mt-3 text-slate-400">{resource.description}</p>
      <p className="mt-4 text-sm text-slate-300">{resource.rating}</p>

      <a
        href={resource.website}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-medium text-sky-400 hover:text-sky-300"
      >
        Visit Website
      </a>
    </article>
  );
};

export default ResourceCard;
