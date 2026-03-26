
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onMiamiClick: () => void;
  onSpainClick: () => void;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onMiamiClick, onSpainClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex flex-col space-y-3"
          >
            <button 
              onClick={() => { onMiamiClick(); setOpen(false); }}
              className="flex items-center bg-white shadow-2xl rounded-full px-6 py-3 border border-slate-200 hover:border-amber-500 transition-all group"
            >
              <span className="text-sm font-black text-slate-900 mr-3 whitespace-nowrap">Miami Strategy</span>
              <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xs font-black">
                M
              </div>
            </button>
            <button 
              onClick={() => { onSpainClick(); setOpen(false); }}
              className="flex items-center bg-white shadow-2xl rounded-full px-6 py-3 border border-slate-200 hover:border-amber-500 transition-all group"
            >
              <span className="text-sm font-black text-slate-900 mr-3 whitespace-nowrap">Spain Desk</span>
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-black">
                S
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          open ? 'bg-slate-900 text-white' : 'bg-[#25D366] text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-8 h-8 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;
