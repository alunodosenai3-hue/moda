import React, { useState } from "react";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Mínimos Detalhes", id: "qualidade" },
    { label: "Coleções", id: "portfolio" },
    { label: "Oferta Exclusiva", id: "oferta" },
    { label: "Opinião das Clientes", id: "depoimentos" },
    { label: "FAQ", id: "faq" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090514]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ec4899]/30 to-[#ec4899]/10 flex items-center justify-center border border-[#ec4899]/40 group-hover:border-[#ec4899] transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
            <Sparkles className="w-5 h-5 text-[#ec4899] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] font-medium text-white group-hover:text-[#ec4899] transition-colors duration-300">
              AURA
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-mono -mt-1">
              Concept Store
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="text-sm tracking-wide text-gray-300 hover:text-[#ec4899] cursor-pointer transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => handleItemClick("oferta")}
            className="flex items-center space-x-2 bg-gradient-to-r from-[#ec4899]/10 to-[#ec4899]/30 border border-[#ec4899]/50 hover:border-[#ec4899] text-xs font-semibold tracking-wider text-[#ec4899] py-2.5 px-5 rounded-full hover:scale-105 hover:bg-[#ec4899]/20 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(236,72,153,0.15)]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>CUPOM: BEMVINDA</span>
          </button>
        </div>

        {/* Mobile Toggle Button (Touch area: > 44px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Toggle Menu"
          style={{ minWidth: "44px", minHeight: "44px" }}
        >
          {isOpen ? <X className="w-6 h-6 text-[#ec4899]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#090514]/98 backdrop-blur-xl border-t border-white/5 z-40 transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="text-left text-xl font-light tracking-wide py-2 text-gray-200 border-b border-white/5 hover:text-[#ec4899] transition-all"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-6">
            <button
              onClick={() => handleItemClick("oferta")}
              className="w-full justify-center flex items-center space-x-2.5 bg-gradient-to-r from-[#ec4899] to-[#c2185b] hover:from-[#f43f5e] hover:to-[#be123c] text-white text-sm font-semibold tracking-widest py-4 px-6 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-pulse-glow"
              style={{ minHeight: "48px" }}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>GARANTIR 10% OFF + FRETE GRÁTIS</span>
            </button>
          </div>

          <div className="text-center pt-8 text-xs font-mono text-gray-500">
            Showroom São Paulo • Envio Express 12h
          </div>
        </div>
      </div>
    </header>
  );
}
