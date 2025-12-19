import { useEffect, useState } from 'react';

interface OnboardingScreen07Props {
  onContinue: () => void;
}

export function OnboardingScreen07({ onContinue }: OnboardingScreen07Props) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text with fade in
    setTimeout(() => setShowText(true), 200);
    
    // Auto-advance to dashboard after 2 seconds
    setTimeout(() => onContinue(), 2200);
  }, [onContinue]);

  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full">
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.06) 8.7497%, rgba(30, 99, 211, 0.06) 85.09%)" 
        }} 
      />
      
      <div 
        className={`absolute left-[84px] text-[#1c2329] text-center top-[377px] transition-all duration-700 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] left-[197px] text-[24px] top-[377px] translate-x-[-50%] text-nowrap">
          Let's get started
        </p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[197px] text-[16px] top-[426px] translate-x-[-50%] text-nowrap">
          Create your first journal entry.
        </p>
      </div>
    </div>
  );
}
