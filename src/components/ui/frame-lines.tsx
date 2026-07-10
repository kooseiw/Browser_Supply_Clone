type FrameLinesProps = {
  className?: string;
};

export default function FrameLines({ className }: FrameLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 ${className ?? ""}`}
    >
      <div className="relative mx-auto h-full max-w-7xl">
        <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
        <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
      </div>
    </div>
  );
}
