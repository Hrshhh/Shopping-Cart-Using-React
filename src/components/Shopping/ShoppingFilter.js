import React from 'react';
import './ShoppingFilter.css';

const ShoppingFilter = (props) => {

  const dropdownAreaChangeHandler = (event) => {
    props.onChangeAreaFilter(event.target.value);
  };

  const dropdownCatChangeHandler = (event) => {
    props.onChangeCatFilter(event.target.value);
  };

  return (
    <div className='shopping-filter'>
      <div className='shopping-filter__control'>
        <label className='label-area'>Area</label>
        <select value={props.selectedArea} onChange={dropdownAreaChangeHandler}>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
            <option value="Jalgaon">Jalgaon</option>
        </select>

        <label className='label-category'>Category</label>
            <select value={props.selectedCat} onChange={dropdownCatChangeHandler}>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationery">Stationery shop</option>
                <option value="Florist">Florist</option>
            </select>
      </div>
    </div>
  );
};

export default ShoppingFilter;