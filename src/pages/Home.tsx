import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Discover useful tools for modern developers.
          </h1>
          <p className="mt-4 text-slate-400">
            Discover useful tools and resources for developers
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Browse, search, filter, and save useful development resources in one
            place
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/resources"
              className="rounded-lg bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-400"
            >
              Explorer Resources
            </Link>
            <Link
              to="/favorites"
              className="rounded-lg bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-400"
            >
              Favorites
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
