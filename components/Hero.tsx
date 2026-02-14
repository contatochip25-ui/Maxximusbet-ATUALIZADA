import React from 'react';
import { ArrowRight, Users, CheckCircle2, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-premium-black flex flex-col justify-center items-center overflow-hidden py-12 px-4 md:px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-gold/10 via-premium-black to-premium-black opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-premium-gold/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-premium-gold/30 bg-premium-gold/10 backdrop-blur-md mb-4">
          <span className="w-2 h-2 rounded-full bg-premium-green animate-pulse shadow-[0_0_8px_#ccff00]"></span>
          <span className="text-premium-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase">O Grupo mais lucrativo do Brasil</span>
        </div>

        {/* Headlines */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
            Premiação Instantânea
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gold-gradient uppercase leading-[0.9] text-glow filter drop-shadow-lg">
            ATÉ 100 MIL<br/>REAIS POR DIA
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase mt-4">
            GANHOU, RECEBEU <span className="text-premium-green underline decoration-4 decoration-premium-green underline-offset-4">NA HORA.</span>
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light mt-4">
          Premiações reais. Pagamentos imediatos via PIX. <br className="hidden md:block" />
          Sem enrolação. Sem letras miúdas.
        </p>

        {/* CTA Button */}
        <div className="w-full max-w-md mt-8">
          <button className="w-full relative group overflow-hidden bg-premium-green hover:bg-white transition-all duration-300 py-6 px-8 rounded-lg shadow-glow-green">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            <span className="relative flex items-center justify-center gap-3 text-black font-black text-xl md:text-2xl uppercase tracking-wider font-display">
              QUERO ENTRAR AGORA
              <ArrowRight className="w-8 h-8 stroke-[3px]" />
            </span>
          </button>
          <p className="text-center text-gray-500 text-xs mt-3 uppercase tracking-widest">
            Vagas Limitadas • Acesso Imediato
          </p>
        </div>

        {/* Social Proof Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 w-full border-t border-gray-900 pt-8">
          <div className="flex items-center justify-center gap-3">
            <Users className="text-premium-gold w-6 h-6" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg">+1.000</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Membros Ativos</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Trophy className="text-premium-gold w-6 h-6" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg">Diariamente</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Pagamentos Reais</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="text-premium-gold w-6 h-6" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg">VIP</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Entradas Exclusivas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;