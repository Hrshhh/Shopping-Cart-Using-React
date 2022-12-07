import React from 'react';
import Card from '../UI/Card';
import './ShoppingItem.css';


const ShoppingItem = (props) => {
  console.log(props)
  return (
    <Card className='shopping-item'>
     {props.opn_date} 
      <div className='shopping-item__description'>
        <h2>{props.title}</h2>
        <div className='shopping-item__area'>{props.area}</div>
        <div className='shopping-item__cat'>{props.category}</div>
      </div>
      {props.cls_date}
      <button onClick={() => {props.delete_shop(props.id)}}>Delete</button>
    </Card>
  );
}

export default ShoppingItem;