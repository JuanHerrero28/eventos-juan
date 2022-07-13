import React from 'react';
import { Item } from './Item';
import './ItemList.css';


export const ItemList = ({ items }) => {
  return (
    <section className="flex-row">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};