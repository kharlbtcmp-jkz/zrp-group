import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import products from "../data/products.js";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-violet-950">Product not found</h1>
        <Link to="/items" className="btn border-none bg-violet-700 text-white hover:bg-violet-800">
          Back to items
        </Link>
      </section>
    );
  }

  function handleAdd() {
    addToCart(product, quantity);
    setAdded(true);
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-lg shadow-violet-200/50">
        <div className="grid md:grid-cols-2">
          <div className="bg-violet-50 p-6">
            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-full rounded-xl object-cover shadow-md md:h-full md:min-h-96"
            />
          </div>
          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div>
              <span className="badge border-none bg-violet-100 font-semibold text-violet-800">
                {product.category}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold text-violet-950">{product.name}</h1>
              <p className="mt-3 leading-relaxed text-slate-600">{product.description}</p>
            </div>

            <p className="text-3xl font-extrabold text-violet-700">PHP {product.price}</p>

            <div className="border-t border-violet-100 pt-5">
              <p className="mb-2 text-sm font-semibold text-violet-950">Quantity</p>
              <div className="inline-flex items-center overflow-hidden rounded-lg border border-violet-200 bg-violet-50">
                <button
                  className="btn btn-ghost rounded-none text-violet-800 hover:bg-violet-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="min-w-20 text-center font-semibold text-violet-950">Qty: {quantity}</span>
                <button
                  className="btn btn-ghost rounded-none text-violet-800 hover:bg-violet-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-violet-950 px-5 py-4 text-white">
              <span className="text-violet-200">Total</span>
              <span className="text-xl font-bold">PHP {product.price * quantity}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="btn flex-1 border-none bg-violet-700 text-white hover:bg-violet-800"
                onClick={handleAdd}
              >
                Add to cart
              </button>
              <button
                className="btn border-violet-300 bg-white text-violet-800 hover:bg-violet-50"
                onClick={() => navigate(-1)}
              >
                Go back
              </button>
            </div>

            {added && (
              <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Added to cart.{" "}
                <Link to="/checkout" className="font-semibold underline">
                  View cart
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}