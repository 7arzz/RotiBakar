import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roti, selai, topping } from "../data/data";
import SelaiSelector from "./SelaiSelector";
import ToppingSelector from "./ToppingSelector";
import { useToast } from "./Toast";
import { Plus, Check, ShoppingBag, Sparkles } from "lucide-react";

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

  const fmt = (p) => `Rp ${p.toLocaleString("id-ID")}`;

  const handleAddToCart = () => {
    if (selectedSelai.length === 0) {
      toast("Pilih minimal 1 selai favoritmu!", "warning");
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
    toast(`Berhasil! ${selectedRoti.name} masuk keranjang.`, "success");
  };

  return (
    <div className="menu-section">
      <div className="section-title-wrap">
        <div className="section-title-icon">
          <Sparkles size={20} className="text-accent" />
        </div>
        <div>
          <h2>Pilih Varian Roti</h2>
          <p className="text-muted text-sm">Brioche panggang lembut dengan mentega premium</p>
        </div>
      </div>

      <div className="menu-cards">
        {roti.map((r, idx) => (
          <motion.div
            key={r.id}
            className={`menu-card-luxury ${selectedRoti.id === r.id ? "active" : ""}`}
            onClick={() => {
              setSelectedRoti(r);
              setSelectedSelai([]);
            }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="card-luxury-head">
              <span className="card-luxury-emoji">{r.image}</span>
              <div className="card-luxury-price-tag">{fmt(r.price)}</div>
            </div>
            <div className="card-luxury-body">
              <div className="card-luxury-name">{r.name}</div>
              <p className="card-luxury-desc">{r.description}</p>
            </div>
            <div className="card-luxury-footer">
              <div className="card-luxury-badge">Max {r.maxSelai} Selai</div>
              {selectedRoti.id === r.id && (
                <motion.div layoutId="check" className="card-luxury-check">
                  <Check size={14} strokeWidth={4} />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="config-grid">
        <motion.div 
          className="config-card glass"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SelaiSelector
            selai={selai}
            selected={selectedSelai}
            setSelected={setSelectedSelai}
            max={selectedRoti.maxSelai}
          />
        </motion.div>

        <motion.div 
          className="config-card glass"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ToppingSelector
            topping={topping}
            selected={selectedTopping}
            setSelected={setSelectedTopping}
          />
        </motion.div>
      </div>

      <motion.div 
        className="order-bar glass"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="order-bar-info">
          <div className="text-xs fw-700 text-muted">TOTAL ESTIMASI</div>
          <motion.div 
            className="order-bar-price"
            key={totalHarga()}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
          >
            {fmt(totalHarga())}
          </motion.div>
        </div>
        <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
          <ShoppingBag size={18} />
          <span>Tambah ke Pesanan</span>
        </button>
      </motion.div>
    </div>
  );
}
