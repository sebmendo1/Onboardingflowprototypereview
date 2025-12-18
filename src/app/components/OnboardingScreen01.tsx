import { useState } from 'react';

interface OnboardingScreen01Props {
  onContinue: (data: { firstName: string; lastName: string }) => void;
  onBack?: () => void;
}

export function OnboardingScreen01({ onContinue, onBack }: OnboardingScreen01Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleContinue = () => {
    if (firstName.trim() && lastName.trim()) {
      onContinue({ firstName, lastName });
    }
  };

  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[48px] size-full">
      {/* Background gradient */}
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.04) 8.7497%, rgba(30, 99, 211, 0.04) 85.09%)" 
        }} 
      />
      
      {/* Header */}
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-1/2 text-center top-[100px] translate-x-[-50%] w-[343px]">
        <p className="font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#2f3943] text-[24px] w-full">
          Welcome to Memento
        </p>
        <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#66707a] text-[16px] w-full">
          Create your account to get started.
        </p>
      </div>
      
      {/* Input fields */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[16px] top-[201px] w-[361px]">
        {/* First name input */}
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[16px] shrink-0 w-full">
          <div 
            aria-hidden="true" 
            className="absolute border-[#b8c0c7] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" 
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="bg-white h-[52px] w-full rounded-[12px] px-[16px] py-[12px] font-['Sora:Regular',sans-serif] font-normal text-[16px] text-[#2f3943] placeholder:text-[#66707a] outline-none leading-[24px]"
          />
        </div>
        
        {/* Last name input */}
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[16px] shrink-0 w-full">
          <div 
            aria-hidden="true" 
            className="absolute border-[#b8c0c7] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" 
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            className="bg-white h-[52px] w-full rounded-[12px] px-[16px] py-[12px] font-['Sora:Regular',sans-serif] font-normal text-[16px] text-[#2f3943] placeholder:text-[#66707a] outline-none leading-[24px]"
          />
        </div>
      </div>
      
      {/* Continue button */}
      <button
        onClick={handleContinue}
        disabled={!firstName.trim() || !lastName.trim()}
        className="absolute bg-white bottom-[32px] content-stretch flex h-[48px] items-center justify-center left-[16px] px-[145px] py-[12px] rounded-[16px] w-[361px] transition-opacity disabled:opacity-40"
      >
        <p className="font-['Sora:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1c2329] text-[16px] text-center text-nowrap">
          Continue
        </p>
      </button>
      
      {/* Back button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute left-[16px] size-[40px] top-[36px] cursor-pointer"
        >
          <div className="absolute inset-[-10%_-20%_-30%_-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
              <g>
                <g filter="url(#filter0_d_1_137)">
                  <circle cx="28" cy="24" fill="white" r="20" />
                </g>
                <g>
                  <path d="M31 30L25 24L31 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_d_1_137" width="56" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.16 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_137" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_137" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
