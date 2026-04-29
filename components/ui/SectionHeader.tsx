interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleGradient?: 'gold' | 'lavender';
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleGradient,
  description,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  const gradientClass =
    titleGradient === 'gold'
      ? 'text-gradient-gold'
      : titleGradient === 'lavender'
      ? 'text-gradient-lavender'
      : 'text-[#e8e4f8]';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c89040] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${gradientClass}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[#2cd4f0] text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
