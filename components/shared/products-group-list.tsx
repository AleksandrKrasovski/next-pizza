import * as React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';


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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categoryId = 0, 
  className,
  listClassName
}) => {
  return (
    <div className={className}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
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

