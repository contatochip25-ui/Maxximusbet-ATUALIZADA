import React from 'react';
import { ArrowRight, Users, CheckCircle2, Trophy, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-premium-black flex flex-col justify-center items-center overflow-hidden py-12 px-4 md:px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-gold/10 via-premium-black to-premium-black opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-premium-gold/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-premium-green/30 bg-premium-green/10 backdrop-blur-md mb-2 animate-pulse">
          <Zap className="w-4 h-4 text-premium-green fill-current" />
          <span className="text-premium-green text-xs md:text-sm font-bold tracking-[0.2em] uppercase">LIBERADO: APOSTA MÍNIMA DE R$ 2,00</span>
        </div>

        {/* Headlines */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">
            TRANSFORME TROCO DE PÃO EM
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gold-gradient uppercase leading-[0.9] text-glow filter drop-shadow-lg">
            R$ 100.000,00<br/>NA SUA CONTA
          </h1>
          <h2 className="text-xl md:text-3xl font-display font-bold text-white uppercase mt-4 max-w-3xl mx-auto">
            O único sistema onde você aposta <span className="text-premium-green">R$ 2,00</span> e pode faturar um carro zero km no mesmo dia.
          </h2>
        </div>

        {/* Subheadline Persuasive */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm mt-4 max-w-2xl">
           <p className="text-gray-200 text-lg md:text-xl font-bold">
            💸 GANHOU, RECEBEU NA HORA NO PIX.
          </p>
          <p className="text-gray-400 text-sm md:text-base font-light mt-1">
            Sem enrolação, sem travas de saque. O dinheiro é seu no momento da vitória.
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md mt-6">
          <a 
            href="https://chat.whatsapp.com/BzsUwu8bOsEDlrPISjVuIY?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative group overflow-hidden bg-premium-green hover:bg-white transition-all duration-300 py-6 px-8 rounded-lg shadow-glow-green block animate-button-pulse"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            <span className="relative flex items-center justify-center gap-3 text-black font-black text-xl md:text-2xl uppercase tracking-wider font-display text-center leading-none md:leading-normal">
              QUERO ENTRAR NO GRUPO VIP GRÁTIS
              <ArrowRight className="w-8 h-8 stroke-[3px] flex-shrink-0" />
            </span>
          </a>
          <p className="text-center text-red-500 text-xs mt-3 uppercase tracking-widest font-bold animate-pulse">
            ⚠️ ÚLTIMAS VAGAS GRATUITAS DISPONÍVEIS
          </p>
        </div>

        {/* Social Proof Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 w-full border-t border-gray-900 pt-8">
          <div className="flex items-center justify-center gap-3">
            <Users className="text-premium-gold w-6 h-6" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg">+200.000</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Membros Lucrando</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Trophy className="text-premium-gold w-6 h-6" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg">R$ 100 MIL</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Prêmio Máximo</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="text-premium-gold w-6 h-6" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg">PIX IMEDIATO</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Pagamento na Hora</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;