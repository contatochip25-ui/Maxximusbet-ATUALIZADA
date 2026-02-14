import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <main className="w-full bg-black min-h-screen font-sans selection:bg-premium-gold selection:text-black">
      <Hero />
      <HowItWorks />
      <SocialProof />
      
      {/* Footer Minimalista */}
      <footer className="py-8 bg-black border-t border-gray-900 text-center">
        <p className="text-premium-gold font-display font-bold uppercase tracking-widest text-sm mb-2">MaxximusBet VIP</p>
        <p className="text-gray-600 text-[10px] max-w-md mx-auto px-4">
          Jogue com responsabilidade. Proibido para menores de 18 anos.
        </p>
      </footer>
    </main>
  );
}

export default App;