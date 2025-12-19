import svgPaths from "./svg-w00d9vbhzb";

function Icon() {
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
      <Icon />
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

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
      <MingcuteAiFill />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon1 />
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6125b1] text-[14px] text-center text-nowrap">Memento says...</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[32px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#6125b1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[168px] items-start left-[16px] top-[100px] w-[361px]">
      <p className="basis-0 font-['Euclid_Circular_B:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-full not-italic relative shrink-0 text-[#1c2329] text-[20px] w-[min-content]">{`I’d like to learn how to manage my emotions more effectively, and to improve my own relationships with friends, family, and my partner. `}</p>
      <Frame1 />
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="Onboarding / 06">
      <IconButtonDefault />
      <Frame2 />
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.06) 8.7497%, rgba(30, 99, 211, 0.06) 85.09%)" }} />
    </div>
  );
}