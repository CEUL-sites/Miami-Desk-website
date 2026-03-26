import React from 'react';
import { motion } from 'motion/react';
import { Phone, Globe, ArrowRight } from 'lucide-react';

interface ContactFooterProps {
  onMiamiClick: () => void;
  onSpainClick: () => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ onMiamiClick, onSpainClick }) => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#0B0D10] to-[#1A1C1E] pt-20 pb-16 text-bone overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          
          {/* Left Column: Profile & Strategy */}
          <div className="flex flex-col space-y-12">
            {/* Professional Headshot & Identity */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-8"
            >
              <div className="relative shrink-0">
                <img 
                  src="https://lh3.googleusercontent.com/d/1AwIvK-WGK4nZovcXnTDpSjh_acN-GJg1" 
                  alt="Carlos Uzcategui – Licensed Florida Realtor and International Real Estate Advisor" 
                  className="w-[80px] h-[80px] rounded-full border border-gold object-cover object-top shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-charcoal"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-bone uppercase">CARLOS UZCATEGUI</h3>
                <p className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[2px]">
                  Licensed Florida Realtor® | EST. 2001
                </p>
              </div>
            </motion.div>

            {/* Strategy Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold leading-[1.1] text-bone">Ready to move? <br className="hidden md:block"/> Let's talk strategy.</h2>
              <p className="text-bone/40 text-xl max-w-lg leading-relaxed font-medium tracking-luxury">
                Whether you are listing a Miami luxury estate or seeking a prime investment in Spain, our 25+ years of cross-border expertise is your greatest asset.
              </p>
            </motion.div>

            {/* Visible Direct Contact Info */}
            <div className="grid sm:grid-cols-2 gap-12 pt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-5 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-ultra text-bone/30">Miami / USA Hub</span>
                </div>
                <div className="pl-14">
                  <a href="tel:+19548656622" aria-label="Call Miami Strategy & Exposure Desk" className="text-2xl font-serif font-bold text-bone hover:text-gold transition-colors block leading-none tracking-tight">+1 (954) 865-6622</a>
                  <p className="text-[10px] text-bone/20 mt-3 font-bold uppercase tracking-luxury">United Realty Group Associate</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-5 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-ultra text-bone/30">Spain Executive Desk</span>
                </div>
                <div className="pl-14">
                  <a href="tel:+34646853078" aria-label="Call Spain International Migration Desk" className="text-2xl font-serif font-bold text-bone hover:text-gold transition-colors block leading-none tracking-tight">+34 646 853 078</a>
                  <p className="text-[10px] text-bone/20 mt-3 font-bold uppercase tracking-luxury">Madrid-based coordination</p>
                </div>
              </motion.div>
            </div>

            {/* Corporate Office Info */}
            <div className="pt-12 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-ultra text-gold mb-5">Brokerage & Corporate Office</p>
              <div className="text-sm text-bone/40 space-y-2 font-medium leading-relaxed tracking-luxury uppercase">
                <p>United Realty Group – Corporate Headquarters</p>
                <p>1200 S. Pine Island Rd, Suite 600</p>
                <p>Plantation, FL 33324</p>
                <p className="pt-3 text-bone/60">Office: (954) 450-2000</p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col justify-start"
          >
            <div className="bg-bone rounded-sm p-10 md:p-16 text-charcoal shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
              <h3 className="text-2xl font-serif font-bold mb-10 uppercase tracking-tight">Direct Channels</h3>
              <div className="space-y-6">
                <button onClick={onMiamiClick} className="w-full flex items-center justify-between p-8 bg-charcoal/5 border border-charcoal/10 rounded-sm group hover:border-gold transition-all text-left">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white mr-6 shadow-xl">
                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.438 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-charcoal text-xl tracking-tight">Miami / USA WhatsApp</p>
                      <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-ultra">+1 (954) 865-6622</p>
                    </div>
                  </div>
                  <ArrowRight className="text-charcoal/20 group-hover:text-gold group-hover:translate-x-2 transition-all duration-500 w-5 h-5" />
                </button>
                <button onClick={onSpainClick} className="w-full flex items-center justify-between p-8 bg-charcoal/5 border border-charcoal/10 rounded-sm group hover:border-gold transition-all text-left">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-charcoal mr-6 shadow-xl">
                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.438 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-charcoal text-xl tracking-tight">Spain Executive WhatsApp</p>
                      <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-ultra">+34 646 853 078</p>
                    </div>
                  </div>
                  <ArrowRight className="text-charcoal/20 group-hover:text-gold group-hover:translate-x-2 transition-all duration-500 w-5 h-5" />
                </button>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-10 border border-white/5 rounded-sm bg-white/5 backdrop-blur-sm"
            >
              <p className="text-[10px] font-bold uppercase tracking-ultra text-gold mb-5 italic">Strategic Advisory</p>
              <p className="text-sm text-bone/40 font-medium leading-relaxed tracking-luxury uppercase">
                Connect directly with our desks to discuss capital migration, asset positioning, or structured cross-border acquisition.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Final Professional Disclaimer / Footer */}
        <div className="pt-16 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-5">
            <div className="text-bone/30 text-[9px] md:text-[10px] leading-relaxed max-w-3xl font-medium tracking-luxury uppercase italic">
              <p>Licensed Real Estate Associate in the State of Florida. All U.S. real estate services provided through United Realty Group.</p>
              <p>International coordination conducted with licensed professionals in each applicable jurisdiction.</p>
            </div>
            <p className="text-bone/20 text-[10px] uppercase tracking-ultra font-bold">
              © 2026 HomesProfessional.com • The Miami Desk Network
            </p>
          </div>
          <div className="flex space-x-12">
            <a href="#" className="text-bone/30 hover:text-gold text-[10px] font-bold uppercase tracking-ultra transition-all duration-500">LinkedIn</a>
            <a href="#" className="text-bone/30 hover:text-gold text-[10px] font-bold uppercase tracking-ultra transition-all duration-500">Instagram</a>
            <a href="#" className="text-bone/30 hover:text-gold text-[10px] font-bold uppercase tracking-ultra transition-all duration-500">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;