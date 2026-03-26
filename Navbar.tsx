import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Market } from '../types';

interface MarketSectionProps {
  market: Market;
  onCtaClick: () => void;
  onSecondaryClick?: () => void;
}

const MarketSection: React.FC<MarketSectionProps> = ({ market, onCtaClick, onSecondaryClick }) => {
  const isSpain = market === Market.SPAIN;
  const isLatam = market === Market.LATAM;

  const contentMap = {
    [Market.MIAMI]: {
      title: "Seller Engine: Institutional Visibility",
      description: "We elevate traditional listings into high-liquidity global assets. Leveraging institutional-grade syndication and direct B2B bridges, we connect your property with ultra-high-net-worth capital across the USA, Europe, and Latin America.",
      stats: ["Institutional-Grade Global Syndication", "Licensed Florida Representation", "Direct Access to Global Capital Corridors"],
      image: "https://lh3.googleusercontent.com/d/1hkjeU-0X0M96ayyMUVreHgK9dDS_flby", // Seller Engine: Institutional Visibility
      cta: "Request Exposure Report"
    },
    [Market.SPAIN]: {
      title: "B2B Engine: The Referral Bridge",
      subLabel: "THE MIAMI DESK",
      description: "A professional B2B bridge converting international agencies and developers into referral partners. We offer a licensed US compliance bridge and Miami MLS integration, coordinating intake and global marketing for premium Spanish inventory.",
      stats: [
        "Licensed US Compliance Bridge", 
        "Direct Miami MLS Integration", 
        "Institutional Outreach to US Buyer Networks",
        "Strategic Reach for Spanish Developers"
      ],
      image: "https://lh3.googleusercontent.com/d/1MrDYH9rOEJeSh0zBd5t1mxsEHLKRBuJW", // The Bridge: Professional Workspace Symmetrical
      cta: "Access Referral Bridge",
      secondaryCta: "Explore Spain Strategy"
    },
    [Market.LATAM]: {
      title: "Buyer Engine: Market Mastery",
      description: "Providing local-first, data-driven insights based on 25 years of market history. We serve as a strategic bridge for Latin American capital, connecting investors with secure execution through licensed US professionals.",
      stats: [
        "25+ Years of Market Mastery",
        "Data-Driven Investment Insights",
        "Secure US Asset Access",
        "Licensed Representation & Compliance"
      ],
      complianceNote: "Strategic reach and market access support. All real estate services provided through licensed professionals in the applicable jurisdiction.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80", // The Lifestyle: Elite Living Dusk
      cta: "Request Market Insights"
    }
  };

  const latamMarkets = [
    'Mexico', 'Colombia', 'Venezuela', 'Brazil', 'Argentina', 
    'Peru', 'Uruguay', 'Caribbean', 'Panama'
  ];

  const data = contentMap[market];

  return (
    <motion.div 
      key={market}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid md:grid-cols-2 gap-0 items-stretch bg-charcoal rounded-sm overflow-hidden shadow-2xl transition-all duration-500 border border-white/5"
    >
      <div className="h-[500px] md:h-auto relative overflow-hidden group bg-charcoal">
        <motion.img 
          key={data.image}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={data.image} 
          alt={isLatam ? "Latin America capital corridors connecting Mexico, Colombia, Venezuela, Argentina, Brazil, Peru, Uruguay, Caribbean, and Panama with U.S. real estate markets." : market} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] group-hover:scale-115 brightness-[0.7] contrast-[1.1]"
        />
        
        {/* Partner Ecosystem Marquee for Spain */}
        {isSpain && (
          <div className="absolute top-0 left-0 w-full z-20 bg-charcoal/90 backdrop-blur-md border-b border-white/5 py-3 flex flex-col items-center">
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap items-center">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center shrink-0">
                    <span className="text-[8px] font-bold uppercase tracking-ultra text-gold/90 flex items-center">
                      Selected leading agencies & developers in Spain:
                    </span>
                    <span className="text-[8px] font-medium uppercase tracking-ultra text-bone/90 ml-4">
                      Neinor Homes • AEDAS Homes • Metrovacesa • Vía Célere • Kronos Homes • Habitat Inmobiliaria • Culmia • Pryconsa • Gestilar • Stoneweg Living • Amenabar • Lucas Fox • Engel & Völkers Spain • Sotheby’s International Realty Spain • Berkshire Hathaway HomeServices Spain
                    </span>
                    <div className="w-12 h-px bg-white/10 mx-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Institutional Grade Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/10 to-transparent opacity-80"></div>
        
        {isLatam && (
          <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 lg:p-16 pointer-events-none bg-gradient-to-t from-charcoal/90 via-transparent to-transparent">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                 <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_#C9A46B] animate-pulse"></div>
                 <span className="text-[10px] font-bold text-bone uppercase tracking-ultra bg-charcoal/70 backdrop-blur-2xl px-6 py-3 rounded-sm border border-white/10 shadow-2xl">
                   Capital flow from LatAm investors
                 </span>
               </div>
               <div className="flex flex-wrap gap-3 max-w-lg">
                 {latamMarkets.map(country => (
                   <span key={country} className="text-[10px] font-medium text-bone uppercase tracking-luxury bg-charcoal/90 backdrop-blur-md px-4 py-2 rounded-sm border border-white/5 shadow-xl transition-all duration-300">
                     {country}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-12 md:p-16 lg:p-24 text-bone flex flex-col justify-center">
        {data.subLabel && (
          <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-8 block">
            {data.subLabel}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-10 tracking-tight leading-[1.1] text-bone">
          {data.title}
        </h2>
        <p className="text-bone/70 text-lg md:text-xl mb-12 leading-relaxed font-medium tracking-luxury">
          {data.description}
        </p>
        
        <div className="space-y-6 mb-14">
          {data.stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start space-x-5 group/item"
            >
              <span className="mt-1.5 w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover/item:border-gold transition-colors">
                <Check className="w-3 h-3" />
              </span>
              <span className="text-bone/80 font-medium text-base md:text-lg tracking-luxury">{stat}</span>
            </motion.div>
          ))}
        </div>

        {data.complianceNote && (
          <div className="mb-12 p-6 bg-white/5 border-l border-gold/50">
            <p className="text-[9px] text-bone/50 font-bold uppercase tracking-ultra italic leading-relaxed">
              {data.complianceNote}
            </p>
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button 
            onClick={onCtaClick}
            className="px-10 py-5 bg-gold hover:bg-bone text-charcoal font-bold rounded-sm text-[10px] uppercase tracking-ultra transition-all transform shadow-2xl active:scale-95 flex items-center justify-center gap-4 group"
          >
            {data.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {isSpain && data.secondaryCta && onSecondaryClick && (
            <button 
              onClick={onSecondaryClick}
              className="px-10 py-5 bg-transparent border border-bone/20 hover:border-gold hover:text-gold text-bone font-bold rounded-sm text-[10px] uppercase tracking-ultra transition-all active:scale-95"
            >
              {data.secondaryCta}
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketSection;