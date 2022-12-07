import React, {useState} from 'react';

import NewShopping from './components/NewShopping/NewShopping';
import Shopping from './components/Shopping/Shopping';

const shop_items = [
  {
    id: 'sd1',
    title: 'Bhindi',
    area: "Mumbai Suburban",
    category: "Grocery",
    opn_date: "2021-2-2",
    cls_date: "2021-2-19"
  },
  { id: 'sd2',
    title: 'Rounder',
    area: "Thane",
    category: "Stationery", 
    opn_date: "2021-2-12",
    cls_date: "2021-2-14"
  },
  {
    id: 'sd3',
    title: 'Chocolate Cake',
    area: "Pune",
    category: "Baker",
    opn_date: "2022-12-09",
    cls_date: "2022-12-09"
  },
  {
    id: 'sd4',
    title: 'Paracetamol',
    area: "Nagpur",
    category: "Chemist",
    opn_date: "2022-12-09",
    cls_date: "2022-12-10"
  },
];

const App = () => {
  const [buying, setBuying] = useState(shop_items);

  const addShopHandler = buy => {
    console.log("latrst",buy);
    console.log("old",buying)
    setBuying([...buying,...buy])
  
  };

  const deleteHandler =(idd) => {
    const removeShop = buying.filter((shop) => shop.id !== idd);
    setBuying(removeShop);
  }


  return (
    <div>
      <NewShopping onAddShop={addShopHandler} />
      <Shopping items={buying} deleteShop={deleteHandler}/>
    </div>
  );
}

export default App;