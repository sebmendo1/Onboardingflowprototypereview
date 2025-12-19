import svgPaths from "./svg-ucp80m7c9a";

function Icon() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p897c080} fill="var(--fill-0, #1C2329)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bottom-[32px] left-[calc(50%+0.5px)] size-[60px] translate-x-[-50%]" data-name="FAB">
      <div className="absolute bg-white bottom-0 right-0 rounded-[100px] size-[60px]" />
      <Icon />
    </div>
  );
}

function OnboardingPromptIndicator() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[180px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Onboarding-Prompt-Indicator">
      <div className="absolute left-1/2 rounded-[1000px] size-[180px] top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)" }} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #2F3943)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonDefault() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[16px] p-[8px] rounded-[100px] shadow-[0px_4px_16px_0px_rgba(51,51,51,0.16)] top-[36px]" data-name="Icon-Button / Default">
      <Icon1 />
    </div>
  );
}

function Fab1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48px] items-center justify-center px-[21px] py-[14px] right-[16px] rounded-[100px] shadow-[0px_2px_16px_0px_rgba(21,20,20,0.1)] top-[32px]" data-name="FAB">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-black text-center text-nowrap">Skip</p>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="Onboarding / 02">
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.06) 8.7497%, rgba(30, 99, 211, 0.06) 85.09%)" }} />
      <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] left-[187.5px] not-italic text-[#2f3943] text-[24px] text-center top-[100px] translate-x-[-50%] w-[343px]">What would you like learn about yourself?</p>
      <Fab />
      <OnboardingPromptIndicator />
      <IconButtonDefault />
      <Fab1 />
    </div>
  );
}