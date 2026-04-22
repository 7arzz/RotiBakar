import { motion } from "framer-motion";
import { ChevronDown, Flame, MapPin, Clock } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">🍞</div>
          <div>
            <div className="navbar-title">Roti Bakar Tarzz</div>
            <div className="navbar-subtitle">Luxury Artisan Bakery</div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-status">
            <span className="navbar-status-dot" />
            <span className="text-xs fw-700">OPEN NOW</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Flame size={14} fill="currentColor" />
            <span>Premium Charcoal Grilled Toast</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            The Ultimate <br />
            <span className="accent-text">Toast Experience</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Crafted with passion, melted with love. Our artisan brioche toast is grilled over charcoal and topped with the finest Belgian chocolate and premium toppings.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="hero-feature">
              <MapPin size={16} className="text-accent" />
              <span>Sidoarjo, East Java</span>
            </div>
            <div className="hero-feature">
              <Clock size={16} className="text-accent" />
              <span>Daily 4 PM — 10 PM</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-xs fw-600">START ORDERING</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="image-card">
            <img src="/hero.png" alt="Premium Roti Bakar" className="hero-image-main" />
            <div className="image-overlay" />
          </div>
          <div className="experience-tag">
            <span className="text-xl">⭐</span>
            <div>
              <div className="fw-800">4.9/5</div>
              <div className="text-xs fw-600">Customer Rating</div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
