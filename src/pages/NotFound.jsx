import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="mb-4 text-3xl font-extrabold text-slate-900">404 - Page not found</h1>
      <Link to="/" className="btn border-none bg-violet-700 text-white hover:bg-violet-800">Go to Home</Link>
    </section>
  );
}
