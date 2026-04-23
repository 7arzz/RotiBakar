import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, X, MessageCircle, Plus, Minus } from "./Icons";

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const fmt = (p) => `Rp ${p.toLocaleString("id-ID")}`;

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart((prev) => {
      const newCart = [...prev];
      const newQty = newCart[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      newCart[index] = { ...newCart[index], quantity: newQty };
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const itemsText = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.roti} (x${item.quantity})\n   Selai: ${item.selai}\n   Topping: ${item.topping}\n   Subtotal: ${fmt(item.price * item.quantity)}`
      )
      .join("\n\n");

    const message = `Halo, saya mau pesan:\n\n${itemsText}\n\n💰 Total: ${fmt(total)}`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="cart-head">
        <div className="cart-head-left">
          <ShoppingBag size={20} className="text-accent" />
          <h3 className="text-[1.125rem]">Pesanan</h3>
          {cart.length > 0 && (
            <motion.span
              className="cart-badge"
              key={cart.length}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </motion.span>
          )}
        </div>
        {cart.length > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={clearCart}>
            <Trash2 size={14} />
            <span className="text-xs fw-700">Kosongkan</span>
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <ShoppingBag size={48} className="cart-empty-icon text-muted" strokeWidth={1} />
          <p className="fw-700 text-secondary">Belum ada pesanan</p>
          <p className="text-muted text-sm">Pilih varian roti dan racik pesananmu</p>
        </div>
      ) : (
        <>
          <div className="cart-items-scroll">
            <AnimatePresence mode="popLayout">
              {cart.map((item, i) => (
                <motion.div
                  key={`${item.roti}-${item.selai}-${item.topping}`}
                  className="cart-entry"
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="cart-entry-name">{item.roti}</div>
                      <div className="cart-entry-meta">
                        {item.selai && <div>• Selai: {item.selai}</div>}
                        {item.topping && item.topping !== "-" && <div>• Topping: {item.topping}</div>}
                      </div>
                    </div>
                    <button
                      className="btn btn-ghost btn-sm p-1"
                      onClick={() => removeItem(i)}
                      title="Hapus"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="cart-entry-foot">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-white border border-strong rounded-lg overflow-hidden">
                        <button 
                          className="btn btn-ghost btn-sm px-2 h-8"
                          onClick={() => updateQuantity(i, -1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm fw-800 min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          className="btn btn-ghost btn-sm px-2 h-8"
                          onClick={() => updateQuantity(i, 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <span className="cart-entry-price">{fmt(item.price * item.quantity)}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="cart-checkout">
            <div className="cart-checkout-total">
              <span className="text-sm fw-700 text-muted">
                {cart.reduce((acc, item) => acc + item.quantity, 0)} ITEMS
              </span>
              <motion.span
                className="cart-checkout-price"
                key={total}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {fmt(total)}
              </motion.span>
            </div>
            <motion.button
              className="btn btn-wa btn-lg btn-block"
              onClick={handleCheckout}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} />
              <span>Pesan via WhatsApp</span>
            </motion.button>
          </div>
        </>
      )}
    </>
  );
}
