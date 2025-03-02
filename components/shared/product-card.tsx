import Link from 'next/link';
import * as React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';


interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px] w-[260px] cursor-pointer'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className='min-h-[215px] min-w[215px]' src={imageUrl} alt="logo" />
        </div>
      </Link>
      <Title className='mb-1 mt-3 font-bold' text={name} size='sm' />
      <p className="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
      </p>

      <div className="flex items-center justify-between mt-4">
        <span>
          от <b>{price} ₽</b>
        </span>
        <Button variant={'secondary'} className='text-base font-bold'>
          <Plus size={20} className='mr-1' />
          Добавить
        </Button>
      </div>
    </div>
  )
}

