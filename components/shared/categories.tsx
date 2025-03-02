import { cn } from '@/lib/utils';
import * as React from 'react';


interface Props {
    className?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(
      'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', 
      className
    )}>
      {
        cats.map((cat, index) => (
          <a className={cn(
            'inline-flex items-center font-bold h-10 rounded-2xl px-5',
            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',                    
            )} key={index}>
            <button>{cat}</button>
          </a>
        ))
      }
    </div>
  )
}

