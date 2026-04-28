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
    'bg-gradient-to-r from-[#e8b030] to-[#c89020] text-[#fdf5f8] font-semibold hover:opacity-90 active:scale-[0.98]',
  secondary:
    'bg-[#f8dce8] text-[#1e1428] border border-[#e8b8cc] hover:bg-[#e8b8cc] active:scale-[0.98]',
  ghost:
    'text-[#6a3858] hover:text-[#1e1428] hover:bg-[#fce8f0] active:scale-[0.98]',
  outline:
    'text-[#6a3858] border border-[#e8b8cc] hover:border-[#48c8b0] hover:text-[#1e1428] active:scale-[0.98]',
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
