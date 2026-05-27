import React, { useState } from "react";
import { X, ExternalLink, ArrowRight, Eye } from "lucide-react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";

interface PortfolioProps {
  onOpenWhatsApp: () => void;
}

export default function Portfolio({ onOpenWhatsApp }: PortfolioProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-[#090514]">
      {/* Background radial spots */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#ec4899]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#ec4899] font-medium block mb-3">
            FINEST LOOKS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Nossas Peças de Autoria <br />
            <span className="italic font-medium text-pink-100">Design Minimalista & caimento</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#ec4899] to-transparent mx-auto mb-6" />
          <p className="text-gray-300 md:text-lg font-light leading-relaxed">
            Consulte looks que personificam versatilidade e sofisticação extrema. Clique em qualquer modelo para conferir as texturas e falar instantaneamente com nosso ateliê de costura.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-[450px] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 shadow-xl cursor-zoom-in transition-all duration-500 hover:-translate-y-2 hover:border-[#ec4899]/50"
            >
              {/* Image Container with scale effects */}
              <div className="absolute inset-0 overflow-hidden w-full h-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Translucent overlay that fades in upon hover */}
              <div className="absolute inset-0 bg-[#090514]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#ec4899] uppercase mb-1.5 block">
                  {item.category}
                </span>
                
                <h3 className="font-serif text-2xl text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 max-w-xs font-light">
                  Modelagem anatômica estudada artesanalmente em linho puro e algodão egípcio de alta gramatura.
                </p>

                {/* Persuasive Call to Action inside overlay */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-white tracking-widest uppercase">
                  <span className="py-2.5 px-4 rounded-full bg-[#ec4899] shadow-md group-hover:animate-pulse">
                    {item.persuasiveCall}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-[#ec4899]" />
                  </div>
                </div>
              </div>

              {/* Bottom persistent preview banner for touch screens default view */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#090514] via-[#090514]/80 to-transparent group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#ec4899] uppercase block">
                    {item.category}
                  </span>
                  <span className="font-medium text-sm text-white block mt-0.5">
                    {item.title}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Exquisite Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090514]/95 backdrop-blur-md transition-opacity duration-300">
          <div className="absolute inset-0 cursor-auto" onClick={() => setSelectedItem(null)} />
          
          <div className="relative bg-[#090514] border border-white/15 rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.15)] z-10">
            
            {/* Close trigger (Touch area: minimum 44px) */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 text-gray-300 hover:text-white bg-[#090514]/80 rounded-full border border-white/5 cursor-pointer focus:outline-none"
              style={{ minWidth: "44px", minHeight: "44px" }}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Image View */}
            <div className="md:col-span-7 h-[400px] md:h-[600px] relative">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090514]/80 via-transparent to-transparent pointer-events-none md:hidden" />
            </div>

            {/* Right Context details */}
            <div className="md:col-span-5 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#ec4899] tracking-widest block mb-1">
                  {selectedItem.category}
                </span>
                
                <h3 className="font-serif text-3xl font-light text-white mb-6">
                  {selectedItem.title}
                </h3>
                
                <div className="w-10 h-px bg-[#ec4899] mb-6" />
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  Uma expressão máxima de elegância minimalista brasileira com viés sustentável de slow fashion. Fibras purificadas que proporcionam sofisticação imutável.
                </p>

                <div className="space-y-3 font-sans">
                  <div className="flex items-center space-x-2 text-xs text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 block" />
                    <span>Em estoque (Preços promocionais ativos)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-pink-500 block" />
                    <span>Despache Express em até 12 horas</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenWhatsApp();
                  }}
                  className="w-full h-12 bg-[#ec4899] hover:bg-[#ec4899]/90 text-white rounded-full font-semibold text-xs tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-pulse-glow"
                  style={{ minHeight: "48px" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>CONSULTAR PREÇO VIA WHATSAPP</span>
                </button>
                
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full h-12 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full font-light text-xs transition-colors"
                  style={{ minHeight: "48px" }}
                >
                  Voltar para Coleção
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
