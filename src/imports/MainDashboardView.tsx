import svgPaths from "./svg-epk0a71ige";

function Group1() {
  return (
    <div className="absolute contents left-[3.99px] top-[8.88px]">
      <div className="absolute h-[23.018px] left-[3.99px] top-[8.88px] w-[11.509px]">
        <div className="absolute inset-[9.97%_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5091 20.7237">
            <path d={svgPaths.p23eb4e00} fill="url(#paint0_linear_20_460)" id="Vector 7" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_460" x1="5.75454" x2="5.75454" y1="-2.29451" y2="20.7237">
                <stop stopColor="#7B3EC9" />
                <stop offset="1" stopColor="#57219C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[23.018px] items-center justify-center left-[15.5px] top-[8.88px] w-[11.509px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[23.018px] relative w-[11.509px]">
            <div className="absolute inset-[9.97%_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5091 20.7237">
                <path d={svgPaths.p1111a100} fill="url(#paint0_linear_20_456)" id="Vector 8" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_456" x1="-0.907317" x2="5.75453" y1="-0.211191" y2="20.7237">
                    <stop stopColor="#57219C" />
                    <stop offset="1" stopColor="#57219C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9488 10.9482">
          <path d={svgPaths.p351c2c00} fill="url(#paint0_linear_20_452)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_452" x1="5.47438" x2="5.47438" y1="0" y2="10.9482">
              <stop stopColor="#57219C" />
              <stop offset="1" stopColor="#6125B1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MingcuteAiFill() {
  return (
    <div className="absolute aspect-[24/24] bottom-0 left-[calc(50%+0.4px)] overflow-clip top-0 translate-x-[-50%]" data-name="mingcute:ai-fill">
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[calc(50%-0.4px)] overflow-clip size-[13.2px] top-px translate-x-[-50%]" data-name="Icon">
      <MingcuteAiFill />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-px translate-x-[-50%]">
      <Group1 />
      <Icon />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-0 left-[-0.25px] overflow-clip top-0 w-[32px]" data-name="Logo">
      <Group2 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[134px]" data-name="Logo">
      <p className="absolute bottom-0 font-['Recoleta:SemiBold',sans-serif] leading-[28px] left-[37.94px] not-italic text-[#2f3943] text-[22px] top-[15.63%] w-[100px]">Memento</p>
      <Logo />
    </div>
  );
}

function MdiUser() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:user">
          <path d={svgPaths.p34aff900} fill="var(--fill-0, #6125B1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-center ml-0 mt-0 p-[8px] relative rounded-[100px]">
      <MdiUser />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function AppHeaderMain() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#efefef] from-[55.768%] items-center justify-between left-0 pb-0 pt-[48px] px-[16px] to-[103.5%] to-[rgba(239,239,239,0)] top-0 w-[393px]" data-name="App-Header / Main">
      <Logo1 />
      <Group3 />
    </div>
  );
}

function ButtonCreateEntry() {
  return (
    <div className="absolute bg-[#1c2329] bottom-[32px] content-stretch flex gap-[12px] h-[48px] items-center justify-center left-[calc(50%-0.5px)] p-[16px] rounded-[100px] shadow-[0px_8px_16px_0px_rgba(51,51,51,0.16)] translate-x-[-50%]" data-name="Button / Create Entry">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(242, 242, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p1c071880} fill="var(--fill-0, #F2F2F7)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#f2f2f7] text-[14px] text-center text-nowrap">Create an entry</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[84px] not-italic text-[#1c2329] text-center text-nowrap top-[377px]">
      <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] left-[197px] text-[24px] top-[377px] translate-x-[-50%]">Let’s get started</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[197px] text-[16px] top-[426px] translate-x-[-50%]">Create your first journal entry.</p>
    </div>
  );
}

export default function MainDashboardView() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="MainDashboardView">
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.08) 8.7497%, rgba(30, 99, 211, 0.08) 85.09%)" }} />
      <AppHeaderMain />
      <ButtonCreateEntry />
      <Group4 />
    </div>
  );
}