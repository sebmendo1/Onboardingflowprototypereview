import svgPaths from "./svg-jkju15rmqu";

function Group1() {
  return (
    <div className="absolute left-[16px] size-[40px] top-[36px]">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g id="Group 44">
            <g filter="url(#filter0_d_1_150)" id="Ellipse 7">
              <circle cx="28" cy="24" fill="var(--fill-0, white)" r="20" />
            </g>
            <g id="Icon">
              <path d="M31 30L25 24L31 18" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%_8.33%_0.78%_8.73%]" data-name="Group">
      <div className="absolute inset-[96.43%_46.2%_0.78%_50.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <div className="absolute inset-[8.33%_8.33%_8.73%_8.73%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(97, 37, 177, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p129c7300} fill="var(--fill-0, #6125B1)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MingcuteAiFill() {
  return (
    <div className="absolute aspect-[24/24] bottom-0 left-1/2 overflow-clip top-0 translate-x-[-50%]" data-name="mingcute:ai-fill">
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
      <MingcuteAiFill />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon />
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6125b1] text-[11px] text-center text-nowrap">Memento says...</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f2eefc] content-stretch flex flex-col items-start left-[16px] p-[8px] rounded-[16px] top-[232px]">
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white bottom-[32px] content-stretch flex h-[48px] items-center justify-center left-[16px] px-[145px] py-[12px] rounded-[16px] w-[361px]" data-name="Button">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1c2329] text-[16px] text-center text-nowrap">Continue</p>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="Onboarding / 07">
      <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[28px] left-[16px] not-italic text-[#1c2329] text-[20px] top-[108px] w-[361px]">{`I’d like to learn how to manage my emotions more effectively, and to improve my own relationships with friends, family, and my partner. `}</p>
      <Group1 />
      <Frame1 />
      <div className="absolute font-['Sora:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#1c2329] text-[13px] top-[280px] tracking-[-0.65px] w-[361px]">
        <p className="mb-0">{`That sounds like a great goal! Memento is here to help you accomplish it one step at a time. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Remember: the more you journal, the more you get from the app! You make your own experience. `}</p>
      </div>
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.08) 8.7497%, rgba(30, 99, 211, 0.08) 85.09%)" }} />
      <Button />
    </div>
  );
}