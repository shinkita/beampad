import React from "react";
import config from "@config/config.json";
 
// const menuItems = [...new Set(config.menuItems.map((Val) => Val.CategoryTitle))];


const Listingtabs = ({button,filter}) => {
   return (
    <>

<div className="d-flex justify-content-center">
      {button.map((cat, i) => {
        return (
          <button onClick={() => filter(cat)} className="btntabs active btn-dark text-default p-1 px-2 mx-5 btn fw-bold" key={i}>
            {cat}
          </button>
        );
      })}
    </div>


   {/* <div className="d-flex justify-content-center">
      {config.menuItems.map((Val,Id) => {
  return (
    <button
      className={setItem === 'All' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
            onClick={() => filterItem(item.CategoryTitle)}
      key={Id}
    >
      {Val.CategoryTitle}
    </button>
  );
})}
        <button
          className="btn-dark p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(config.listingdata)}
        >
          All
        </button>

         </div>  */}


            
    </>
  );
};
 
export default Listingtabs;