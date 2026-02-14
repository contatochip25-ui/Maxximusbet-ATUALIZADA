import React from 'react';
import Section from './Section';

const Bio: React.FC = () => {
  return (
    <Section className="bg-premium-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        
        <div className="relative order-2 md:order-1">
          <div className="aspect-video bg-gray-900 rounded-sm overflow-hidden border border-gray-700 shadow-2xl group">
             <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop" 
              alt="Data Analytics" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm p-4 border border-white/10">
                    <span className="text-premium-green font-mono font-bold text-xl tracking-widest">MAXXIMUS HQ</span>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 order-1 md:order-2">
          <h2 className="text-3xl font-display font-bold text-white uppercase italic">
            Quem é a <span className="text-premium-green">MaxximusBet</span>
          </h2>
          <div className="w-12 h-1 bg-premium-green"></div>
          
          <div className="space-y-4 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              Somos o maior sindicato de apostadores profissionais da América Latina. O que começou como um grupo fechado de matemáticos e estatísticos, hoje se tornou a principal referência em <strong className="text-white">Tips Esportivas de Alta Performance</strong>.
            </p>
            <p>
              Nosso objetivo é simples: quebrar as bancas. Utilizamos softwares de alta frequência para antecipar movimentos do mercado e entregar o "Green" antes mesmo da bola rolar.
            </p>
            <p className="text-white font-bold italic">
              "Não torcemos. Nós lucramos."
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Bio;