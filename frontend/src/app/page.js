export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#04294B]">
      <h1
        className="
          font-eras-italic   /* ITC Eras family, always italic */
          -skew-x-12         /* extra lean to the right */
          text-white leading-none text-center
        "
      >
        {/* First line — 700 italic, orange ‘NOW’, no space between words */}
        <span className="block text-5xl md:text-7xl font-bold tracking-tight">
          HIRE<span className="text-orange-500">NOW</span>
        </span>

        {/* Second line — 500 italic, smaller, right-aligned, wider spacing */}
        <span
          className="
            block text-right text-sm md:text-base font-medium
            tracking-[0.25em]   /* 👈 wider letter-spacing */
          "
        >
          LIMITED
        </span>
      </h1>
    </div>
  );
}
