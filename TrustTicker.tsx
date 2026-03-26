import React from 'react';
import { Star, CheckCircle2, Search, Building2, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    author: "Andres P.",
    location: "Weston, FL",
    content: "Our house went under contract 10 days after we put it on the market at 12% over asking price. Carlos was incredibly friendly and helpful."
  },
  {
    author: "Maria Isabel Onate",
    location: "Weston, FL",
    content: "Exceptional service... a deep understanding of the local housing market... superb communication skills. I wholeheartedly recommend Carlos."
  },
  {
    author: "Railiss 002 LLC",
    location: "Miami, FL",
    content: "Amazing negotiating skills and professional work on time with a 1031 exchange that was wonderfully done. Sold a retail property (KFC tenant)."
  },
  {
    author: "Afrasiab Anjum",
    location: "South Miami, FL",
    content: "Professional, patient, and truly cares about clients. He guided me through every step of the process with clear communication and genuine support."
  },
  {
    author: "Juan",
    location: "Pembroke Pines, FL",
    content: "I have been working with Carlos for more than 10 years and I am very happy with the results. I buy and sell units with him... recommend Carlos 100%."
  },
  {
    author: "Marisela",
    location: "Weston, FL",
    content: "Carlos is an excellent realtor, with high professionalism, always there for you in the process from the beginning through the end."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="clients-relationships" className="py-32 relative overflow-hidden scroll-mt-20 bg-[#1A1A1A]">
      {/* Background Texture & Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Office Environment" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/95 to-[#1A1A1A]"></div>
      </div>

      <div className="relative z-10">
        {/* 1. Relationship Intro Layer */}
        <div className="max-w-7xl mx-auto px-4 mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-8 py-2.5 mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A46B] bg-white/5 backdrop-blur-md border border-[#C9A46B]/20 rounded-sm shadow-sm">
              Strategic Partnerships
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 leading-[1.05] text-[#F4F4F4] tracking-tight">
              Professional Relationships Built on <br className="hidden lg:block"/> Trust, Execution, and Results
            </h2>
            <div className="w-24 h-px bg-[#C9A46B]/40 mb-12"></div>
            <p className="text-[#F4F4F4]/70 text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed font-medium tracking-wide">
              Our work is defined by long-term professional relationships. We advise and represent buyers, sellers, developers, and institutional partners across multiple markets—operating with discretion, alignment, and licensed execution in every jurisdiction.
            </p>
          </motion.div>
        </div>

        {/* 2. Relationship Pillars Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm hover:border-[#C9A46B]/40 transition-all duration-700 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(201,164,107,0.1)]"
            >
              <div className="w-16 h-16 mb-10 text-[#C9A46B] group-hover:scale-110 transition-transform duration-700 ease-out">
                <Search className="w-full h-full stroke-[1]" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight text-[#F4F4F4]">Buyers & Investors</h3>
              <p className="text-[#F4F4F4]/60 text-base leading-relaxed font-medium">
                Strategic acquisition guidance for domestic and international buyers, coordinated through licensed professionals with a focus on risk, positioning, and long-term value.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm hover:border-[#C9A46B]/40 transition-all duration-700 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(201,164,107,0.1)]"
            >
              <div className="w-16 h-16 mb-10 text-[#C9A46B] group-hover:scale-110 transition-transform duration-700 ease-out">
                <Building2 className="w-full h-full stroke-[1]" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight text-[#F4F4F4]">Sellers & Asset Owners</h3>
              <p className="text-[#F4F4F4]/60 text-base leading-relaxed font-medium">
                Advisory-driven representation for homeowners, developers, and owners seeking qualified demand, global exposure, and disciplined execution.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm hover:border-[#C9A46B]/40 transition-all duration-700 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(201,164,107,0.1)]"
            >
              <div className="w-16 h-16 mb-10 text-[#C9A46B] group-hover:scale-110 transition-transform duration-700 ease-out">
                <Globe className="w-full h-full stroke-[1]" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight text-[#F4F4F4]">Developers & Partners</h3>
              <p className="text-[#F4F4F4]/60 text-base leading-relaxed font-medium">
                Professional collaboration with developers and real estate agencies to position inventory, activate international demand, and support compliant transaction flow.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm hover:border-[#C9A46B]/40 transition-all duration-700 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(201,164,107,0.1)]"
            >
              <div className="w-16 h-16 mb-10 text-[#C9A46B] group-hover:scale-110 transition-transform duration-700 ease-out">
                <ShieldCheck className="w-full h-full stroke-[1]" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight text-[#F4F4F4]">Institutional & Advisory</h3>
              <p className="text-[#F4F4F4]/60 text-base leading-relaxed font-medium">
                Trusted coordination with family offices, funds, and professional advisors seeking cross-border market access and structured execution.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3. Client Feedback Section (Marquee) */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <span className="inline-block px-8 py-2.5 mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A46B] bg-white/5 backdrop-blur-md border border-[#C9A46B]/20 rounded-sm shadow-sm">
              Global Reputation
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-10 text-[#F4F4F4] tracking-tight">Real Cases, Real Results</h2>
            <p className="text-[#F4F4F4]/60 text-xl max-w-3xl font-medium tracking-wide leading-relaxed">
              Trusted by high-net-worth individuals, family offices, and international investors across continents.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Container */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-16">
            {[...reviews, ...reviews].map((review, i) => (
              <div 
                key={i} 
                className="inline-block w-[400px] md:w-[600px] mx-8 bg-[#F4F4F4] border border-white/10 p-12 md:p-16 rounded-sm hover:border-[#C9A46B]/40 transition-all duration-700 group whitespace-normal shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_80px_rgba(201,164,107,0.15)]"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="flex text-[#C9A46B] gap-1">
                    {[...Array(StarRating)].map((_, star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 px-4 py-1.5 bg-[#C9A46B]/5 rounded-full border border-[#C9A46B]/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A46B]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A46B]">Verified review</span>
                  </div>
                </div>
                
                <p className="text-[#1A1A1A] text-xl md:text-2xl leading-relaxed mb-16 italic font-sans font-medium tracking-[0.02em]">
                  "{review.content}"
                </p>
                
                <div className="flex items-center justify-between pt-10 border-t border-[#1A1A1A]/5">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center font-bold text-[#F4F4F4] border border-[#C9A46B]/30 shadow-xl group-hover:border-[#C9A46B] transition-colors duration-700">
                      {review.author[0]}
                    </div>
                    <div className="ml-6">
                      <p className="font-serif font-bold text-[#1A1A1A] text-xl tracking-tight">{review.author}</p>
                      <p className="text-[10px] text-[#C9A46B] uppercase tracking-[0.2em] font-bold mt-1">
                        Verified Client • {review.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest font-bold mb-2">Verified Review | Sourced from Realtor.com</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Realtor.com_logo.svg/2560px-Realtor.com_logo.svg.png" alt="realtor.com" className="h-4 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center pb-12">
          <p className="text-[11px] font-bold text-[#F4F4F4]/40 uppercase tracking-[0.4em] mb-8">
            Verified client relationships and professional collaborations across Miami • Madrid • LATAM
          </p>
          <p className="text-[10px] text-[#F4F4F4]/30 font-medium uppercase tracking-[0.2em] max-w-3xl mx-auto px-4 italic leading-relaxed">
            Services provided through licensed real estate professionals in each applicable jurisdiction. Testimonials reflect individual client experiences and do not guarantee future outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

const StarRating = 5;

export default Testimonials;