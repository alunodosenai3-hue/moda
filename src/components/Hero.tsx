import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Heart, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenWhatsApp: () => void;
}

export default function Hero({ onScrollToSection, onOpenWhatsApp }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#090514]">
      {/* Immersive radial glow backing to generate 3D premium SaaS-style depth */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ec4899]/15 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#ec4899]/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      {/* Subtle Grid backdrop overlay to represent haute structures */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" 
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Copywriting Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 py-1.5 px-4 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-ping" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-300">
              Coleções Exclusivas Atemporais
            </span>
          </motion.div>

          {/* Psychological Editorial Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12]"
          >
            Sinta o poder da <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-pink-400 to-white bg-clip-text text-transparent font-medium italic">
              elegância minimalista
            </span> <br />
            com alfaiataria premium
          </motion.h1>

          {/* High contrast supportive tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg max-w-xl font-light leading-relaxed font-sans"
          >
            Coleções exclusivas desenhadas para mulheres que valorizam caimento perfeito, tecidos nobres e autenticidade. Peças sustentáveis criadas sob o manifesto de slow fashion.
          </motion.p>

          {/* Highlights Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-2 pb-4 w-full max-w-lg"
          >
            {[
              "Modelagem anatômica perfeita",
              "Linho Belga & Algodão Egípcio",
              "Despacho rápido em até 12h",
              "Primeira troca 100% gratuita"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#ec4899] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Core Call to Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Action Button (Touch area: minimum 44px) */}
            <button
              onClick={() => onScrollToSection("oferta")}
              className="group py-4 px-8 rounded-full bg-[#ec4899] hover:bg-[#ec4899]/90 text-white font-semibold tracking-wider text-sm flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer shadow-[0_0_25px_rgba(236,72,153,0.45)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] hover:scale-[1.03] animate-pulse-glow"
              style={{ minHeight: "48px" }}
            >
              <span>APROVEITAR 10% OFF + FRETE GRÁTIS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Secondary Action - WhatsApp Direct */}
            <button
              onClick={onOpenWhatsApp}
              className="group py-4 px-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 font-sans text-sm tracking-wide flex items-center justify-center space-x-2 transition-all cursor-pointer"
              style={{ minHeight: "48px" }}
            >
              <span>Conversar com Personal Stylist</span>
            </button>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5 w-full"
          >
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80" 
                className="w-10 h-10 rounded-full border-2 border-[#090514] object-cover" 
                alt="Client" 
              />
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" 
                className="w-10 h-10 rounded-full border-2 border-[#090514] object-cover" 
                alt="Client" 
              />
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&h=80&q=80" 
                className="w-10 h-10 rounded-full border-2 border-[#090514] object-cover" 
                alt="Client" 
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-white font-mono">4.9/5</span>
              </div>
              <span className="text-xs text-gray-400">
                Mais de 1.450 brasileiras vestindo Aura o ano inteiro.
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Columns: Layered High-End Editorial Fashion Cards */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl border border-white/10 bg-[#090514]/30 backdrop-blur-md p-3.5 shadow-2xl shadow-pink-900/10"
          >
            {/* Elegant Inner Border */}
            <div className="relative w-full h-full overflow-hidden rounded-xl group/heroimg">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=90" 
                className="w-full h-full object-cover group-hover/heroimg:scale-105 transition-transform duration-[4000ms] ease-out" 
                alt="Model wearing tailoring of Aura Concept"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090514]/80 via-transparent to-transparent opacity-60" />
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-md border border-white/15 p-3.5 rounded-lg">
                <span className="text-[10px] font-mono tracking-widest text-[#ec4899] block mb-0.5">ESTRUTURA EM LINHO</span>
                <span className="font-serif text-sm text-white block">Slow Fashion Colette Blazer</span>
              </div>
            </div>

            {/* Behind floating card for editorial weight */}
            <div className="absolute -top-4 -left-4 w-28 h-36 rounded-lg overflow-hidden border border-white/5 shadow-lg pointer-events-none hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=200&q=80" 
                className="w-full h-full object-cover" 
                alt="Aura texture details"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 bg-[#090514] border border-white/10 rounded-xl p-4 shadow-xl hidden sm:flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
                <Heart className="w-4 h-4 text-[#ec4899] fill-[#ec4899]" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-sans">Caimento Garantido</span>
                <span className="text-sm font-semibold text-white block">Ajuste sob medida</span>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
