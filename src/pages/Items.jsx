import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.js";

const categories = ["All", "Smartphones", "Accessories"];

export default function Items() {
  const [category, setCategory] = useState("All");

  const filtered = products.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mb-1 text-3xl font-extrabold text-slate-900">Products</h1>
      <p className="mb-6 text-slate-500">Browse our smartphones and mobile accessories.</p>

      <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {categories.map((c) => (
          <button
            key={c}
            className={`btn btn-sm rounded-full ${
              category === c
                ? "border-none bg-violet-700 text-white"
                : "border-slate-300 bg-white text-slate-700"
            }`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </section>
  );
}
