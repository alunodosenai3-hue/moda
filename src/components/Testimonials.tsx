import React from "react";
import { Star, CheckCircle2, ShieldCheck, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 md:py-28 bg-[#090514]/95">
      {/* Dynamic decoration light backings */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[110px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header + Trust summary scoreboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-8 text-left">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#ec4899] font-medium block mb-3">
              Voz das Clientes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Histórias Reais de Mulheres <br />
              <span className="italic font-medium text-pink-100">que vestem Aura</span>
            </h2>
            <div className="w-16 h-px bg-[#ec4899] mb-4" />
            <p className="text-gray-300 md:text-lg font-light leading-relaxed max-w-2xl">
              Nossa maior recompensa é transformar tecidos nobres em confiança e sofisticação no guarda-roupa de brasileiras que não abrem mão de qualidade técnica.
            </p>
          </div>

          {/* Trust Scorecard Box (Style Google Reviews) */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-[#ec4899]" />
            <div className="text-2xl font-serif text-white font-semibold mb-1">Nota Geral 4.9 / 5</div>
            <div className="flex items-center text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-gray-400 font-mono mb-4 uppercase">Baseado em +1.450 Clientes satisfeitas</span>
            
            <div className="w-full h-px bg-white/5 mb-4" />

            <div className="flex items-center space-x-2.5 text-xs text-green-400 font-medium">
              <ShieldCheck className="w-4.5 h-4.5 text-green-400" />
              <span>Avaliações Auditadas & Verificadas</span>
            </div>
          </div>
        </div>

        {/* Exactly 6 Review Cards (3-column layout on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="group relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#ec4899]/30 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              {/* Quote details icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#ec4899]/10 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div>
                {/* Five Stars */}
                <div className="flex items-center text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial specific text copy */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author profile block */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatarUrl}
                    alt={review.authorName}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white block">
                      {review.authorName}
                    </span>
                    <span className="text-xs text-gray-400 block">
                      {review.location}
                    </span>
                  </div>
                </div>

                {/* Client Verified green badge */}
                {review.verified && (
                  <div className="flex items-center space-x-1.5 bg-green-500/10 border border-green-500/20 py-1 px-2.5 rounded-full shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-[9px] uppercase tracking-wider font-mono text-green-400 font-semibold">
                      Verificado
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Micro-proof footer */}
        <div className="mt-12 text-center text-xs text-gray-500 font-sans">
          Mostrando avaliações em tempo real do nosso canal oficial. Última auditoria em <strong className="text-gray-400">Maio de 2026</strong>.
        </div>

      </div>
    </section>
  );
}
