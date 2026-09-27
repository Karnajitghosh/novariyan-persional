import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
  rightElement?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  theme = 'light',
  rightElement,
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b ${
        isDark ? 'border-white/12' : 'border-[#0A0A0A]/12'
      } ${className}`}
    >
      <div className="lg:col-span-7">
        <p
          className={`font-mono-tech text-xs tracking-[0.2em] uppercase mb-3 ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance ${
            isDark ? 'text-[#F5F5F2]' : 'text-[#0A0A0A]'
          }`}
        >
          {title}
        </h2>
      </div>

      {(description || rightElement) && (
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-end lg:items-end justify-between gap-4">
          {description && (
            <p
              className={`text-sm sm:text-base leading-relaxed max-w-md ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              {description}
            </p>
          )}
          {rightElement && <div className="shrink-0">{rightElement}</div>}
        </div>
      )}
    </div>
  );
};
