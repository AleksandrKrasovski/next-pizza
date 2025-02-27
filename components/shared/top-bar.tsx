import { cn } from '@/lib/utils';
import * as React from 'react';
import { Categories } from "@/components/shared/categories";
import { Sortpopup } from "@/components/shared/sort-popup";
import { Container } from './container';


interface Props {
    className?: string;
}

export const Topbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(
      'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', 
      className,
    )}>
      <Container>
        <Categories />
        <Sortpopup />
      </Container>
    </div>
  )
}

