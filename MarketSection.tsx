
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2 } from 'lucide-react';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InventoryModal: React.FC<InventoryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Agency',
    location: '',
    assetType: 'Apartment',
    priceRange: '',
    notes: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const targetPhone = '34646853078';
    const message = `Hola Carlos, quiero enviar inventario en España para exposición internacional.

Nombre: ${formData.name}
Perfil: ${formData.role}
Ubicación: ${formData.location}
Tipo: ${formData.assetType}
Rango de precio: ${formData.priceRange || 'N/A'}
Link/Notas: ${formData.notes || 'N/A'}

Prefiero contacto por WhatsApp.`;

    const encodedMsg = encodeURIComponent(message);
    const waLink = `https://wa.me/${targetPhone}?text=${encodedMsg}`;
    
    window.open(waLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true">
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
            className="relative bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Madrid Desk Hub</span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Submit Spain Inventory
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">International Exposure Intake</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400" aria-label="Close">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Full Name *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium" 
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">You are: *</label>
                  <select 
                    required
                    value={formData.role} 
                    onChange={e => setFormData({...formData, role: e.target.value})} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium appearance-none"
                  >
                    <option>Developer</option>
                    <option>Agency</option>
                    <option>Owner (FSBO)</option>
                    <option>Portero</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Location (City + Province) *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium" 
                    placeholder="e.g. Madrid, Salamanca"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Asset Type *</label>
                  <select 
                    required
                    value={formData.assetType} 
                    onChange={e => setFormData({...formData, assetType: e.target.value})} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium appearance-none"
                  >
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Building</option>
                    <option>Land</option>
                    <option>New Development</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Price Range</label>
                  <input 
                    type="text" 
                    value={formData.priceRange} 
                    onChange={e => setFormData({...formData, priceRange: e.target.value})} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium" 
                    placeholder="e.g. €500k - €1M"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">WhatsApp Number *</label>
                  <input 
                    required 
                    type="tel" 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                    placeholder="+34..." 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Link or short notes</label>
                <textarea 
                  value={formData.notes} 
                  onChange={e => setFormData({...formData, notes: e.target.value})} 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-500 focus:outline-none transition-all font-medium h-24 resize-none" 
                  placeholder="Idealista link or asset details..."
                />
              </div>

              <button type="submit" className="w-full py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-black rounded-2xl text-sm uppercase tracking-[0.2em] transition-all shadow-xl shadow-green-500/20 active:scale-[0.98] flex items-center justify-center gap-3 mt-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.438 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Send via WhatsApp
              </button>

              <p className="text-[9px] text-slate-400 text-center leading-relaxed font-bold uppercase tracking-widest px-4">
                Al enviar este formulario, aceptas ser contactado por WhatsApp con fines informativos y de marketing inmobiliario. No constituye contrato de intermediación ni asesoría legal. Operación y cierre con profesionales localmente licenciados cuando aplique.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InventoryModal;
