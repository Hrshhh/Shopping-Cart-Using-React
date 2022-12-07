import React,{useState} from 'react';
import ShoppingForm from './ShoppingForm';
import './NewShopping.css';

const NewShopping = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const saveShopDataHandler = (enteredShoppingData) => {
    const shoppingData = [{
      ...enteredShoppingData,
      id: Math.random().toString()
    }];
    props.onAddShop(shoppingData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-shop'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Shop</button>
      )}
      {isEditing && (
        <ShoppingForm onSaveShopData={saveShopDataHandler} onCancel={stopEditingHandler}/>
      )}
      
    </div>
  );
};

export default NewShopping;