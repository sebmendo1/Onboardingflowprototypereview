import svgPaths from "./svg-sxqpn1p89a";

function Icon() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pf411900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bottom-[32px] left-[calc(50%+0.5px)] size-[60px] translate-x-[-50%]" data-name="FAB">
      <div className="absolute bg-[#ff2d55] bottom-0 right-0 rounded-[100px] size-[60px]" />
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[53px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[80px]">
      <div className="absolute inset-[-7.55%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 61">
          <g id="Frame 1113">
            <path d="M4 25.5V35.5" id="Vector 940" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M24 10.5V50.5" id="Vector 939" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M44 4V57" id="Vector 941" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M64 20.5V40.5" id="Vector 942" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
            <path d="M84 25.5V35.5" id="Vector 938" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
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

function Fab1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48px] items-center justify-center px-[21px] py-[14px] right-[16px] rounded-[100px] shadow-[0px_2px_16px_0px_rgba(21,20,20,0.1)] top-[32px]" data-name="FAB">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-black text-center text-nowrap">Skip</p>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="Onboarding / 03">
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.04) 8.7497%, rgba(30, 99, 211, 0.04) 85.09%)" }} />
      <Fab />
      <div className="absolute left-[calc(50%+0.5px)] rounded-[1000px] size-[240px] top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ backgroundImage: "linear-gradient(169.088deg, rgb(167, 127, 219) 1.886%, rgb(87, 33, 156) 99.181%)" }} />
      <Frame />
      <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] left-[187.5px] not-italic text-[#2f3943] text-[24px] text-center top-[100px] translate-x-[-50%] w-[343px]">What would you like learn about yourself?</p>
      <Group />
      <Fab1 />
    </div>
  );
}