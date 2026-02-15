import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const SocialProof: React.FC = () => {
  const images = [
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete5.jpeg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete6.jpeg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete7.jpeg"
  ];

  return (
    <section className="bg-black py-20 pb-32 relative overflow-hidden border-t border-gray-900">
      {/* Decorative Gold Glow Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-premium-gold/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
           <div className="inline-block px-3 py-1 border border-premium-green rounded mb-4 bg-premium-green/10">
              <span className="text-premium-green text-xs uppercase tracking-widest font-bold">Isso acontece todo dia</span>
           </div>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-white uppercase leading-tight">
            CONTRA FATOS NÃO HÁ ARGUMENTOS.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Eles apostaram valores irrisórios (R$ 2,00, R$ 5,00) e colocaram <strong className="text-white">milhares de reais no bolso.</strong>
            <br />A pergunta não é se funciona. A pergunta é: <span className="text-premium-green font-bold">você vai ficar de fora?</span>
          </p>
        </div>

        {/* Grid Layout - Adjusted for Mobile Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {images.map((src, index) => (
            <div key={index} className="group relative w-full max-w-[340px] md:max-w-none mx-auto overflow-hidden rounded-2xl border border-gray-800 hover:border-premium-green transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
              
              {/* Header inside Image Card */}
              <div className="absolute top-0 w-full bg-black/80 backdrop-blur-md p-3 z-20 border-b border-white/10 flex justify-between items-center">
                  <span className="text-white text-xs font-bold uppercase flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Pix Recebido
                  </span>
                  <span className="text-premium-green text-xs font-bold">100% Validado</span>
              </div>

              <img 
                src={src} 
                alt={`Bilhete Premiado ${index + 1}`} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-premium-green text-black text-xs font-bold px-4 py-3 uppercase rounded-sm shadow-lg shadow-black/50 tracking-wide flex justify-between items-center">
                  <span>PAGAMENTO CONFIRMADO</span>
                  <Check size={16} strokeWidth={4} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Area */}
        <div className="flex flex-col items-center gap-6 text-center bg-gradient-to-b from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-premium-green/30 backdrop-blur-sm mx-2 md:mx-0 shadow-[0_0_30px_rgba(204,255,0,0.1)]">
          
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase italic leading-none">
            PARE DE JOGAR DINHEIRO FORA.
          </h3>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl">
            Enquanto você lê isso, alguém acabou de ganhar R$ 5.000,00 apostando o dinheiro do cafézinho. O método já está validado. A ferramenta está pronta.
          </p>
          
          <a 
            href="https://chat.whatsapp.com/BzsUwu8bOsEDlrPISjVuIY?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-2xl relative group overflow-hidden bg-premium-green hover:bg-white transition-all duration-300 py-6 md:py-8 px-4 md:px-12 rounded-lg shadow-glow-green block animate-button-pulse mt-4"
          >
            <span className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-black font-black uppercase tracking-wider font-display leading-tight">
              <span className="text-xl md:text-3xl">ENTRAR NO GRUPO E COPIAR AGORA</span>
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 stroke-[3px] hidden md:block" />
            </span>
            <span className="relative block text-xs md:text-sm font-bold mt-1 tracking-widest text-black/70">
              CLIQUE AQUI PARA ACESSAR OS PALPITES DE HOJE
            </span>
          </a>
          
        </div>

      </div>
    </section>
  );
};

export default SocialProof;