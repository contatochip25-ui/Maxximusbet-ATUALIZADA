import React from 'react';
import { UserPlus, Ticket, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-premium-black py-20 border-t border-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase italic mb-2">
            Como Funciona
          </h2>
          <div className="w-24 h-1 bg-premium-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Step 1 */}
          <div className="bg-premium-card border border-gray-800 p-8 rounded-sm hover:border-premium-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-black border border-premium-gold/30 rounded-lg flex items-center justify-center mb-6 shadow-glow-gold group-hover:scale-110 transition-transform">
              <UserPlus className="text-premium-gold w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4">
              1. Você entra no VIP
            </h3>
            <p className="text-gray-400 font-light">
              Acesso imediato ao grupo mais seletivo do Brasil. Sem burocracia, clique e entre.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-premium-card border border-gray-800 p-8 rounded-sm hover:border-premium-gold transition-colors duration-300 group">
            <div className="w-16 h-16 bg-black border border-premium-gold/30 rounded-lg flex items-center justify-center mb-6 shadow-glow-gold group-hover:scale-110 transition-transform">
              <Ticket className="text-premium-gold w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4">
              2. Copia os Bilhetes
            </h3>
            <p className="text-gray-400 font-light">
              Nossos analistas enviam a operação pronta. Premiações de até <strong className="text-premium-green">100 MIL REAIS</strong>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-premium-card border border-gray-800 p-8 rounded-sm hover:border-premium-green transition-colors duration-300 group">
            <div className="w-16 h-16 bg-black border border-premium-green/30 rounded-lg flex items-center justify-center mb-6 shadow-glow-green group-hover:scale-110 transition-transform">
              <Zap className="text-premium-green w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4">
              3. Recebe na Hora
            </h3>
            <p className="text-gray-400 font-light">
              Ganhou? O PIX cai na conta instantaneamente. Sem espera, sem enrolação.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-white font-display uppercase italic">
            "Aqui não tem promessa vazia. <span className="text-premium-green">Aqui tem dinheiro real.</span>"
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;