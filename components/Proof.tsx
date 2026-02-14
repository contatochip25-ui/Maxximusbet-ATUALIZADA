import React from 'react';
import Section from './Section';
import { BarChart3, ShieldCheck, Wallet } from 'lucide-react';

const Proof: React.FC = () => {
  return (
    <Section className="bg-premium-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4 text-white uppercase italic">
          Aqui não existe "Achismo".
          <span className="block text-premium-green mt-2">Existe Análise Técnica.</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            A MaxximusBet não é um grupo de torcedores. Somos analistas de dados. Identificamos padrões, assimetrias nas odds e erros das casas de aposta para entregar valor real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-premium-card border border-gray-800 hover:border-premium-green transition-colors group">
            <div className="w-16 h-16 bg-gray-900 rounded-sm flex items-center justify-center mb-6 text-premium-green border border-gray-700 group-hover:shadow-[0_0_15px_#ccff0040] transition-all">
              <BarChart3 className="w-8 h-8" />
            </div>
            <p className="text-xl font-display font-bold uppercase mb-4 text-white">
              Estratégia Validada
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Matemática acima da sorte. Nossos algoritmos analisam mais de 1000 jogos por semana para encontrar as melhores oportunidades.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-premium-card border border-gray-800 hover:border-premium-green transition-colors group relative md:-top-6 shadow-2xl">
            <div className="absolute top-0 w-full h-1 bg-premium-green"></div>
            <div className="w-16 h-16 bg-gray-900 rounded-sm flex items-center justify-center mb-6 text-premium-green border border-gray-700 group-hover:shadow-[0_0_15px_#ccff0040] transition-all">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <p className="text-xl font-display font-bold uppercase mb-4 text-white">
              Gestão Profissional
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ensinamos você a proteger seu capital. O segredo não é ganhar todas, é ganhar muito quando acerta e perder pouco quando erra.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-8 bg-premium-card border border-gray-800 hover:border-premium-green transition-colors group">
            <div className="w-16 h-16 bg-gray-900 rounded-sm flex items-center justify-center mb-6 text-premium-green border border-gray-700 group-hover:shadow-[0_0_15px_#ccff0040] transition-all">
              <Wallet className="w-8 h-8" />
            </div>
            <p className="text-xl font-display font-bold uppercase mb-4 text-white">
              Pagamento Imediato
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bateu a meta? O dinheiro é seu. Sem burocracia, sem enrolação. Ganhou a premiação, recebe o PIX na hora.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Proof;