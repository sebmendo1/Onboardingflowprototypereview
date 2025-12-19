import { useEffect, useState } from 'react';

interface OnboardingScreen05Props {
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  userInput?: string;
}

// Mock AI function to generate tags based on user input
function generateTagsFromInput(input: string): string[] {
  const allTags = [
    "Self awareness",
    "Emotion naming",
    "Calming control",
    "Stress relief",
    "Thoughtful responses",
    "Self-kindness",
    "Honesty",
    "Compassion",
    "Communication",
  ];
  
  // In a real app, this would use AI to analyze the input
  // For now, return all tags with some pre-selected based on keywords
  return allTags;
}

function getInitialSelectedTags(input: string): string[] {
  // Pre-select tags based on user input keywords
  const lowerInput = input.toLowerCase();
  const selected: string[] = [];
  
  if (lowerInput.includes('emotion') || lowerInput.includes('feel')) {
    selected.push("Self awareness", "Emotion naming");
  }
  if (lowerInput.includes('stress') || lowerInput.includes('calm') || lowerInput.includes('anxious')) {
    selected.push("Calming control", "Stress relief");
  }
  if (lowerInput.includes('relationship') || lowerInput.includes('partner') || lowerInput.includes('friend')) {
    selected.push("Compassion", "Communication");
  }
  if (lowerInput.includes('manage')) {
    selected.push("Self awareness");
  }
  
  // Default selection if no matches
  if (selected.length === 0) {
    selected.push("Self awareness", "Calming control", "Stress relief", "Compassion");
  }
  
  return [...new Set(selected)]; // Remove duplicates
}

export function OnboardingScreen05({ onContinue, onBack, onSkip, userInput = "" }: OnboardingScreen05Props) {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [visibleTags, setVisibleTags] = useState<number>(0);

  useEffect(() => {
    // Generate tags from user input
    const generatedTags = generateTagsFromInput(userInput);
    setTags(generatedTags);
    
    // Start with NO tags selected (all in "off" state)
    setSelectedTags([]);
    
    // Animate tags appearing one by one
    generatedTags.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTags(index + 1);
      }, 100 + index * 80);
    });
  }, [userInput]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full">
      {/* Background gradient */}
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.08) 8.7497%, rgba(30, 99, 211, 0.08) 85.09%)" 
        }} 
      />
      
      {/* Header */}
      <div className="absolute left-[16px] text-[#1c2329] top-[108px]">
        <p className="font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[28px] not-italic text-[20px] w-[361px]">
          What would you like to explore?
        </p>
        <p className="font-['Sora:Regular',sans-serif] font-normal leading-[20px] mt-[15px] text-[14px] w-[361px]">
          You can change this anytime you want.
        </p>
      </div>
      
      {/* Tags */}
      <div className="absolute left-[16px] top-[197px] w-[361px]">
        <div className="content-center flex flex-wrap gap-[12px] items-center w-full">
          {tags.map((tag, index) => {
            const isSelected = selectedTags.includes(tag);
            const isVisible = index < visibleTags;
            
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[16px] shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                } ${
                  isSelected ? 'bg-[#f2eefc]' : ''
                }`}
              >
                {!isSelected && (
                  <div 
                    aria-hidden="true" 
                    className="absolute border border-[#e2e8ed] border-solid inset-0 pointer-events-none rounded-[16px]" 
                  />
                )}
                <p className={`font-['Sora:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-center text-nowrap ${
                  isSelected ? 'font-semibold text-[#6125b1]' : 'font-normal text-[#1c2329]'
                }`}>
                  {tag}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Continue button */}
      <button
        onClick={onContinue}
        disabled={selectedTags.length === 0}
        className={`absolute bg-white bottom-[32px] content-stretch flex h-[48px] items-center justify-center left-[16px] px-[145px] py-[12px] rounded-[16px] w-[361px] transition-all hover:scale-[1.02] active:scale-[0.98] ${
          selectedTags.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
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