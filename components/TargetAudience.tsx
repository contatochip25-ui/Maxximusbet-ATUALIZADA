import React from 'react';
import Section from './Section';
import { Check, X } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <Section className="bg-premium-dark border-b border-gray-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase italic mb-6">
          Para quem é a <span className="text-premium-green">MaxximusBet?</span>
        </h2>
        <div className="w-24 h-1 bg-premium-green skew-x-[-20deg] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* For Whom */}
        <div className="space-y-8">
          <h3 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-premium-green pl-4 mb-6">
            O VIP é para você se:
          </h3>
          <ul className="space-y-6">
            {[
              "Cansou de perder dinheiro seguindo 'gurus' sem resultado",
              "Quer ter acesso a bilhetes prontos com alta assertividade",
              "Busca uma renda extra sólida com apostas esportivas",
              "Quer ganhar premiações altas e receber na hora via PIX"
            ].map((item, index) => (
              <li key={index} className="flex gap-4 items-start group">
                <span className="flex-shrink-0 w-6 h-6 bg-premium-green text-black flex items-center justify-center font-bold mt-1 shadow-[0_0_10px_#ccff00]">
                  <Check size={16} strokeWidth={4} />
                </span>
                <span className="text-lg text-gray-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not For Whom */}
        <div className="bg-premium-card p-10 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 rounded-full blur-2xl"></div>
          <h3 className="text-lg font-bold uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
            <X size={24} /> CAIA FORA SE VOCÊ:
          </h3>
          <ul className="space-y-4">
            {[
              "Acha que aposta é caixa eletrônico sem risco",
              "Não tem controle emocional e aposta o dinheiro do aluguel",
              "Não sabe seguir uma gestão de banca profissional"
            ].map((item, index) => (
              <li key={index} className="flex gap-4 items-start opacity-70 hover:opacity-100 transition-opacity">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mt-1">
                  <X size={14} />
                </span>
                <span className="text-base text-gray-400 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default TargetAudience;