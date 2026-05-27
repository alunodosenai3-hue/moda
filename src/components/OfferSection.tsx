import React, { useState, useEffect } from "react";
import { Copy, Check, Clock, ShieldAlert, Gift, MessageCircle, AlertCircle } from "lucide-react";

interface OfferSectionProps {
  onOpenWhatsApp: () => void;
}

export default function OfferSection({ onOpenWhatsApp }: OfferSectionProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isCopied, setIsCopied] = useState(false);

  // Regressive countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60)); // Reset to 15m gracefully or stop. Let's restart to simulate continuous pressure.
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText("BEMVINDA");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="oferta" className="relative py-20 md:py-28 bg-[#090514] overflow-hidden">
      {/* Background light halos specifically on the countdown card */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#ec4899]/15 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Main Countdown Container */}
        <div className="border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-md p-8 md:p-14 relative overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.15)]">
          {/* Top corner ribbon details */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#ec4899] rotate-45 flex items-end justify-center pb-2 shadow-lg hidden md:flex">
            <Gift className="w-5 h-5 text-white -rotate-45 mb-1" />
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2.5 bg-[#ec4899]/10 border border-[#ec4899]/30 py-2 px-5 rounded-full">
              <Clock className="w-4 h-4 text-[#ec4899] animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-xs font-mono font-semibold text-[#ec4899] uppercase tracking-widest">
                Oportunidade por Tempo Extremamente Limitado
              </span>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Desconto Exclusivo + <br />
            <span className="italic font-medium text-pink-300">Frete Grátis Liberado</span>
          </h2>

          <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-[#ec4899] tracking-wider mb-8 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            {formatTime(timeLeft)}
          </div>

          {/* Core Promo Box */}
          <div className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 block mb-1">
                SEU BENEFÍCIO ATIVO
              </span>
              <span className="font-serif text-xl sm:text-2xl font-light text-white block">
                Frete Grátis na 1ª Compra <br />
                <span className="font-medium text-[#ec4899] font-sans">+ 10% OFF</span> com cupom
              </span>
            </div>

            {/* Interactive Coupon Copier (Minimum 44px touch targets) */}
            <button
              onClick={copyCouponCode}
              className={`py-3.5 px-6 rounded-xl font-mono text-sm font-semibold tracking-widest flex items-center space-x-3 transition-all cursor-pointer ${
                isCopied 
                  ? "bg-green-600 border border-green-500 text-white" 
                  : "bg-white/5 border border-white/10 text-[#ec4899] hover:bg-[#ec4899]/10 hover:border-[#ec4899]/50"
              }`}
              style={{ minHeight: "48px" }}
            >
              <span>{isCopied ? "BEMVINDA COPIADO!" : "BEMVINDA"}</span>
              {isCopied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-[#ec4899]" />}
            </button>
          </div>

          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Ao clicar no botão abaixo, nosso catálogo completo e consultoria de estilista serão integrados no seu celular. Garantimos atendimento prioritário com <strong className="text-white">despacho rápido em até 12 horas</strong> para todo o território nacional.
          </p>

          {/* Big WhatsApp CTA Button (Min height 48px, pulsates, glowing) */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="py-4.5 px-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold tracking-wider text-sm sm:text-base flex items-center justify-center space-x-3.5 transition-all duration-300 transform hover:scale-[1.04] shadow-[0_0_25px_rgba(34,197,94,0.4)] cursor-pointer"
              style={{ minHeight: "52px" }}
            >
              {/* WhatsApp custom vector path for supreme brand experience */}
              <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.91.5 3.78 1.46 5.44L2 22l4.73-1.24a9.96 1.95 21.03 0 1 5.28 1.25c5.525 0 10.01-4.48 10.01-10.01C22.02 6.48 17.538 2 12.012 2zm.01 18.02a8.036 8.036 0 0 1-4.09-1.12l-.29-.17-3.04.8.81-2.96-.19-.31a8.025 8.025 0 0 1-1.23-4.25c0-4.44 3.61-8.05 8.05-8.05 4.44 0 8.05 3.61 8.05 8.05-.01 4.44-3.62 8.06-8.06 8.06z" />
              </svg>
              <span>LIBERAR DESCONTO VIA WHATSAPP</span>
            </button>
            <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1.5 mt-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#ec4899]" />
              Sem complicação. Você fala direto com um especialista humano em segundos.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
