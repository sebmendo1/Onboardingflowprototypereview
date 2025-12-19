function Group() {
  return (
    <div className="absolute contents left-[84px] not-italic text-[#1c2329] text-center text-nowrap top-[377px]">
      <p className="absolute font-['Euclid_Circular_B:SemiBold',sans-serif] leading-[32px] left-[197px] text-[24px] top-[377px] translate-x-[-50%]">Let’s get started</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[197px] text-[16px] top-[426px] translate-x-[-50%]">Create your first journal entry.</p>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[32px] size-full" data-name="Onboarding / 11">
      <Group />
      <div className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" style={{ backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.06) 8.7497%, rgba(30, 99, 211, 0.06) 85.09%)" }} />
    </div>
  );
}