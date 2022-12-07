import React, { useState } from 'react';
import Card from '../UI/Card';
import ShoppingFilter from './ShoppingFilter';
import ShoppingList from './ShoppingList';
import './Shopping.css';

const Shopping = (props) => {
 console.log("props",props)
  const [filteredArea, setFilteredArea] = useState('Thane');
  const [filteredCategory, setFilteredCategory] = useState('Grocery');

  const filterAreaHandler = (selectedArea) => {
    setFilteredArea(selectedArea);
  };

  const filterCategoryHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredShop = props.items.filter((shop) => {
    return (shop.area === filteredArea && shop.category === filteredCategory);
  });

  // const filteredExpCat = props.items.filter((expense) => {
  //   return expense.category === filteredCategory;
  // });

  

  return (
    <div>
      <Card className='shops'>
        <ShoppingFilter
          selectedArea={filteredArea}
          onChangeAreaFilter={filterAreaHandler}
          selectedCat={filteredCategory}
          onChangeCatFilter={filterCategoryHandler}
        />
        <ShoppingList items={filteredShop} deleteShop={props.deleteShop}/>
      </Card>
    </div>
  );
};

export default Shopping;