import { cn } from '@/lib/utils';
import * as React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto min-w-[1064px] max-w-[1280px]', className)}>{children}</div>;
};
