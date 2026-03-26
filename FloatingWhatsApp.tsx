
import React from 'react';
import { motion } from 'motion/react';
import { Search, Home, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  onMiamiClick: () => void;
  onSpainClick: () => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onMiamiClick, onSpainClick }) => {
  return (
    <section 
      id="experience" 
      className="relative py-32 overflow-hidden text-bone"
    >
      {/* Luxury Boardroom Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Agents Meeting Room" 
          className="w-full h-full object-cover opacity-50 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/90"></div>
        
        {/* Subtle Grid Overlay for "Institutional" feel */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Content Side */}
          <div className="w-full max-w-6xl py-12 px-8 md:px-12 rounded-[3rem] bg-charcoal/40 backdrop-blur-xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
            {/* Carlos Header Identity - Fixed Alignment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 flex justify-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-gold/40"></div>
                <p className="text-gold text-[11px] font-bold uppercase tracking-[0.3em]">
                  Carlos Uzcategui <span className="mx-3 text-bone/20">|</span> Strategic Institutional Advisor
                </p>
                <div className="w-12 h-[1px] bg-gold/40"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-16 text-center"
            >
              <h2 className="text-6xl md:text-8xl font-serif font-bold leading-[1.05] tracking-tighter text-bone mb-10">
                Real Estate is Local. <br/>
                <span className="text-gold italic font-light">Strategic Reach is Global.</span>
              </h2>
            </motion.div>

            {/* Strategic Image - Rounded Corners with Glass Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-20 w-full relative group"
            >
              <div className="absolute -inset-4 bg-gold/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative glass-card p-2 rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1BZEPe-XYym7GJttXB_C-fGmB4aSXzSbO" 
                  alt="Strategic Global Reach Dashboard" 
                  className="w-full h-auto rounded-[2rem] border border-gold/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <div className="text-left w-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16 max-w-4xl"
              >
                <div className="flex items-start gap-8">
                  <div className="w-1.5 h-24 bg-gold/30 rounded-full shrink-0"></div>
                  <p className="text-2xl text-bone/80 font-medium tracking-luxury leading-relaxed italic">
                    "Carlos Uzcategui provides the licensed US framework required to bridge South Florida inventory with international capital through a professional B2B compliance hub."
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                {/* Branding */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="group transition-all duration-700 p-8 rounded-sm border border-white/5 hover:border-gold/20 hover:bg-gold/[0.02] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl -mr-12 -mt-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/60 transition-all duration-500 bg-charcoal/40 backdrop-blur-md">
                      <Search className="w-8 h-8 text-gold/80 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight text-bone">Branding</h3>
                      <p className="text-bone/40 text-sm leading-relaxed font-medium tracking-luxury group-hover:text-bone/60 transition-colors">
                        Establishing institutional authority through high-end strategic positioning and market-leading identity that resonates with global investors.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Institutional Bridge */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="group transition-all duration-700 p-8 rounded-sm border border-white/5 hover:border-gold/20 hover:bg-gold/[0.02] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl -mr-12 -mt-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/60 transition-all duration-500 bg-charcoal/40 backdrop-blur-md">
                      <Building2 className="w-8 h-8 text-gold/80 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight text-bone">Institutional Bridge</h3>
                      <p className="text-bone/40 text-sm leading-relaxed font-medium tracking-luxury group-hover:text-bone/60 transition-colors">
                        We orchestrate elite B2B referral networks that bridge institutional capital and high-tier inventory, ensuring seamless cross-border transactions.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Global Positioning */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="group transition-all duration-700 p-8 rounded-sm border border-white/5 hover:border-gold/20 hover:bg-gold/[0.02] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl -mr-12 -mt-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/60 transition-all duration-500 bg-charcoal/40 backdrop-blur-md">
                      <Globe className="w-8 h-8 text-gold/80 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight text-bone">Global Positioning</h3>
                      <p className="text-bone/40 text-sm leading-relaxed font-medium tracking-luxury group-hover:text-bone/60 transition-colors">
                        We transform local listings into global investment assets through high-precision syndication across 200+ international portals.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1 }}
                className="flex flex-col sm:flex-row gap-8 justify-center"
              >
                <button 
                  onClick={onMiamiClick}
                  className="px-12 py-6 bg-gold text-charcoal font-bold rounded-sm text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 group active:scale-95 shadow-[0_20px_40px_-15px_rgba(201,164,107,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(201,164,107,0.5)]"
                >
                  <span>Request Capital Report</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={onSpainClick}
                  className="px-12 py-6 bg-transparent border border-white/10 hover:border-gold hover:text-gold text-bone/60 font-bold rounded-sm text-[11px] uppercase tracking-[0.2em] transition-all active:scale-95 backdrop-blur-sm"
                >
                  Spain Hub Desk
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
