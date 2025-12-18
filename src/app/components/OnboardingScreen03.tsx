import { useEffect, useState } from 'react';
import svgPaths from "../../imports/svg-sxqpn1p89a";

interface OnboardingScreen03Props {
  onStopRecording: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export function OnboardingScreen03({ onStopRecording, onBack, onSkip }: OnboardingScreen03Props) {
  const [audioLevels, setAudioLevels] = useState([0.5, 0.7, 1, 0.6, 0.5]);
  const [circleSize, setCircleSize] = useState(180);

  useEffect(() => {
    // Bouncy scale animation when component mounts
    const animateCircle = () => {
      // Keyframe-like animation using setTimeout
      setTimeout(() => setCircleSize(260), 50);   // Overshoot
      setTimeout(() => setCircleSize(230), 200);  // Bounce back
      setTimeout(() => setCircleSize(245), 350);  // Small bounce
      setTimeout(() => setCircleSize(240), 500);  // Settle
    };
    
    animateCircle();

    // Animate audio levels to simulate recording
    const interval = setInterval(() => {
      setAudioLevels([
        Math.random() * 0.4 + 0.3,
        Math.random() * 0.6 + 0.4,
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.4 + 0.3,
        Math.random() * 0.4 + 0.3,
      ]);
    }, 150);

    return () => clearInterval(interval);
  }, []);

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
      
      {/* Purple circle with gradient - larger when recording */}
      <div 
        className="absolute left-[calc(50%+0.5px)] rounded-[1000px] top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all ease-out" 
        style={{ 
          backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)",
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          transitionDuration: '150ms',
        }} 
      />
      
      {/* Audio visualizer */}
      <div className="absolute h-[53px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[80px]">
        <div className="absolute inset-[-7.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 61">
            <g>
              <path 
                d="M4 25.5V35.5" 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="8"
                style={{
                  transform: `scaleY(${audioLevels[0]})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.15s ease-out'
                }}
              />
              <path 
                d="M24 10.5V50.5" 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="8"
                style={{
                  transform: `scaleY(${audioLevels[1]})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.15s ease-out'
                }}
              />
              <path 
                d="M44 4V57" 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="8"
                style={{
                  transform: `scaleY(${audioLevels[2]})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.15s ease-out'
                }}
              />
              <path 
                d="M64 20.5V40.5" 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="8"
                style={{
                  transform: `scaleY(${audioLevels[3]})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.15s ease-out'
                }}
              />
              <path 
                d="M84 25.5V35.5" 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="8"
                style={{
                  transform: `scaleY(${audioLevels[4]})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.15s ease-out'
                }}
              />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Stop recording FAB */}
      <button
        onClick={onStopRecording}
        className="absolute bottom-[32px] left-[calc(50%+0.5px)] size-[60px] translate-x-[-50%] cursor-pointer group"
      >
        <div className="absolute bg-[#ff2d55] bottom-0 right-0 rounded-[100px] size-[60px] group-hover:scale-105 transition-transform animate-pulse" />
        <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g>
              <path d={svgPaths.pf411900} fill="white" />
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