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
    'bg-gradient-to-r from-[#c89040] to-[#a87828] text-[#07051a] font-semibold hover:opacity-90 active:scale-[0.98]',
  secondary:
    'bg-[#1a1640] text-[#e8e4f8] border border-[#3a2d78] hover:bg-[#3a2d78] active:scale-[0.98]',
  ghost:
    'text-[#a898d8] hover:text-[#e8e4f8] hover:bg-[#130f30] active:scale-[0.98]',
  outline:
    'text-[#a898d8] border border-[#3a2d78] hover:border-[#2cd4f0] hover:text-[#e8e4f8] active:scale-[0.98]',
  danger:
    'bg-red-900/40 text-red-300 border border-red-800/40 hover:bg-red-900/60 active:scale-[0.98]',
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
