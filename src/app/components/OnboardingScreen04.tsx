import { useEffect, useState } from 'react';
import svgPaths from "../../imports/svg-d2kuvgt6ye";

interface OnboardingScreen04Props {
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  userInput?: string;
}

const DEFAULT_USER_INPUT = "I'd like to learn how to manage my emotions more effectively, and to improve my own relationships with friends, family, and my partner.";
const AI_RESPONSE = "That sounds like a great goal! Memento is here to help you accomplish it one step at a time. \n\nRemember: the more you journal, the more you get from the app! You make your own experience.";

export function OnboardingScreen04({ onContinue, onBack, onSkip, userInput = DEFAULT_USER_INPUT }: OnboardingScreen04Props) {
  const [circleScale, setCircleScale] = useState(1);
  const [showUserText, setShowUserText] = useState(false);
  const [showAIBadge, setShowAIBadge] = useState(false);
  const [displayedAIText, setDisplayedAIText] = useState('');
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timeline = [
      // Shrink circle
      { delay: 300, action: () => setCircleScale(0.001) },
      // Show user text
      { delay: 1000, action: () => setShowUserText(true) },
      // Show AI badge
      { delay: 1800, action: () => setShowAIBadge(true) },
    ];

    timeline.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    // Type out AI response
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
    }, 2400);

    return () => clearTimeout(startTyping);
  }, []);

  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full">
      {/* Background gradient */}
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.08) 8.7497%, rgba(30, 99, 211, 0.08) 85.09%)" 
        }} 
      />
      
      {/* Purple circle - shrinks to tiny dot */}
      <div 
        className="absolute left-1/2 rounded-[1000px] top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-700 ease-out"
        style={{ 
          backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)",
          width: `${240 * circleScale}px`,
          height: `${240 * circleScale}px`,
          opacity: circleScale < 0.1 ? 0 : 1,
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
      
      {/* "Memento says..." badge */}
      <div 
        className={`absolute bg-[#f2eefc] content-stretch flex flex-col items-start left-[16px] p-[8px] rounded-[16px] top-[232px] transition-all duration-400 ${
          showAIBadge ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
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
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6125b1] text-[11px] text-center text-nowrap">
            Memento says...
          </p>
        </div>
      </div>
      
      {/* AI Response - types out */}
      <div 
        className={`absolute font-['Sora:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#1c2329] text-[13px] top-[280px] tracking-[-0.65px] w-[361px] transition-opacity duration-300 ${
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
        className="absolute left-[16px] size-[40px] top-[36px] cursor-pointer"
      >
        <div className="absolute inset-[-10%_-20%_-30%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <g>
              <g filter="url(#filter0_d_1_150)">
                <circle cx="28" cy="24" fill="white" r="20" />
              </g>
              <g>
                <path d="M31 30L25 24L31 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_d_1_150" width="56" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.16 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_150" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_150" mode="normal" result="shape" />
              </filter>
            </defs>
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