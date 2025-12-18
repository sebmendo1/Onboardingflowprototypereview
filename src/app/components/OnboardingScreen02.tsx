import svgPaths from "../../imports/svg-d1ck4x93mr";

interface OnboardingScreen02Props {
  onStartRecording: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export function OnboardingScreen02({ onStartRecording, onBack, onSkip }: OnboardingScreen02Props) {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full">
      {/* Background gradient */}
      <div 
        className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
        style={{ 
          backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.04) 8.7497%, rgba(30, 99, 211, 0.04) 85.09%)" 
        }} 
      />
      
      {/* Header */}
      <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] left-[187.5px] not-italic text-[#2f3943] text-[24px] text-center top-[100px] translate-x-[-50%] w-[343px]">
        What would you like learn about yourself?
      </p>
      
      {/* Purple circle with gradient */}
      <div 
        className="absolute left-[calc(50%+0.5px)] rounded-[1000px] size-[180px] top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-out" 
        style={{ 
          backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)" 
        }} 
      />
      
      {/* Microphone FAB */}
      <button
        onClick={onStartRecording}
        className="absolute bottom-[32px] left-[calc(50%+0.5px)] size-[60px] translate-x-[-50%] cursor-pointer group"
      >
        <div className="absolute bg-white bottom-0 right-0 rounded-[100px] size-[60px] group-hover:scale-105 transition-transform" />
        <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g>
              <path d={svgPaths.p897c080} fill="#1C2329" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Back button */}
      <button 
        onClick={onBack}
        className="absolute left-[16px] size-[40px] top-[36px] cursor-pointer"
      >
        <div className="absolute inset-[-10%_-20%_-30%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <g>
              <g filter="url(#filter0_d_1_142)">
                <circle cx="28" cy="24" fill="white" r="20" />
              </g>
              <g>
                <path d="M31 30L25 24L31 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_d_1_142" width="56" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.16 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_142" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_142" mode="normal" result="shape" />
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