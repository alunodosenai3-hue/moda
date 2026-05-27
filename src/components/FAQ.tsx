import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

interface FAQProps {
  onOpenWhatsApp: () => void;
}

export default function FAQ({ onOpenWhatsApp }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open the first by default to promote engagement

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-[#090514]/90 overflow-hidden">
      {/* Background visual halo spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#ec4899]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-pink-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#ec4899] font-medium block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Perguntas & <br />
            <span className="italic font-medium text-pink-100">Esclarecimentos Legais</span>
          </h2>
          <div className="w-16 h-px bg-[#ec4899] mx-auto mb-6" />
          <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
            Esclareça instantaneamente todas as suas dúvidas sobre nossas modelagens anatômicas, tecidos belgas, envios e trocas simplificadas.
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#090514] border-[#ec4899]/40 shadow-[0_5px_20px_rgba(236,72,153,0.08)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                {/* Accordion Trigger (Touch target: minimum Height 44px) */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-serif text-base md:text-lg text-white font-medium cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ec4899]"
                  style={{ minHeight: "48px" }}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 leading-snug">{item.question}</span>
                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#ec4899]/10 border-[#ec4899]/30" : ""
                  }`}>
                    <ChevronDown className={`w-4 h-4 text-gray-300 transition-colors ${
                      isOpen ? "text-[#ec4899]" : ""
                    }`} />
                  </div>
                </button>

                {/* Accordion Content wrapper utilizing height and opacity transitions natively */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-white/5 opacity-100 p-6 bg-white/[0.01]" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Objections supportive block banner */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-[#ec4899]" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white block">Sua pergunta não está na lista?</span>
              <span className="text-xs text-gray-400 block mt-0.5">Nossa equipe de consultoria está online agora mesmo.</span>
            </div>
          </div>
          <button
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans text-xs tracking-wider font-semibold border border-white/10 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            style={{ minHeight: "44px" }}
          >
            <MessageCircle className="w-4 h-4 text-[#ec4899]" />
            <span>FALAR DIRETIVO</span>
          </button>
        </div>

      </div>
    </section>
  );
}
