import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import "../App.css";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showMobileCart, setShowMobileCart] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
      <Header />

      <main>
        <div className={`main-grid ${cart.length > 0 ? "has-cart" : ""}`}>
          {/* Menu & Configurator */}
          <section>
            <MenuCard onAddToCart={addToCart} />
          </section>

          {/* Desktop Cart */}
          {cart.length > 0 && (
            <motion.aside
              className="cart-panel"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key="desktop-cart"
            >
              <Cart cart={cart} setCart={setCart} />
            </motion.aside>
          )}
        </div>

        {/* Mobile Cart Sheet */}
        <AnimatePresence>
          {cart.length > 0 && showMobileCart && (
            <>
              <motion.div
                className="cart-sheet-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowMobileCart(false)}
              />
              <motion.div
                className="cart-sheet"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cart-sheet-handle" />
                <Cart cart={cart} setCart={setCart} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Cart FAB */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.button
            className="cart-fab"
            onClick={() => setShowMobileCart(!showMobileCart)}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            whileTap={{ scale: 0.9 }}
          >
            🛒
            <span className="cart-badge">{cart.length}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
