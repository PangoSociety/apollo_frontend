import { RotatingLines } from 'react-loader-spinner';
import React from 'react';
import { cn } from '@/design-system/shadcn/lib/utils';
import colors from 'tailwindcss/colors';

interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {}

function LoadingState({ className }: LoadingStateProps) {
  return (
    <div className={cn('h-full w-full flex items-center justify-center', className)}>
      {/* TODO: Move dynamic color to enterprise theme */}
      <RotatingLines strokeWidth="3" strokeColor={colors.blue[500]} />
    </div>
  );
}

export default LoadingState;
