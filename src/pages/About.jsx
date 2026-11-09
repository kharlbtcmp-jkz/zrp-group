import { Link } from "react-router";

const values = [
  {
    title: "Quality gadgets",
    text: "Every smartphone and accessory we sell is chosen for reliable everyday performance.",
  },
  {
    title: "Fair prices",
    text: "From a PHP 350 case to a flagship phone, we keep our prices straightforward and affordable.",
  },
  {
    title: "Easy ordering",
    text: "Pay with Cash on Delivery, GCash or Bank Transfer and place your order in a few steps.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">About ZRP-GROUP</h1>
        <p className="mx-auto max-w-2xl leading-relaxed text-slate-600">
          ZRP-GROUP sells smartphones and mobile accessories for people who want
          dependable gadgets without overpaying. Whether you are upgrading your
          phone or just need a charger, we make it simple to find the right
          product and order it.
        </p>
      </div>

      <div className="mb-10 rounded-2xl bg-violet-950 p-8 text-white shadow-md">
        <h2 className="mb-2 text-xl font-bold">What we offer</h2>
        <p className="leading-relaxed text-violet-100">
          Our range covers the ZRP smartphone line, from the Lite 5G to the Pro
          Max, along with everyday essentials such as wireless earbuds, fast
          chargers and shockproof cases.
        </p>
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 font-bold text-slate-900">{v.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{v.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/items" className="btn border-none bg-violet-700 px-8 text-white hover:bg-violet-800">
          Shop our products
        </Link>
      </div>
    </section>
  );
}
