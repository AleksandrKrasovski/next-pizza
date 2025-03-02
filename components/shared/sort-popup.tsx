import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import * as React from 'react';


interface Props {
    className?: string;
}

export const Sortpopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(
      'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', 
      className,
    )}>
			<ArrowUpDown className='h-4' size={16}/>
			<b className='h-4'>Сортировка</b>
			<b className='h-4 text-primary'>популярное</b>
    </div>
  )
}

