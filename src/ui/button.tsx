import { cn } from '@/lib/utils';
import React from 'react';

export function Button({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'appearance-none px-3 py-2 rounded-md text-sm text-gray-400 border border-gray-300 hover:bg-gray-100 text-center inline-flex items-center justify-center bg-white',
        className
      )}
      {...props}
    ></button>
  );
}
