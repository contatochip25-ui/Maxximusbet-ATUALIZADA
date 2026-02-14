import React from 'react';
import Section from './Section';
import { Trophy } from 'lucide-react';

const Bonus: React.FC = () => {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-premium-green/10 to-transparent rounded-sm p-1 border-l-4 border-premium-green">
            <div className="bg-premium-card p-8 md:p-16 relative overflow-hidden">
            {/* Decorative Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy size={180} className="text-white" />
            </div>

            <div className="relative z-10 text-center">
                <span className="inline-block py-1 px-4 border border-premium-green/50 bg-premium-green/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 text-premium-green animate-pulse">
                Oportunidade Única
                </span>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase italic">
                Participe de Sorteios e Premiações de até <span className="text-premium-green">R$ 100.000,00</span>
                </h2>
                
                <p className="text-xl text-gray-400 italic mb-10 font-light border-l-2 border-premium-green pl-4 inline-block">
                "Resultado é consequência de método. Ganhou, recebeu."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto bg-black/40 p-6 rounded-lg border border-gray-800">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <span className="text-gray-400">Valor Investido</span>
                        <span className="text-white font-mono font-bold">R$ 10,00</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                        <span className="text-gray-400">Retorno Estimado</span>
                        <span className="text-premium-green font-mono font-bold text-xl">R$ 8.847,36</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Exemplo real de bilhete enviado no grupo semana passada.</p>
            </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Bonus;