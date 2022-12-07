import React, { useState } from 'react';
import './ShoppingForm.css';
import { toast } from 'react-toastify';

const ShoppingForm = (props) => {
  const [formValue , setFormValue] = useState({title:"",area:"Thane",category:"Grocery", opn_date:"", cls_date:""});
  const onHandleChange = (event)=> {
   
    const {name, value} = event.target
    switch(name){
    case "title":
      setFormValue({...formValue, "title": value});
       break;
    case "area":
      setFormValue({...formValue, "area": value});
      break;
    case "category":
      setFormValue({...formValue, "category": value})
      break;
    case "opn_date":
      setFormValue({...formValue, "opn_date": value,"cls_date":""});
      break;
    case "cls_date":
      if(validCloseDate(value,formValue.opn_date))
      setFormValue({...formValue, "cls_date": value});
      
      break;
    default:
    }
    

  }

  

  const validCloseDate =(closeDate,openDate) =>{
    const open_date = new Date(openDate);
    const close_date = new Date(closeDate)
    if(close_date > open_date )
    {
      return true
    }
    return false

  }
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveShopData(formValue);

  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-shopping__controls'>
        <div className='new-shopping__control'>
          <label>Title</label>
          <input
            type='text'
            name="title"
            value={formValue.title}
            onChange={onHandleChange}
          />
        </div>
        <div className='new-shopping__control'>
          <label>Area</label>
          
            <select name="area" value={formValue.area} onChange={onHandleChange} >
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
              <option value="Jalgaon">Jalgaon</option>
            </select>
            
          
        </div>
        <div className='new-shopping__control'>
          <label>Category</label>
          
            <select name ="category" value={formValue.category} onChange={onHandleChange}>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationery">Stationery shop</option>
              <option value="Florist">Florist</option>
          </select>
          
        </div>
        <div className='new-shopping__control'>
          <label>Opening Date</label>
          <input
            type='date'
            name="opn_date"
            value={formValue.opn_date}
            onChange={onHandleChange}
          />
        </div>
        <div className='new-shopping__control'>
          <label>Closing Date</label>
          <input
            type='date'
            name="cls_date"
            value={formValue.cls_date}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className='new-shopping__actions'>
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button disabled={!formValue.title || !formValue.area || !formValue.category || !formValue.opn_date || !formValue.cls_date } type='submit'>Add Shopping Item</button>
      </div>
    </form>
  );
};

export default ShoppingForm;