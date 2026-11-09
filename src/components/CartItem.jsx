export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 rounded-lg bg-slate-100 object-cover"
        />
        <div>
          <h3 className="font-bold text-slate-900">{item.name}</h3>
          <p className="text-sm text-slate-500">
            PHP {item.price} x {item.quantity}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <p className="font-bold text-violet-800">PHP {item.price * item.quantity}</p>
        <button className="btn btn-sm btn-outline btn-error" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
