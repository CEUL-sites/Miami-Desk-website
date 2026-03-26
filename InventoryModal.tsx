
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Award } from 'lucide-react';

const MIAMI_IMAGES = [
  "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80", // Miami Skyline Golden Hour
  "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1600&q=80", // Miami Beach Sunset
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80", // Modern Architecture
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80", // Luxury Interior
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1600&q=80"  // Modern Glass
];

const SPAIN_IMAGES = [
  "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80", // Madrid Sunset
  "https://images.unsplash.com/photo-1543783232-17835841fefb?auto=format&fit=crop&w=1600&q=80", // Spanish Architecture
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80", // Mediterranean Villa
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80", // Luxury Pool Dusk
  "https://images.unsplash.com/photo-1558642084-fd07fae52827?auto=format&fit=crop&w=1600&q=80"  // Seville Sunset
];

const SLIDES = [...MIAMI_IMAGES, ...SPAIN_IMAGES];

interface HeroProps {
  onMiamiClick: () => void;
  onSpainClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onMiamiClick, onSpainClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        {SLIDES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? 'ken-burns' : ''}`}
              style={{ backgroundImage: `url("${img}")` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90 z-[1]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-12 md:mt-0">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-5 py-2 mb-8 text-[10px] font-bold tracking-ultra text-gold uppercase bg-gold/10 border border-gold/40 backdrop-blur-md rounded-full"
        >
          Market Mastery Since 2001 | Licensed Florida Representation
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-bone leading-[1.1] tracking-tight mb-8 drop-shadow-2xl"
        >
          Where Global Capital <br className="hidden md:block"/> 
          <span className="text-gold italic">Meets Local Mastery.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-bone/90 max-w-3xl mx-auto mb-12 font-medium tracking-luxury leading-relaxed drop-shadow-md px-4"
        >
          Strategic reach across <span className="text-gold font-bold">South Florida, LatAm & Spain</span>. Every listing is exported globally via <span className="underline decoration-gold/50">The Miami Desk</span> network, connecting global capital with premium local real estate
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <button 
            onClick={onMiamiClick}
            className="w-full sm:w-auto px-12 py-5 bg-gold text-charcoal font-bold rounded-sm text-[10px] uppercase tracking-ultra hover:bg-bone transition-all shadow-2xl transform hover:-translate-y-1 active:scale-95"
          >
            Request Global Listing Strategy
          </button>
          <button 
            onClick={onSpainClick}
            className="w-full sm:w-auto px-12 py-5 bg-transparent text-bone font-bold rounded-sm text-[10px] uppercase tracking-ultra border border-bone/40 hover:border-gold hover:text-gold backdrop-blur-md transition-all transform hover:-translate-y-1 active:scale-95"
          >
            B2B Referral Bridge
          </button>
        </motion.div>

        {/* Global Stats Counter */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-95 bg-charcoal/60 backdrop-blur-xl p-8 rounded-sm border border-white/5 shadow-2xl mx-4"
        >
          <div className="flex flex-col items-center">
            <span className="text-gold font-serif font-bold text-3xl md:text-4xl italic">25+</span>
            <span className="text-[9px] text-bone uppercase tracking-ultra font-bold mt-1">Years Mastery</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-gold font-serif font-bold text-3xl md:text-4xl italic">B2B</span>
            <span className="text-[9px] text-bone uppercase tracking-ultra font-bold mt-1">Referral Bridge</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-gold font-serif font-bold text-3xl md:text-4xl italic">100%</span>
            <span className="text-[9px] text-bone uppercase tracking-ultra font-bold mt-1">Licensed Compliance</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce"
      >
        <span className="text-[9px] text-bone uppercase tracking-ultra font-bold mb-2">Explore Reach</span>
        <div className="w-px h-10 bg-bone"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
