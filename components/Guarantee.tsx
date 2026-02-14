import React from 'react';
import Section from './Section';
import { Lock } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <Section className="py-16 md:py-20 bg-premium-black border-t border-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6 text-premium-green">
          <Lock size={48} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 tracking-wider">
          Compromisso com o Resultado
        </h3>
        <p className="text-gray-500 font-light leading-relaxed mb-0">
          Nossa transparência é total. Você terá acesso ao histórico completo de operações. Se não estiver satisfeito com o conteúdo gratuito, pode sair a qualquer momento. Mas duvidamos que você vá querer sair depois do primeiro saque.
        </p>
      </div>
    </Section>
  );
};

export default Guarantee;