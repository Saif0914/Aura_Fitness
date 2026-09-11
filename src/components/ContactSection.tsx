import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section id="contact" className="py-24 bg-[#090A0F] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Visit The Club <br />
            <span className="text-emerald-400">& Reserve Private Access</span>
          </h2>
          <p className="text-base text-zinc-400 font-light">
            Conveniently situated in the city athletic corridor with dedicated private member parking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Club Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#111318] border border-zinc-800 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                    Club Location
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    1040 Athletic Boulevard, Suite 100 <br />
                    Metro Performance District, CA 90210
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    *Private heated subterranean parking available for members.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111318] border border-zinc-800 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                    Facility Access Hours
                  </h4>
                  <div className="text-xs sm:text-sm text-zinc-300 space-y-1">
                    <div>
                      <strong className="text-emerald-400">24 / 7 / 365:</strong> Keyless Biometric Entry
                    </div>
                    <div>
                      <strong>Staffed Hours:</strong> Mon - Fri 5:30 AM - 10:00 PM
                    </div>
                    <div>
                      <strong>Weekend Concierge:</strong> Sat - Sun 7:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111318] border border-zinc-800 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                    Direct Contact
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    Phone: <span className="text-white">+1 (800) 924-AURA</span> <br />
                    Concierge: <span className="text-white">membership@aurafitness.club</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#111318] border border-zinc-800 rounded-xl p-8 sm:p-10"
          >
            {status === 'submitted' ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Message Dispatched
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Our member concierge will review your inquiry and follow up within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-500/10"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Send A Message To Our Concierge
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Inquire about corporate partnerships, personal coaching evaluations, or locker suite availability.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@mercer.com"
                      className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 302-9911"
                    className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your training goals or questions regarding our facilities..."
                    className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md shadow-emerald-500/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
