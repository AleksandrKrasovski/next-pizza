'use client';

import * as React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';


interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>

      <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

      {/* Upper Checkboxes: */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      {/* Price Filter: */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type="number" min={0} max={1000} placeholder='0' defaultValue={0} />
          <Input type="number" min={100} max={30000} placeholder='1000' />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup 
        title='Инградиенты' 
        items={[
          { text: 'Мясо', value: '1' },
          { text: 'Сыр', value: '2' },
          { text: 'Помидор', value: '3' },
          { text: 'Картофель', value: '4' },
          { text: 'Вода', value: '5' },
          { text: 'Молоко', value: '6' },
          { text: 'Сахар', value: '7' },
          { text: 'Кефир', value: '8' },
          { text: 'Сладкий соус', value: '9' },
          { text: 'Кетчуп', value: '10' },
          { text: 'Моццареллм', value: '11' },
          { text: 'Чеснок', value: '12' },
          { text: 'Красный лук', value: '13' },
          { text: 'Лук', value: '14' },
          { text: 'Сырный соус', value: '15' },
        ]} 
        defaultItems={[
          { text: 'Мясо', value: '1' },
          { text: 'Сыр', value: '2' },
          { text: 'Помидор', value: '3' },
          { text: 'Картофель', value: '4' },
          { text: 'Вода', value: '5' },
          { text: 'Молоко', value: '6' },
          { text: 'Сахар', value: '7' },
          { text: 'Кефир', value: '8' },
          { text: 'Сладкий соус', value: '9' },
          { text: 'Кетчуп', value: '10' },
          { text: 'Моццареллм', value: '11' },
          { text: 'Чеснок', value: '12' },
          { text: 'Красный лук', value: '13' },
          { text: 'Лук', value: '14' },
          { text: 'Сырный соус', value: '15' },
        ]} 
        className='mt-5' 
        searchInputPlaceholder='Search ingredients' 
        onChange={() => {}} 
        defaultValue={[]} 
      />
    </div>
  )
}

