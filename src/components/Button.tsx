import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-dark' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  icon = 'arrow-right',
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3.5 text-xs tracking-wider uppercase',
    lg: 'px-8 py-4 text-xs sm:text-sm tracking-wider uppercase',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#0A0A0A] text-[#F5F5F2] border border-[#0A0A0A] hover:bg-[#1F1F1F]',
    secondary:
      'bg-[#F5F5F2] text-[#0A0A0A] border border-[#F5F5F2] hover:bg-white',
    'outline-dark':
      'bg-transparent text-[#0A0A0A] border border-[#0A0A0A]/25 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F2]',
    'outline-light':
      'bg-transparent text-[#F5F5F2] border border-white/25 hover:border-white hover:bg-[#F5F5F2] hover:text-[#0A0A0A]',
  }[variant];

  const renderIcon = () => {
    if (icon === 'none') return null;
    if (icon === 'arrow-up-right') {
      return (
        <span className="inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
        <ArrowRight className="w-4 h-4" />
      </span>
    );
  };

  const combined = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined} onClick={onClick}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
        onClick={onClick}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
