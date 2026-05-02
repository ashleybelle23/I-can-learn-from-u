import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#231890] text-white font-semibold shadow-lg hover:bg-[#1a1270] active:scale-[0.98]',
  secondary:
    'bg-white/25 text-[#1a1060] border border-[#1a1060]/30 font-medium hover:bg-white/40 active:scale-[0.98]',
  ghost:
    'text-[#1a1060] hover:text-[#231890] hover:bg-white/20 active:scale-[0.98]',
  outline:
    'text-[#1a1060] border border-[#1a1060]/50 font-medium hover:bg-[#231890] hover:text-white hover:border-[#231890] active:scale-[0.98]',
  danger:
    'bg-red-600/20 text-red-800 border border-red-500/40 font-medium hover:bg-red-600/30 active:scale-[0.98]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
