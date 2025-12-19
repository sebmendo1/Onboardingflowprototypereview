import { useEffect } from 'react';

interface OnboardingScreen06Props {
  onContinue: () => void;
}

// Blank transition screen - fades from tag selection to "Let's get started"
export function OnboardingScreen06({ onContinue }: OnboardingScreen06Props) {
  useEffect(() => {
    // Auto-advance after 500ms
    const timer = setTimeout(() => onContinue(), 500);
    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full">
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.06) 8.7497%, rgba(30, 99, 211, 0.06) 85.09%)" 
        }} 
      />
    </div>
  );
}