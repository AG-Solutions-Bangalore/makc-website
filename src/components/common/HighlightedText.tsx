interface HighlightedTextProps {
  text: string;
  highlight: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

export default function HighlightedText({ text, highlight, className = '', as: Tag = 'span' }: HighlightedTextProps) {
  const parts = text.split(highlight);
  
  return (
    <Tag className={className}>
      {parts[0]}
      <span className="text-highlight">{highlight}</span>
      {parts[1] || ''}
    </Tag>
  );
}
