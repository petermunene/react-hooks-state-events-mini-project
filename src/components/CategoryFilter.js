import React from "react";

function CategoryFilter({categories,handleClick }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index)=>
        <button onClick={()=>handleClick(category)} className={onclick?"selected":""} key={index}>{category}</button>
      )}
    </div>
  );
}

export default CategoryFilter;
