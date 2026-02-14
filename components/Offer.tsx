import React from 'react';
import Section from './Section';
import CtaBlock from './CtaBlock';
import { Zap, Check } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <Section className="bg-premium-black py-24 border-t border-gray-900">
      <div className="max-w-md md:max-w-2xl mx-auto">
        
        {/* Warning Badge */}
        <div className="flex justify-center mb-8">
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded flex items-center gap-2 text-sm font-bold uppercase tracking-widest animate-pulse">
                <Zap size={16} fill="currentColor" /> Última chamada para o grupo
            </div>
        </div>

        {/* The Box */}
        <div className="bg-premium-card rounded-sm p-1 border border-premium-green shadow-[0_0_50px_rgba(204,255,0,0.1)] relative">
           <div className="bg-black/80 p-8 md:p-12 relative overflow-hidden">
                
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

                <div className="text-center relative z-10">
                    <h3 className="text-white text-3xl md:text-5xl font-display font-bold uppercase italic leading-none mb-2">
                        Você pode continuar <span className="text-gray-700 line-through decoration-red-600 decoration-4">no escuro</span>...
                    </h3>
                    <h3 className="text-white text-3xl md:text-5xl font-display font-bold uppercase italic leading-none mb-8">
                        Ou entrar para quem joga com <span className="text-premium-green">Estratégia.</span>
                    </h3>

                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        O mercado é impiedoso com amadores. A MAXXIMUSBET é o escudo e a espada que você precisa. O acesso é gratuito, mas o valor é incalculável.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center items-center gap-8 mb-8 border-y border-gray-800 py-6">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">100%</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Gratuito</span>
                        </div>
                        <div className="w-[1px] h-8 bg-gray-800"></div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-premium-green">+5k</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Membros</span>
                        </div>
                         <div className="w-[1px] h-8 bg-gray-800"></div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">24/7</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Suporte</span>
                        </div>
                    </div>
                </div>

                <CtaBlock 
                    progressPercentage={94}
                    label="ENCERRANDO HOJE"
                    ctaText="QUERO ENTRAR PARA O VIP DA MAXXIMUSBET"
                />
           </div>
        </div>
        
        <p className="text-center mt-6 text-xs text-gray-600 max-w-xs mx-auto">
          Ao clicar, você será redirecionado para o nosso grupo exclusivo no WhatsApp.
        </p>
      </div>
    </Section>
  );
};

export default Offer;