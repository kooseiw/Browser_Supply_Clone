type TitleSegment = {
  text: string;
  italic: boolean;
};

type AccentTitleProps = {
  segments: TitleSegment[];
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function AccentTitle({
  segments,
  className,
  as: Tag = "h1",
}: AccentTitleProps) {
  return (
    <Tag className={className}>
      {segments.map((segment, index) => {
        if (segment.text === "\n") {
          return <br key={index} />;
        }

        if (segment.italic) {
          return <em key={index}>{segment.text}</em>;
        }

        return <span key={index}>{segment.text}</span>;
      })}
    </Tag>
  );
}
