import { Link } from "react-router";
import homeBackground from "../img/Home.webp";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-top"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0c0314] via-[#0c0314]/85 to-[#1a0830]/40" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            ZRP-GROUP
          </h1>

          <p className="mt-3 text-xl font-medium text-violet-300 sm:text-2xl">
            Smartphones and mobile accessories
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-violet-100/80">
            Quality gadgets, trendy accessories, and reliable mobile essentials
            at prices you'll love.
          </p>

          <Link
            to="/items"
            className="btn btn-lg mt-9 rounded-md border-none bg-violet-700 px-10 text-white transition hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
}