'use strict';

import { Container, Title } from "@/components/shared";
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

      <Topbar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          
          {/* Goods List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров 1</div>
            <div className="flex flex-col gap-16">Список товаров 2</div>
          </div>
        </div>
      </Container>
{/* 
      <CheckboxFiltersGroup 
        title='55555' 
        items={[]}
        defaultItems={[]}
        limit={5}
        searchInputPlaceholder="Search..."
        onChange={() => {}}
        defaultValue={[]}
        className=""
      /> */}
    </>
  );
}