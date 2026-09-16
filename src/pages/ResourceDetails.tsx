import { Link, useParams } from "react-router-dom";
import { resources } from "../data/resources";

const ResourceDetails = () => {
  const { id } = useParams();

  const resource = resources.find((resource) => resource.id === Number(id));

  if (!resource) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        <h1 className="text-3xl font-bold">Resource Not Found!</h1>

        <Link to="/resources" className="mt-6 inline-block text-sky-400">
          Back To Resources
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl py-20 px-6">
        <Link to="/resources" className="mt-6 inline-block text-sky-400">
          Back To Resources
        </Link>
        <h1 className="mt-8 text-4xl font-bold">{resource.name}</h1>
        <p className="mt-2 text-sky-400">{resource.category}</p>
        <p className="mt-6 text-slate-400">{resource.description}</p>
        <p className="mt-4">Rating: {resource.rating}</p>
        <a
          href={resource.website}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-lg bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Visit Website ↗
        </a>
      </div>
    </main>
  );
};

export default ResourceDetails;
