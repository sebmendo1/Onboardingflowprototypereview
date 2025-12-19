import { useEffect, useState } from 'react';
import svgPaths from "../../imports/svg-w00d9vbhzb";

interface OnboardingScreen04Props {
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  userInput?: string;
}

const DEFAULT_USER_INPUT = "I'd like to learn how to manage my emotions more effectively, and to improve my own relationships with friends, family, and my partner.";
const AI_RESPONSE = "That sounds like a great goal! Memento is here to help you accomplish it one step at a time. \n\nRemember: the more you journal, the more you get from the app! You make your own experience.";

export function OnboardingScreen04({ onContinue, onBack, onSkip, userInput = DEFAULT_USER_INPUT }: OnboardingScreen04Props) {
  const [circleSize, setCircleSize] = useState(240);
  const [showUserText, setShowUserText] = useState(false);
  const [showAIBadge, setShowAIBadge] = useState(false);
  const [displayedAIText, setDisplayedAIText] = useState('');
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    // Animation sequence matching Figma
    const timeline = [
      // Start with circle at 240px (from recording screen)
      { delay: 0, action: () => setCircleSize(240) },
      // Shrink circle to 1px (vanishing)
      { delay: 500, action: () => setCircleSize(1) },
      // Show user text after circle vanishes
      { delay: 1200, action: () => setShowUserText(true) },
      // Show "Memento says..." badge
      { delay: 2000, action: () => setShowAIBadge(true) },
    ];

    timeline.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    // Type out AI response after badge appears
    const startTyping = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= AI_RESPONSE.length) {
          setDisplayedAIText(AI_RESPONSE.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Show continue button after typing is done
          setTimeout(() => setShowContinue(true), 300);
        }
      }, 20); // Typing speed

      return () => clearInterval(typingInterval);
    }, 2600);

    return () => clearTimeout(startTyping);
  }, []);

  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full">
      {/* Background gradient */}
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.06) 8.7497%, rgba(30, 99, 211, 0.06) 85.09%)" 
        }} 
      />
      
      {/* Purple circle - shrinks to 1px */}
      <div 
        className="absolute left-1/2 rounded-[1000px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] transition-all duration-700 ease-out"
        style={{ 
          backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)",
          width: `${circleSize}px`,
          height: `${circleSize}px`,
        }} 
      />
      
      {/* User's transcribed text */}
      <div 
        className={`absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[28px] left-[16px] not-italic text-[#1c2329] text-[20px] top-[108px] w-[361px] transition-all duration-500 ${
          showUserText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {userInput}
      </div>
      
      {/* "Memento says..." badge with border */}
      <div 
        className={`absolute left-[16px] top-[248px] transition-all duration-400 ${
          showAIBadge ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[32px] shrink-0">
          <div aria-hidden="true" className="absolute border-[#6125b1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[32px]" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute aspect-[24/24] bottom-0 left-1/2 overflow-clip top-0 translate-x-[-50%]">
                <div className="absolute contents inset-[8.33%_8.33%_0.78%_8.73%]">
                  <div className="absolute inset-[8.33%_8.33%_8.73%_8.73%]">
                    <div className="absolute inset-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p129c7300} fill="#6125B1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Sora:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6125b1] text-[14px] text-center text-nowrap">
              Memento says...
            </p>
          </div>
        </div>
      </div>
      
      {/* AI Response - types out */}
      <div 
        className={`absolute font-['Sora:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#1c2329] text-[14px] top-[308px] w-[361px] transition-opacity duration-300 ${
          displayedAIText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {displayedAIText.split('\n').map((paragraph, index) => (
          <p key={index} className={index === 0 ? 'mb-0' : ''}>
            {paragraph || '\u00A0'}
          </p>
        ))}
      </div>
      
      {/* Continue button */}
      <button
        onClick={onContinue}
        className={`absolute bg-white bottom-[32px] content-stretch flex h-[48px] items-center justify-center left-[16px] px-[145px] py-[12px] rounded-[16px] w-[361px] transition-all duration-400 hover:scale-[1.02] active:scale-[0.98] ${
          showContinue ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="font-['Sora:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1c2329] text-[16px] text-center text-nowrap">
          Continue
        </p>
      </button>
      
      {/* Back button */}
      <button 
        onClick={onBack}
        className="absolute bg-white content-stretch flex items-center left-[16px] p-[8px] rounded-[100px] shadow-[0px_4px_16px_0px_rgba(51,51,51,0.16)] top-[36px] cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d="M15 18L9 12L15 6" stroke="#2F3943" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </button>
      
      {/* Skip button */}
      <button 
        onClick={onSkip}
        className="absolute bg-white content-stretch flex h-[48px] items-center justify-center px-[21px] py-[14px] right-[16px] rounded-[100px] shadow-[0px_2px_16px_0px_rgba(21,20,20,0.1)] top-[32px] hover:scale-105 transition-transform cursor-pointer"
      >
        <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-black text-center text-nowrap">
          Skip
        </p>
      </button>
    </div>
  );
}