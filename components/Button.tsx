'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none';

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const variants = {
    primary:
      'bg-[#4fffb0] text-[#0a0a0a] hover:bg-[#3ae89a] hover:shadow-[0_0_30px_rgba(79,255,176,0.4)] hover:scale-105 active:scale-[0.98]',
    outline:
      'border border-[#4fffb0] text-[#4fffb0] hover:bg-[rgba(79,255,176,0.08)] hover:shadow-[0_0_20px_rgba(79,255,176,0.2)] hover:scale-105 active:scale-[0.98]',
    ghost:
      'text-white/70 hover:text-white hover:bg-white/5 hover:scale-105 active:scale-[0.98]',
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
