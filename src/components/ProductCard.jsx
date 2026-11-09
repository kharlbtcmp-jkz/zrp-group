import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-lg shadow-violet-200/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-400 hover:shadow-[0_0_45px_8px_rgba(139,92,246,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full bg-slate-100 object-cover"
      />
      <div className="card-body items-center gap-1 text-center">
        <span className="badge border-none bg-violet-100 text-violet-800">
          {product.category}
        </span>
        <h3 className="card-title mt-2 text-slate-900">{product.name}</h3>
        <p className="text-lg font-bold text-violet-800">PHP {product.price}</p>
        <Link to={`/items/${product.id}`} className="btn mt-3 w-full border-none bg-violet-700 text-white hover:bg-violet-800">
          View details
        </Link>
      </div>
    </div>
  );
}
