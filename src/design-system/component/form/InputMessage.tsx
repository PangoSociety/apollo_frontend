import { cn } from '@/design-system/shadcn/lib/utils.ts';
import * as React from 'react';

interface InputMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export default function InputMessage(props: InputMessageProps) {
  return (
    <p
      // ref={ref}
      // id={formMessageId}
      // className={cn('text-[0.8rem] font-medium text-destructive', className)}
      className={cn('text-[0.8rem] font-medium text-destructive')}
      // {...props}
    >
      {props.children}
    </p>
  );
}
