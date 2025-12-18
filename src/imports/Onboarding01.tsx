function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-1/2 text-center top-[100px] translate-x-[-50%] w-[343px]">
      <p className="font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#2f3943] text-[24px] w-full">Welcome to Memento</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#66707a] text-[16px] w-full">Create your account to get started.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#66707a] text-[16px] text-nowrap">
            <p className="leading-[24px]">Enter your first name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#b8c0c7] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Input />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#66707a] text-[16px] text-nowrap">
            <p className="leading-[24px]">Enter your last name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#b8c0c7] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Input2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[16px] top-[201px] w-[361px]">
      <Input1 />
      <Input3 />
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

function Group() {
  return (
    <div className="absolute left-[16px] size-[40px] top-[36px]">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g id="Group 44">
            <g filter="url(#filter0_d_1_137)" id="Ellipse 7">
              <circle cx="28" cy="24" fill="var(--fill-0, white)" r="20" />
            </g>
            <g id="Icon">
              <path d="M31 30L25 24L31 18" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[48px] size-full" data-name="Onboarding / 01">
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.04) 8.7497%, rgba(30, 99, 211, 0.04) 85.09%)" }} />
      <Frame1 />
      <Frame />
      <Button />
      <Group />
    </div>
  );
}