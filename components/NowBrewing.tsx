export default function NowBrewing() {
  const text =
    "NOW BREWING · Ethiopia Yirgacheffe · Guatemala Huehuetenango · Kenya AA · Colombia Huila · Single Origin · Direct Trade · Small Batch Roasted in Seattle · ";

  return (
    <div
      className="fixed top-20 left-0 right-0 z-50 bg-[#C4956A] text-white h-8 sm:h-9 overflow-hidden flex items-center"
      style={{ touchAction: "pan-y" }}
    >
      <div className="flex whitespace-nowrap ticker-mobile sm:ticker-desktop">
        <span className="text-xs tracking-[0.08em] sm:tracking-[0.15em] uppercase font-medium">
          {text}
        </span>
        <span className="text-xs tracking-[0.08em] sm:tracking-[0.15em] uppercase font-medium">
          {text}
        </span>
      </div>
    </div>
  );
}
