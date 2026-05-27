/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import OfferSection from "./components/OfferSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { MessageSquare, ArrowUp, AlertCircle } from "lucide-react";

export default function App() {
  const WHATSAPP_LINK = "https://wa.me/5511966666666?text=Quero%20ver%20o%20catalogo%20da%20nova%20colecao";

  const handleOpenWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Soft offset to make space for the fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#090514] text-gray-100 font-sans selection:bg-[#ec4899] selection:text-white antialiased">
      
      {/* Top micro promotion bar */}
      <div className="bg-gradient-to-r from-[#ec4899] to-pink-600 text-white text-[11px] sm:text-xs font-mono py-2.5 px-4 text-center tracking-widest uppercase flex items-center justify-center space-x-2 relative z-50">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        <span>Cupom de Boas-Vindas Ativo: <strong>BEMVINDA</strong> para 10% OFF + Frete Grátis</span>
      </div>

      {/* Main Elegant Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* Hero presentation block */}
      <Hero onScrollToSection={handleScrollToSection} onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Features showcase */}
      <Features />

      {/* Portfolio Showcase grid */}
      <Portfolio onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Active High-Urgency Offer section with regressive clock */}
      <OfferSection onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Google Reviews rating score and 6 testimonial cards */}
      <Testimonials />

      {/* Interactive FAQ accordion block (exactly 10 questions) */}
      <FAQ onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Elegant informative Footer */}
      <Footer onScrollToSection={handleScrollToSection} onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Floating fast-access WhatsApp widget (Touch target size > 44px) */}
      <button
        onClick={handleOpenWhatsApp}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.65)] hover:scale-110 transition-all duration-300 group cursor-pointer animate-pulse-glow"
        style={{ minWidth: "52px", minHeight: "52px" }}
        title="Falar no WhatsApp"
        aria-label="Falar com Personal Stylist"
      >
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.91.5 3.78 1.46 5.44L2 22l4.73-1.24a9.96 1.95 21.03 0 1 5.28 1.25c5.525 0 10.01-4.48 10.01-10.01C22.02 6.48 17.538 2 12.012 2zm.01 18.02a8.036 8.036 0 0 1-4.09-1.12l-.29-.17-3.04.8.81-2.96-.19-.31a8.025 8.025 0 0 1-1.23-4.25c0-4.44 3.61-8.05 8.05-8.05 4.44 0 8.05 3.61 8.05 8.05-.01 4.44-3.62 8.06-8.06 8.06z" />
        </svg>
        {/* Hover message bubble */}
        <span className="absolute right-16 bg-green-500 text-white font-sans text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Stylist Online
        </span>
      </button>

      {/* Top back button trigger */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#ec4899]/30 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 font-mono text-xs"
        style={{ minWidth: "44px", minHeight: "44px" }}
        title="Voltar ao Topo"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-gray-300" />
      </button>

    </div>
  );
}

