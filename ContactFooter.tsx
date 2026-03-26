import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const cities = [
  "Miami", "Fort Lauderdale", "Plantation", "Weston", "Boca Raton", 
  "Aventura", "Coral Springs", "Tamarac", "Hollywood", "Kendall", 
  "Pembroke Pines", "Lighthouse Point", "Wellington", "Palm Beach Gardens", 
  "Royal Palm Beach", "Boynton Beach", "Cooper City", "Hialeah", "Orlando"
];

interface AuthoritySectionProps {
  onCtaClick?: () => void;
}

const AuthoritySection: React.FC<AuthoritySectionProps> = ({ onCtaClick }) => {
  return (
    <section 
      id="experience-authority" 
      className="relative min-h-[700px] flex items-center justify-center py-[60px] overflow-hidden scroll-mt-20"
    >
      {/* 1. Visual Foundation: HQ Anchor */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://drive.google.com/uc?export=download&id=1aJhzDie4yBNBWkWcttYvr7BNAUKMfgGz" 
          alt="United Realty Group Headquarters – 1200 S Pine Island Rd"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) contrast(1.1) saturate(1.2) sepia(0.1)' }}
          referrerPolicy="no-referrer"
        />
        {/* Sunset Golden Hour Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-charcoal/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,164,107,0.15),_transparent_70%)]"></div>
      </div>

      {/* 2. Institutional Branding & Typography */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-serif font-bold text-bone tracking-tight uppercase mb-10 leading-tight" 
          style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}
        >
          UNITED REALTY GROUP: <br className="hidden md:block" /> FLORIDA’S #1 TRANSACTIONAL BROKERAGE
        </motion.h2>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-10"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-bone font-sans font-bold text-[10px] md:text-sm uppercase tracking-[0.35em]" 
          style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}
        >
          <span>4,000+ ACTIVE AGENTS</span>
          <span className="hidden md:inline text-gold opacity-50">|</span>
          <span>19 SOUTH FLORIDA OFFICES</span>
          <span className="hidden md:inline text-gold opacity-50">|</span>
          <span>INSTITUTIONAL REACH</span>
        </motion.div>

        {/* 4. Affiliation Logic: The Carlos Connection */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 glass-card bg-charcoal/70 backdrop-blur-xl border border-gold/40 px-8 md:px-16 py-8 rounded-sm shadow-[0_30px_100px_rgba(0,0,0,0.7)] transform hover:scale-105 transition-transform duration-500"
        >
          <p className="text-gold text-[10px] md:text-sm font-bold uppercase tracking-[0.25em] text-center leading-relaxed">
            CARLOS UZCATEGUI: 25 YEARS OF LICENSED MASTERY <br className="hidden md:block" /> UNDER THE ROOF OF FLORIDA'S LEADING FIRM.
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={onCtaClick}
          className="mt-16 px-14 py-6 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-sm text-[10px] uppercase tracking-ultra transition-all shadow-2xl active:scale-95 group"
        >
          <span className="flex items-center gap-3">
            Request Strategic Consultation
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </div>

      {/* Institutional Reach Infinite Marquee */}
      <div className="absolute bottom-0 w-full z-30 pt-10 border-t border-white/5 bg-charcoal/20 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center py-4">
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex shrink-0">
                {cities.map((city, idx) => (
                  <div key={idx} className="flex items-center px-12">
                    <span className="text-[9px] font-bold uppercase tracking-ultra text-bone/90 hover:text-gold transition-colors cursor-default" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                      {city}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-gold/30 ml-12"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;