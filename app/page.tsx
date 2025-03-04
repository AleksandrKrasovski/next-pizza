'use strict';

import { Container, ProductsGroupList, Title } from "@/components/shared";
// import { CheckboxFiltersGroup } from "@/components/shared";
import { Topbar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import * as React from "react";

export default function Home() {

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <Topbar className="min-w-[1000px]"/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          
          {/* Goods List */}
          <div>
            <div className="flex-1 min-w-[1060px]">
              <div className="flex flex-col gap-16">
                <ProductsGroupList
                  title="Пиццы" 
                  categoryId={1}
                  items={[
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 2,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 3,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 4,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 5,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 6,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                <ProductsGroupList 
                  title="Комбо" 
                  categoryId={2}
                  items={[
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 2,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 3,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 4,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 5,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                    {
                      id: 6,
                      name: 'Чизбургер-пицца',
                      imageUrl: 
                        'https://media.dodostatic.net/image/r:292x292/11ee7d5f06cb389898c7ff7b707f03a0.jpg',
                      price: 550,
                      items: [{ price: 550 }]
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}