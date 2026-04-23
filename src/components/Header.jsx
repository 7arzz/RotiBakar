import { motion } from "framer-motion";
import { ChevronDown, Flame, MapPin, Clock, Star } from "./Icons";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="navbar-brand">
          <div className="navbar-logo">🍞</div>
          <div>
            <div className="navbar-title">Roti Bakar Tarzz</div>
            <div className="navbar-subtitle">The Artisan Bakery</div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-status">
            <span className="navbar-status-dot" />
            <span className="text-xs fw-800">OPEN NOW</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Flame size={14} className="text-accent" fill="currentColor" />
            <span className="text-xs fw-700">Artisan Brioche Toast</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Taste the <br />
            <span className="accent-text italic">Golden Perfection</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Indulge in our thick-cut, charcoal-grilled brioche toast, slathered with Belgian chocolate and premium toppings. A symphony of warmth and sweetness in every bite.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="hero-feature">
              <MapPin size={16} className="text-accent" />
              <span>Sidoarjo, East Java</span>
            </div>
            <div className="hero-feature">
              <Clock size={16} className="text-accent" />
              <span>16:00 — 22:00</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-xs fw-700">EXPLORE MENU</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="image-card glass">
            <img src="/hero.png" alt="Premium Roti Bakar" className="hero-image-main" />
            <div className="image-overlay" />
            
            <motion.div 
              className="experience-tag glass"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="rating-pill">
                <Star size={14} fill="var(--accent)" className="text-accent" />
                <span className="fw-800">4.9</span>
              </div>
              <div>
                <div className="text-xs fw-700">TOP RATED</div>
                <div className="text-[10px] text-muted">IN SIDOARJO</div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Element */}
          <motion.div 
            className="floating-badge glass"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🍫 Premium Selai
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
