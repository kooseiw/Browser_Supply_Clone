type TitleSegment = {
  text: string;
  italic: boolean;
};

type AccentTitleProps = {
  segments: TitleSegment[];
  className?: string;
};

export default function AccentTitle({ segments, className }: AccentTitleProps) {
  return (
    <h1 className={className}>
      {segments.map((segment, index) => {
        if (segment.text === "\n") {
          return <br key={index} />;
        }

        if (segment.italic) {
          return <em key={index}>{segment.text}</em>;
        }

        return <span key={index}>{segment.text}</span>;
      })}
    </h1>
  );
}
