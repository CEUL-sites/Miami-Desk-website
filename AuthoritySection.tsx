
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, FileText } from 'lucide-react';

interface AIDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: { query: string; market: string; intent: string; address?: string };
}

const AIDeskModal: React.FC<AIDeskModalProps> = ({ isOpen, onClose, data }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isSpain = data.market === 'Spain';
    const targetPhone = isSpain ? '34646853078' : '19548656622';
    
    let message = '';
    const reportSuffix = data.address ? `\nPropiedad para Análisis: ${data.address}\nFavor generar reporte CMA AI.` : "";
    const reportSuffixEn = data.address ? `\nProperty for Analysis: ${data.address}\nPlease generate AI CMA report.` : "";

    if (isSpain) {
      message = `Hola Carlos, solicito un Análisis de Alcance Estratégico a través del Institutional Intelligence Desk.

Mercado: ${data.market}
Objetivo: ${data.intent}
Nombre: ${formData.name}
Ubicación: ${formData.location || 'No especificada'}${reportSuffix}
Consulta: ${data.query || 'Solicitud de Visibilidad Institucional'}

Prefiero contacto por WhatsApp para coordinar el puente B2B.`;
    } else {
      message = `Hi Carlos, I am requesting an Institutional Exposure Report via the Intelligence Desk.

Market: ${data.market}
Intent: ${data.intent}
Name: ${formData.name}
Location: ${formData.location || 'Not specified'}${reportSuffixEn}
Query: ${data.query || 'Request for Strategic Reach Analysis'}

Please contact me via WhatsApp to discuss Licensed Representation.`;
    }

    const waLink = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    {data.address ? 'Strategic Reach Analysis' : 'Institutional Report'}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Direct Strategic Advisor Follow-up</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Full Name *</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none font-medium text-sm" 
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">WhatsApp Number *</label>
                <input 
                  required 
                  type="tel" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})} 
                  placeholder="+1 or +34..." 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none font-medium text-sm" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Email (Optional)</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none font-medium text-sm" 
                    placeholder="name@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Current Location</label>
                  <input 
                    type="text" 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none font-medium text-sm" 
                    placeholder="City/Area"
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-5 bg-slate-900 hover:bg-indigo-950 text-white font-black rounded-xl text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 mt-4 active:scale-95 group">
                Request Institutional Report
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-[9px] text-slate-400 text-center leading-relaxed font-bold uppercase tracking-widest px-4">
                AI CMA Reports are generated based on available market data. Final valuation requires professional inspection. Services provided through licensed professionals.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIDeskModal;
