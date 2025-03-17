'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import * as React from 'react';


interface Props {
    className?: string;
}

const cats = [
  { id: 0, name: 'Пиццы' },
  { id: 1, name: 'Комбо' },
  { id: 2, name: 'Закуски' },
  { id: 3, name: 'Коктейли' },
  { id: 4, name: 'Кофе' },
  { id: 5, name: 'Напитки' },
  { id: 6, name: 'Десерты' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoriyActiveId = useCategoryStore(state => state.activeId); 
  return (
    <div className={cn(
      'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', 
      className
    )}>
      {
        cats.map(({name}, index) => (
          <a className={cn(
            'inline-flex items-center font-bold h-10 rounded-2xl px-5',
            categoriyActiveId === index && 'bg-white shadow-md shadow-gray-200 text-primary',                    
            )} 
            href={'/#${name}'}
            key={index}>
            <button>{name}</button>
          </a>
        ))
      }
    </div>
  )
}

