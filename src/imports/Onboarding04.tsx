function AudioWaves() {
  return (
    <div className="absolute h-[8px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[80px]" data-name="Audio-Waves">
      <div className="absolute inset-[-50%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 16">
          <g id="Audio-Waves">
            <path d="M4 4V12" id="Vector 940" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M24 4V12" id="Vector 939" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M44 4V12" id="Vector 941" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M64 4V12" id="Vector 942" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M84 4V12" id="Vector 938" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function OnboardingPromptIndicator() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[120px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Onboarding-Prompt-Indicator">
      <div className="absolute left-1/2 rounded-[1000px] size-[120px] top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)" }} />
      <AudioWaves />
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="Onboarding / 04">
      <OnboardingPromptIndicator />
    </div>
  );
}