import React from 'react';
import { ArrowRight } from 'lucide-react';

const SocialProof: React.FC = () => {
  const images = [
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete5.jpeg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete6.jpeg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete7.jpeg"
  ];

  return (
    <section className="bg-black py-20 pb-32 relative overflow-hidden">
      {/* Decorative Gold Glow Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-premium-gold/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
           <div className="inline-block px-3 py-1 border border-premium-gold rounded mb-4">
              <span className="text-premium-gold text-xs uppercase tracking-widest">Transparência Total</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase leading-tight">
            BILHETES PREMIADOS DA SEMANA
          </h2>
        </div>

        {/* Grid Layout - Adjusted for Mobile Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {images.map((src, index) => (
            <div key={index} className="group relative w-full max-w-[340px] md:max-w-none mx-auto md:aspect-[3/4] overflow-hidden rounded-2xl border border-gray-800 hover:border-premium-gold transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
              <img 
                src={src} 
                alt={`Bilhete Premiado ${index + 1}`} 
                className="w-full h-auto md:h-full md:object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-premium-green text-black text-xs font-bold px-3 py-1.5 uppercase rounded-sm shadow-lg shadow-black/50 tracking-wide">
                  Pagamento Confirmado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Area */}
        <div className="flex flex-col items-center gap-8 text-center bg-gradient-to-b from-transparent to-premium-card/50 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm mx-2 md:mx-0">
          <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase italic leading-tight">
            Você pode ser o próximo.
          </h3>
          
          <a 
            href="https://chat.whatsapp.com/BzsUwu8bOsEDlrPISjVuIY?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-2xl relative group overflow-hidden bg-premium-gold hover:bg-white transition-all duration-300 py-5 md:py-6 px-4 md:px-12 rounded-lg shadow-glow-gold block"
          >
            <span className="relative flex items-center justify-center gap-2 md:gap-3 text-black font-black text-lg md:text-3xl uppercase tracking-wider font-display">
              ENTRAR NO GRUPO VIP AGORA
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
            </span>
          </a>
          
          <p className="text-gray-500 text-xs md:text-sm">
            Ao clicar, você será redirecionado para o nosso grupo exclusivo.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;