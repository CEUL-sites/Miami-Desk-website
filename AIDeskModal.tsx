
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Search, Send } from 'lucide-react';

interface AIConsultantProps {
  onGetStrategy: (data: { query: string; market: string; intent: string; address?: string }) => void;
}

const MARKETS = [
  { id: 'Florida', label: 'Florida (Miami/Broward)' },
  { id: 'Spain', label: 'Spain' },
  { id: 'LATAM_FL', label: 'LATAM → Florida' }
];

const INTENTS = [
  { id: 'Selling', label: 'Selling' },
  { id: 'Buying', label: 'Buying' },
  { id: 'Investing', label: 'Investing' },
  { id: 'Relocating', label: 'Relocating' }
];

const QUICK_PROMPTS = [
  "Analyze institutional visibility for my property",
  "What is the current strategic reach in Miami-Dade?",
  "Generate a professional valuation report",
  "How does The Miami Desk bridge international capital?",
  "Explain the B2B referral compliance process",
  "Request a market mastery summary for Broward"
];

const AIConsultant: React.FC<AIConsultantProps> = ({ onGetStrategy }) => {
  const [query, setQuery] = useState('');
  const [address, setAddress] = useState('');
  const [market, setMarket] = useState('Florida');
  const [intent, setIntent] = useState('Selling');

  const handleGetStrategy = () => {
    onGetStrategy({ query, market, intent, address });
  };

  return (
    <section className="py-32 bg-bone">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal border border-white/10 rounded-sm p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] -mr-48 -mt-48 rounded-full"></div>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center mb-16 relative z-10">
            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-sm flex items-center justify-center text-gold mb-6 md:mb-0 md:mr-8 shadow-2xl shrink-0">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-bone tracking-tight mb-3">Institutional Intelligence Desk</h2>
              <p className="text-sm text-bone/50 font-medium leading-relaxed tracking-luxury uppercase">
                Professional Valuation • Strategic Reach Analysis • Institutional-Grade Market Insights
              </p>
            </div>
          </div>

          <div className="space-y-12 relative z-10">
            {/* Market & Intent Row */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-5">
                <label className="block text-[10px] font-bold uppercase tracking-ultra text-gold">Target Market</label>
                <div className="flex flex-wrap gap-3">
                  {MARKETS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMarket(m.id)}
                      aria-label={`Select market ${m.label}`}
                      className={`px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-ultra transition-all border ${
                        market === m.id 
                          ? 'bg-gold text-charcoal border-gold shadow-xl' 
                          : 'bg-white/5 text-bone/50 border-white/10 hover:border-gold/50 hover:text-bone'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <label className="block text-[10px] font-bold uppercase tracking-ultra text-gold">Objective</label>
                <div className="flex flex-wrap gap-3">
                  {INTENTS.map((i) => (
                    <button
                      key={i.id}
                      onClick={() => setIntent(i.id)}
                      aria-label={`Select intent ${i.label}`}
                      className={`px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-ultra transition-all border ${
                        intent === i.id 
                          ? 'bg-bone text-charcoal border-bone shadow-xl' 
                          : 'bg-white/5 text-bone/50 border-white/10 hover:border-bone/50 hover:text-bone'
                      }`}
                    >
                      {i.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Address Input */}
            <div className="space-y-5">
              <label className="block text-[10px] font-bold uppercase tracking-ultra text-gold">Property Address (for AI CMA Report)</label>
              <div className="relative">
                <input 
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter full address to analyze recent sales & local trends..."
                  className="w-full px-8 py-5 pl-14 bg-white/5 border border-white/10 rounded-sm focus:border-gold focus:ring-0 focus:outline-none transition-all text-bone text-sm font-medium placeholder:text-bone/20"
                  aria-label="Property address input"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-bone/20" />
              </div>
            </div>

            {/* Input Area */}
            <div className="relative">
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Additional details or specific questions..."
                className="w-full h-32 p-8 bg-white/5 border border-white/10 rounded-sm focus:border-gold focus:ring-0 focus:outline-none transition-all resize-none text-bone text-sm font-medium placeholder:text-bone/20"
                aria-label="Market question input"
              />
              
              <button 
                onClick={handleGetStrategy}
                className="absolute bottom-6 right-6 px-10 py-4 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-sm transition-all shadow-2xl active:scale-95 text-[10px] uppercase tracking-ultra flex items-center gap-2 group"
              >
                {address ? 'Analyze Reach' : 'Get Strategy'}
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Prompt Chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (prompt.includes("CMA report")) {
                      setIntent("Selling");
                    }
                    setQuery(prompt);
                  }}
                  className="text-[9px] bg-white/5 hover:bg-white/10 text-bone/40 hover:text-bone py-2.5 px-5 rounded-full border border-white/10 transition-all font-bold uppercase tracking-luxury"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-white/5 text-center">
            <p className="text-[9px] text-bone/20 uppercase tracking-ultra font-medium leading-relaxed max-w-2xl mx-auto italic">
              Educational guidance only. Real estate services provided through licensed professionals in each applicable jurisdiction. No guarantee of results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIConsultant;
