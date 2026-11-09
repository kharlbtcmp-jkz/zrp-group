import { Link, useLocation } from "react-router";

export default function OrderSummary() {
  const location = useLocation();
  const order = location.state?.order;

  // Happens if the page is opened directly or refreshed
  if (!order) {
    return (
      <section className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-slate-900">No order to show</h1>
        <p className="mb-6 text-slate-500">Place an order first to see its summary here.</p>
        <Link to="/items" className="btn border-none bg-violet-700 text-white hover:bg-violet-800">
          Browse items
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Thank you, {order.customer.fullName}!</h1>
        <p className="mt-2 text-slate-500">Your order has been placed.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        <div className="flex flex-col gap-1 bg-violet-950 px-6 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">Order {order.orderNumber}</p>
          <p className="text-sm text-violet-200">{order.date}</p>
        </div>

        <div className="grid gap-6 border-b border-slate-200 p-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-2 font-bold text-slate-900">Customer</h2>
            <p className="text-slate-700">{order.customer.fullName}</p>
            <p className="text-slate-500">{order.customer.email}</p>
          </div>
          <div>
            <h2 className="mb-2 font-bold text-slate-900">Delivery address</h2>
            <p className="whitespace-pre-line text-slate-700">{order.customer.address}</p>
          </div>
          <div>
            <h2 className="mb-2 font-bold text-slate-900">Payment method</h2>
            <p className="text-slate-700">{order.customer.payment}</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="mb-4 font-bold text-slate-900">Items ordered</h2>
          <div className="flex flex-col divide-y divide-slate-200">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-lg bg-slate-100 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">
                      PHP {item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-slate-900">PHP {item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
            <p className="text-lg font-bold text-slate-900">Total</p>
            <p className="text-2xl font-extrabold text-violet-800">PHP {order.total}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/items" className="btn border-none bg-violet-700 px-8 text-white hover:bg-violet-800">
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
