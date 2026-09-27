import React from 'react';

interface PrakruthiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
}

export const PrakruthiLogo: React.FC<PrakruthiLogoProps> = ({
  className = '',
  size = 'md',
  rounded = true,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  }[size];

  return (
    <div
      className={`relative inline-block overflow-hidden shrink-0 border border-[#143d23]/20 shadow-xs ${
        rounded ? 'rounded-xl' : 'rounded-none'
      } ${sizeClasses} ${className}`}
    >
      <img
        src="/prakruthi_logo.png"
        alt="Prakruthi Beauty Salon Logo"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};
