'use client'

import * as React from 'react';
import { useIntersection } from 'react-use';

import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';
// import { Type } from 'lucide-react';


interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ 
  title = '', 
  items = [],
  categoryId = 0, 
  className,
  listClassName
}) => {

  const setActiveCategoryId = useCategoryStore(state => state.setActiveId); 

  // Copilot suggested this line of code:
  const intersectionRef = React.createRef<HTMLElement>() as React.RefObject<HTMLElement>;
  
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title, setActiveCategoryId]);

  return (
    <div className={className} id={title}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div 
        // ref={intersectionRef}
        className={cn('grid grid-cols-3 gap-[50px]', listClassName)}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            className='min-w-[215px]'
          />
        ))}
      </div>
    </div>
  )
}

