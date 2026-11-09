import { useState } from "react";
import { Link, useNavigate } from "react-router";

const fieldClass =
  "w-full border-violet-200 bg-violet-50 text-slate-900 placeholder:text-slate-400 " +
  "focus:border-violet-600 focus:bg-white focus:outline-2 focus:outline-offset-0 focus:outline-violet-300";

export default function Form({ cart, clearCart }) {
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    address: "",
    payment: "Cash on Delivery",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleSubmit(e) {
    e.preventDefault();

    // Snapshot of the order, passed to the summary page through router state
    const order = {
      orderNumber: `ZRP-${Date.now().toString()}`,
      date: new Date().toLocaleString(),
      customer,
      items: cart,
      total,
    };

    clearCart();
    navigate("/summary", { state: { order } });
  }

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-slate-900">Nothing to order yet</h1>
        <Link to="/items" className="btn border-none bg-violet-700 text-white hover:bg-violet-800">
          Browse items
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <h1 className="mb-1 text-center text-3xl font-extrabold text-violet-950">Order form</h1>
      <p className="mb-6 text-center text-slate-500">Enter your details to complete your order.</p>

      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-lg shadow-violet-200/50">
        <div className="bg-linear-to-r from-violet-950 to-violet-700 px-6 py-4 text-white">
          <h2 className="font-bold">Delivery details</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm font-semibold text-violet-950">
              Full name
            </label>
            <input
              id="fullName"
              className={`input input-bordered ${fieldClass}`}
              name="fullName"
              placeholder="Full name"
              value={customer.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-violet-950">
              Email
            </label>
            <input
              id="email"
              className={`input input-bordered ${fieldClass}`}
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="mb-1 block text-sm font-semibold text-violet-950">
              Delivery address
            </label>
            <textarea
              id="address"
              className={`textarea textarea-bordered h-28 ${fieldClass}`}
              name="address"
              placeholder="Delivery address"
              value={customer.address}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="payment" className="mb-1 block text-sm font-semibold text-violet-950">
              Payment method
            </label>
            <select
              id="payment"
              className={`select select-bordered ${fieldClass}`}
              name="payment"
              value={customer.payment}
              onChange={handleChange}
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Ewallet">Ewallet</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="rounded-xl bg-violet-50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-violet-950">Your order</h3>
            <ul className="flex flex-col gap-1 text-sm text-slate-600">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between gap-4">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>PHP {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-between border-t border-violet-200 pt-3 font-bold text-violet-950">
              <span>Total</span>
              <span className="text-violet-700">PHP {total}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn border-none bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-300 disabled:text-white"
            disabled={customer.address.length < 5}
          >
            Place order
          </button>
        </form>
      </div>
    </section>
  );
}
