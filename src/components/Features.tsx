import React from "react";
import { Sparkles, Scissors, ShieldCheck } from "lucide-react";
import { FEATURES } from "../data";

// Helper to match string names to Lucide elements
const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  Scissors: Scissors,
  ShieldCheck: ShieldCheck
};

export default function Features() {
  return (
    <section id="qualidade" className="relative py-20 md:py-28 bg-[#090514]/90 overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-1/2 left-full w-[350px] h-[350px] bg-[#ec4899]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#ec4899] font-medium block mb-3">
            O MANIFESTO DO ATEMPORAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Qualidade Impecável <br />
            <span className="italic font-medium text-pink-100">nos mínimos detalhes</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#ec4899] to-transparent mx-auto mb-6" />
          <p className="text-gray-300 md:text-lg font-light leading-relaxed">
            Valorizamos o slow fashion com tecidos selecionados e caimento sob medida para o corpo feminino. Cada peça é pensada para durar gerações mantendo as fibras intactas.
          </p>
        </div>

        {/* 3 Grid Glassmorphism Cards with Glowing Icon Balls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#ec4899]/40 p-8 pt-12 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.1)]"
              >
                {/* Glow effect on hover top-right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ec4899]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Sphoric gradient icon wrapper */}
                <div className="absolute -top-7 left-8 w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ec4899] to-pink-400 flex items-center justify-center shadow-[0_5px_15px_rgba(236,72,153,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-serif text-xl font-medium text-white mb-4 mt-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
                  {item.description}
                </p>

                {/* Subtle bottom arrow feedback */}
                <div className="mt-6 flex items-center text-xs font-mono text-gray-500 group-hover:text-[#ec4899] transition-colors duration-300">
                  <span className="tracking-wider uppercase">Saber Mais</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic visual metric */}
        <div className="mt-16 md:mt-24 py-8 px-10 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col md:flex-row items-center justify-around gap-8 text-center backdrop-blur-sm">
          <div>
            <span className="font-serif text-3xl md:text-4xl font-semibold text-white block mb-1">
              100%
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">
              Fibras Puramente Naturais
            </span>
          </div>
          <div className="h-10 w-px bg-white/10 hidden md:block" />
          <div>
            <span className="font-serif text-3xl md:text-4xl font-semibold text-white block mb-1">
              12 Horas
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">
              Tempo Máximo Despacho
            </span>
          </div>
          <div className="h-10 w-px bg-white/10 hidden md:block" />
          <div>
            <span className="font-serif text-3xl md:text-4xl font-semibold text-white block mb-1">
              Limitada
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">
              Lote de Produção Ética
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
