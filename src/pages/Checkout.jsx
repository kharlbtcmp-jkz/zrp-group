import { Link } from "react-router";
import CartItem from "../components/CartItem.jsx";

export default function Checkout({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-slate-900">Your cart is empty</h1>
        <Link to="/items" className="btn border-none bg-violet-700 text-white hover:bg-violet-800">
          Browse items
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-3xl font-extrabold text-slate-900">Checkout</h1>

      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-right text-xl font-bold text-slate-900">
          Total: <span className="text-violet-800">PHP {total}</span>
        </p>

        <div className="mt-4 text-right">
          <Link to="/form" className="btn border-none bg-violet-700 px-8 text-white hover:bg-violet-800">
            Continue to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
