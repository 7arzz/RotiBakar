import { motion } from "framer-motion";
import { Instagram, MessageCircle, MapPin, Clock, Phone, Heart, CreditCard, Send } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <motion.div
        className="footer-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo">🍞</div>
          <h3>Roti Bakar Tarzz</h3>
          <p className="footer-about">
            Menghadirkan kebahagiaan melalui roti brioche panggang artisan dengan bahan-bahan premium pilihan di setiap gigitan.
          </p>
          <div className="footer-socials">
            <motion.a href="#" whileHover={{ y: -3 }} className="social-link instagram">
              <Instagram size={18} />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="social-link whatsapp">
              <MessageCircle size={18} />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="social-link tiktok">
              <Send size={18} /> {/* Using Send as TikTok placeholder */}
            </motion.a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-title">Navigasi</h4>
          <ul className="footer-links">
            <li><a href="#menu">Varian Roti</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#order">Cara Pesan</a></li>
            <li><a href="#location">Lokasi Outlet</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-title">Kontak Kami</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} className="text-accent" />
              <span>Sidoarjo, Jawa Timur</span>
            </li>
            <li>
              <Clock size={16} className="text-accent" />
              <span>16:00 — 22:00 WIB</span>
            </li>
            <li>
              <Phone size={16} className="text-accent" />
              <span>0812-3456-7890</span>
            </li>
          </ul>
        </div>

        {/* Payments Column */}
        <div className="footer-col">
          <h4 className="footer-title">Pembayaran</h4>
          <div className="payment-methods">
            <div className="payment-badge glass">Dana</div>
            <div className="payment-badge glass">GoPay</div>
            <div className="payment-badge glass">OVO</div>
            <div className="payment-badge glass">QRIS</div>
          </div>
          <div className="footer-certified">
            <CreditCard size={14} className="text-muted" />
            <span className="text-[10px] fw-700 text-muted uppercase tracking-wider">Secure Payment</span>
          </div>
        </div>
      </motion.div>

      <div className="footer-bottom">
        <div className="footer-divider" />
        <div className="footer-bottom-content">
          <p className="footer-copy">
            © {year} <strong>Roti Bakar Tarzz</strong>. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={12} className="text-accent" fill="currentColor" /> in Sidoarjo
          </p>
        </div>
      </div>
    </footer>
  );
}
