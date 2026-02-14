import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const modules = [
  { title: "Bilhetes Prontos Diários", desc: "Você não precisa analisar nada. Apenas copie e cole nossos palpites." },
  { title: "Gestão de Banca Blindada", desc: "Planilhas e métodos para você nunca mais quebrar sua banca." },
  { title: "Alavancagem de Capital", desc: "Estratégias agressivas para transformar pouco dinheiro em montantes altos." },
  { title: "Suporte 24/7", desc: "Dúvidas? Nossa equipe está pronta para te ajudar a qualquer hora do dia." },
  { title: "Live de Operações", desc: "Operamos ao vivo com você nos principais jogos da rodada." },
];

const Curriculum: React.FC = () => {
  return (
    <Section className="bg-premium-dark border-y border-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-none mb-6 sticky top-24 uppercase italic text-white">
            O que você recebe no <span className="text-premium-green block mt-2">VIP Maxximus</span>
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
            {modules.map((mod, index) => (
              <div key={index} className="py-8 md:py-10 group hover:bg-white/5 px-4 transition-colors">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
                  <span className="text-xl font-mono text-premium-green font-bold shrink-0">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white group-hover:text-premium-green transition-colors flex items-center gap-2">
                      {mod.title}
                      <CheckCircle2 size={18} className="text-premium-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Curriculum;