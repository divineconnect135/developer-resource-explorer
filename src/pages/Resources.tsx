import { useState } from "react";
import ResourceGrid from "../components/ResourceGrid";
import { resources } from "../data/resources";

const categories = [
  "All",
  ...new Set(resources.map((resource) => resource.category)),
];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "rating">("name");

  //Filtering the Category and Resource
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || resource.category === category;

    return matchesSearch && matchesCategory;
  });

  //Sorting the Resources
  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    return b.rating - a.rating;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="mt-4 text-slate-400">
          Browse useful tools and resources for developers
        </p>

        <input
          type="text"
          placeholder="Search Resources"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-8 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 pl-4 appearance-none py-3 mt-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "name" | "rating")}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 appearance-none py-3  mt-2"
        >
          <option value="name">Name A-Z</option>
          <option value="rating">Highest Rating</option>
        </select>

        <div className="mt-10">
          {sortedResources.length > 0 ? (
            <ResourceGrid resources={sortedResources} />
          ) : (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-xl font-semibold text-white">
                No Resources Found
              </h2>
              <p className="mt-2 text-slate-400">
                Try Changing Your Search or Category Filter.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-5 rounded-lg bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Resources;
