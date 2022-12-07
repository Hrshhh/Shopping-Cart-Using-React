import React from 'react';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.css';

const ShoppingList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='shopping-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='shopping-list'>
      {props.items.map((expense) => (
        console.log("expemn",expense),
        <ShoppingItem
          id={expense.id}
          title={expense.title}
          area={expense.area}
          category={expense.category}
          opn_date={expense.opn_date}
          cls_date={expense.cls_date}
          delete_shop={props.deleteShop}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;