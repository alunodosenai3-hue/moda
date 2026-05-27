import React from "react";
import { Sparkles, Instagram, Facebook, MapPin, Mail, Phone, Heart, Shield } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenWhatsApp: () => void;
}

export default function Footer({ onScrollToSection, onOpenWhatsApp }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05020d] border-t border-white/5 pt-16 pb-8 text-gray-400 font-sans relative overflow-hidden">
      
      {/* Subtle decorative glow at footer center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-[#ec4899]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Presentation Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ec4899]/30 to-[#ec4899]/10 flex items-center justify-center border border-[#ec4899]/40 group-hover:border-[#ec4899] transition-all duration-300">
                <Sparkles className="w-4 h-4 text-[#ec4899]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-[0.25em] font-medium text-white group-hover:text-[#ec4899] transition-colors duration-300">
                  AURA
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-gray-500 font-mono -mt-1">
                  Concept Store
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Inovando na moda feminina autoral e atemporal sob a ótica de slow fashion, modelagem anatômica que prioriza e enaltece a elegância clássica.
            </p>

            {/* Social channels (Min interactive target area 44px) */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/aura.conceptstore"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#ec4899]/10 border border-white/5 hover:border-[#ec4899]/30 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                title="Siga @aura.conceptstore"
              >
                <Instagram className="w-5 h-5 text-gray-300 hover:text-[#ec4899] transition-colors" />
              </a>
              <a
                href="https://facebook.com/auraboutique"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                title="Página auraboutique"
              >
                <Facebook className="w-5 h-5 text-gray-300 hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Nav Anchor links */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="font-serif text-white tracking-widest text-sm uppercase">Navegação</h4>
            <div className="flex flex-col space-y-2 text-sm font-light">
              {[
                { label: "Mínimos Detalhes", id: "qualidade" },
                { label: "Nossa Coleção", id: "portfolio" },
                { label: "Oferta Ativa", id: "oferta" },
                { label: "Opinião de Clientes", id: "depoimentos" },
                { label: "Dúvidas Frequentes", id: "faq" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onScrollToSection(link.id)}
                  className="text-left text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Contacts Block */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="font-serif text-white tracking-widest text-sm uppercase">Canais de Atendimento</h4>
            <div className="space-y-3.5 text-sm font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-[#ec4899] shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-tight">
                  <strong className="text-white block font-sans">Showroom Corporativo:</strong>
                  Aura Concept Store São Paulo
                </span>
              </div>
              
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-[#ec4899] shrink-0" />
                <a href="mailto:sac@auraconcept.com.br" className="text-gray-300 hover:text-[#ec4899] transition-all">
                  sac@auraconcept.com.br
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-[#ec4899] shrink-0" />
                <button onClick={onOpenWhatsApp} className="text-gray-300 hover:text-[#ec4899] transition-all text-left">
                  (11) 96666-6666 (WhatsApp)
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Outer bottom copyright values */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center space-x-1.5">
            <span>© {currentYear} Aura Concept Store. CNPJ: 12.345.678/0001-90.</span>
            <span className="text-gray-600 block sm:inline">| São Paulo - SP</span>
          </div>

          <div className="flex items-center space-x-1.5 text-gray-600">
            <Heart className="w-3.5 h-3.5 text-[#ec4899] fill-[#ec4899]" />
            <span>Feito sob medida para ser Único</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
