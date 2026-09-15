import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Developer Resource Explorer</h1>
        <p className="mt-4 text-slate-400">
          Discover useful tools and resources for developers
        </p>
        <Link
          to="/resources"
          className="mt-6 inline-block text-sky-400 hover:text-sky-300"
        >
          Browse Resources
        </Link>
      </div>
    </main>
  );
};

export default Home;
