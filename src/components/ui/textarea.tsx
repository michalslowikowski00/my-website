import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex h-[48px] rounded-md border border-white/10 focus:border-emerald-600 font-light bg-[#27272c] px-4 py-5 text-base placeholder:text-white/60 outline-none',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
