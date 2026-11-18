import { useState } from 'react';
import { ShieldAlert } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'GUNDAM ARCHIVE',
  fallbackSubtitle = '檔案影像載入異常',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#E9E6DE] text-[#4B5058] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ShieldAlert className="w-7 h-7 mb-2 text-[#1E3A8A] opacity-75" />
        <p className="font-tech text-xs tracking-wider text-[#141619] font-medium">
          {fallbackTitle}
        </p>
        <p className="text-xs text-[#575B62] mt-1">{fallbackSubtitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
