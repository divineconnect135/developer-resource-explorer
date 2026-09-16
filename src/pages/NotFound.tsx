import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-center text-white">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-4 text-slate-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-sky-500 px-5 py-3 hover:bg-sky-400"
      >
        Go Home
      </Link>
    </main>
  );
}

export default NotFound;
