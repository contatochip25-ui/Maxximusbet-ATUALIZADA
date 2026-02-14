import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBlockProps {
  progressPercentage: number;
  label: string;
  ctaText: string;
  className?: string;
  variant?: 'light' | 'dark';
}

const CtaBlock: React.FC<CtaBlockProps> = ({ 
  progressPercentage, 
  label, 
  ctaText, 
  className = "",
  variant = 'dark'
}) => {
  // Always dark theme logic visually, but keeping prop for compatibility
  
  return (
    <div className={`w-full max-w-md mx-auto flex flex-col gap-3 ${className}`}>
      {/* Progress Section */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-xs font-bold tracking-wide uppercase">
          <span className="text-gray-400">Vagas no Grupo VIP</span>
          <span className="text-premium-green animate-pulse">{label}</span>
        </div>
        <div className="h-2 w-full rounded-full overflow-hidden bg-gray-800 border border-gray-700">
          <div 
            className="h-full bg-premium-green shadow-[0_0_10px_#ccff00] rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Button */}
      <button 
        className={`
          group relative w-full py-5 px-6 rounded-none skew-x-[-10deg] border border-premium-green
          bg-premium-green text-black text-xl font-bold tracking-wider uppercase font-display
          flex items-center justify-center gap-2 transition-all duration-300
          hover:bg-premium-greenHover hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]
        `}
      >
        <span className="skew-x-[10deg] flex items-center gap-2">
          {ctaText}
          <ArrowRight className="w-6 h-6 stroke-[3px]" />
        </span>
      </button>
      
      <p className="text-center text-[10px] uppercase tracking-widest text-gray-500 font-medium">
        🔒 Acesso Seguro • Pagamento Instantâneo
      </p>
    </div>
  );
};

export default CtaBlock;