import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <motion.div
        className="footer-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="footer-brand">
          <div className="footer-brand-logo">🍞</div>
          <h3>Roti Bakar Tarzz</h3>
        </div>

        <div className="footer-meta">
          <span className="footer-meta-item">📍 Sidoarjo, Jawa Timur</span>
          <span className="footer-meta-item">🕒 16.00 – 22.00 WIB</span>
          <span className="footer-meta-item">📱 0812-3456-7890</span>
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          © {year} Roti Bakar Tarzz · Dibuat dengan ❤️ untuk pecinta roti
        </p>
      </motion.div>
    </footer>
  );
}
