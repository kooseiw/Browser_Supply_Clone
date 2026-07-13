type FrameLinesProps = {
  className?: string;
};

export default function FrameLines({ className }: FrameLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 ${className ?? ""}`}
    >
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className="absolute inset-y-0 left-4 w-px bg-black/90 md:left-0" />
        <div className="absolute inset-y-0 right-4 w-px bg-black/30 md:right-0" />
      </div>
    </div>
  );
}
