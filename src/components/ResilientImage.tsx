import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#141414] text-[#F5F5F2] p-8 overflow-hidden ${containerClassName}`}
      >
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-40" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-3">
            <ArrowUpRight className="w-4 h-4 text-white/70" />
          </div>
          <span className="font-display text-xl tracking-wide uppercase text-white/90">
            {fallbackLabel || alt || 'NOVARIYAN STUDIO'}
          </span>
          <span className="font-mono-tech text-[11px] text-white/50 mt-1">
            Visual Asset Placeholder
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Novariyan visual asset'}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      {...props}
    />
  );
};
