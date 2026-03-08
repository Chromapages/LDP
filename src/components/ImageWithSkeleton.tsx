import { useState } from 'react';
import clsx from 'clsx';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithSkeleton({ src, alt, className }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[var(--color-ink)]/5 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={clsx(
          className,
          'transition-all duration-1000',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </>
  );
}
