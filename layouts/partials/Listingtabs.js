import React from "react";
import config from "@config/config.json";
 
const menuItems = [...new Set(config.menuItems.map((Val) => Val.CategoryTitle))];

const Listingtabs = ({setItem, menuItems }) => {
   return (
    <>
   <div className="d-flex justify-content-center">
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

         </div> 


              {/*New Code*/}

      {/* <div className="tabs d-flex justify-content-center">
      <button
        className={activeTab === 'All' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
        onClick={() => onTabClick('All')}
      >
        All
      </button>
      <button
        className={activeTab === 'Live IRO' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
        onClick={() => onTabClick('Live IRO')}
      >
        Live IRO
      </button> 
      <button
        className={activeTab === 'Completed IRO' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
        onClick={() => onTabClick('Completed IRO')}
      >
       Completed IRO
      </button>
      <button
        className={activeTab === 'Exited Position' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
        onClick={() => onTabClick('Exited Position')}
      >
        Exited Position
      </button>
      <button
        className={activeTab === 'Upcoming IRO' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
        onClick={() => onTabClick('Upcoming IRO')}
      >
      Upcoming IRO
      </button>
    </div> */}
    </>
  );
};
 
export default Listingtabs;