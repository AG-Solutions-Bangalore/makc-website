interface SectionLabelProps {
  text: string;
  variant?: 'dark' | 'light' | 'yellow';
  className?: string;
}

export default function SectionLabel({ text, variant = 'dark', className = '' }: SectionLabelProps) {
  const dotColor = variant === 'yellow' ? 'bg-ma-black' : 'bg-ma-yellow';
  // const textColor = variant === 'yellow' ? 'text-ma-black' : variant === 'light' ? 'text-ma-gray-4' : 'text-ma-yellow';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`w-2 h-2 ${dotColor}`} />
      <span className={`heading-display text-tiny-heading`}>
        {text}
      </span>
    </div>
  );
}
