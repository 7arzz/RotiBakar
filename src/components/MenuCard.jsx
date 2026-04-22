import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roti, selai, topping } from "../data/data";
import SelaiSelector from "./SelaiSelector";
import ToppingSelector from "./ToppingSelector";
import { useToast } from "./Toast";

export default function MenuCard({ onAddToCart }) {
  const [selectedRoti, setSelectedRoti] = useState(roti[0]);
  const [selectedSelai, setSelectedSelai] = useState([]);
  const [selectedTopping, setSelectedTopping] = useState([]);
  const toast = useToast();

  const totalHarga = () => {
    let total = selectedRoti.price;
    selectedTopping.forEach((t) => (total += t.price));
    return total;
  };

  const fmt = (p) => `Rp${p.toLocaleString("id-ID")}`;

  const currentStep = () => {
    if (selectedSelai.length === 0) return 1;
    return 2;
  };

  const handleAddToCart = () => {
    if (selectedSelai.length === 0) {
      toast("Pilih minimal 1 selai dulu ya!", "warning");
      return;
    }

    const item = {
      roti: selectedRoti.name,
      selai: selectedSelai.map((s) => s.name).join(", "),
      topping:
        selectedTopping.length > 0
          ? selectedTopping.map((t) => t.name).join(", ")
          : "-",
      total: totalHarga(),
    };

    onAddToCart(item);
    setSelectedSelai([]);
    setSelectedTopping([]);
    toast(`${selectedRoti.name} ditambahkan ke keranjang!`, "success");
  };

  const handleQuickOrder = () => {
    if (selectedSelai.length === 0) {
      toast("Pilih minimal 1 selai dulu ya!", "warning");
      return;
    }

    const message = `Halo, saya mau pesan:\n${selectedRoti.name}\nSelai: ${selectedSelai.map((s) => s.name).join(", ") || "-"}\nTopping: ${selectedTopping.map((t) => t.name).join(", ") || "-"}\nTotal: ${fmt(totalHarga())}`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const step = currentStep();

  return (
    <div>
      {/* Step Indicators */}
      <div className="steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>
          <span className="step-num">1</span>
          Pilih Roti
        </div>
        <div className={`step-connector ${step > 1 ? "done" : ""}`} />
        <div className={`step ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
          <span className="step-num">2</span>
          Racik Pesanan
        </div>
      </div>

      {/* Section: Pilih Roti */}
      <div className="section-header">
        <div className="section-header-icon brown">🍞</div>
        <h2>Pilih Varian Roti</h2>
      </div>

      <div className="menu-cards">
        {roti.map((r, idx) => (
          <motion.div
            key={r.id}
            className={`menu-card ${selectedRoti.id === r.id ? "selected" : ""}`}
            onClick={() => {
              setSelectedRoti(r);
              setSelectedSelai([]);
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="menu-card-inner">
              <div className="menu-card-top">
                <span className="menu-card-emoji">{r.image}</span>
                <AnimatePresence>
                  {selectedRoti.id === r.id && (
                    <motion.div
                      className="menu-card-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      ✓
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="menu-card-name">{r.name}</div>
              <p className="menu-card-desc">{r.description}</p>
              <div className="menu-card-bottom">
                <span className="menu-card-price">{fmt(r.price)}</span>
                <span className="menu-card-tag">Max {r.maxSelai} selai</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section: Configurator */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="section-header-icon amber">🎨</div>
        <h2>Racik Pesananmu</h2>
      </motion.div>

      <motion.div
        className="configurator"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="config-section">
          <SelaiSelector
            selai={selai}
            selected={selectedSelai}
            setSelected={setSelectedSelai}
            max={selectedRoti.maxSelai}
          />
        </div>

        <hr className="divider" />

        <div className="config-section">
          <ToppingSelector
            topping={topping}
            selected={selectedTopping}
            setSelected={setSelectedTopping}
          />
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="summary-row">
            <span>{selectedRoti.name}</span>
            <span className="summary-price">{fmt(selectedRoti.price)}</span>
          </div>
          <AnimatePresence>
            {selectedTopping.map((t) => (
              <motion.div
                key={t.id}
                className="summary-row"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span>+ {t.name}</span>
                <span className="summary-price">{fmt(t.price)}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="summary-total">
            <span className="summary-total-label">Total</span>
            <motion.span
              className="summary-total-price"
              key={totalHarga()}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {fmt(totalHarga())}
            </motion.span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3" style={{ marginTop: "var(--sp-5)" }}>
          <motion.button
            className="btn btn-accent btn-lg btn-block"
            onClick={handleAddToCart}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            🛒 Tambah ke Keranjang
          </motion.button>
          <motion.button
            className="btn btn-outline btn-lg btn-icon-only"
            onClick={handleQuickOrder}
            title="Pesan langsung via WhatsApp"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            style={{ minWidth: 48, flexShrink: 0 }}
          >
            💬
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
