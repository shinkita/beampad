import React from "react";
import config from "@config/config.json";
const MobileNav=({button, filter})=>{
    return(
        <>
<div className="ltabs">
    <h1>Mobile</h1>
{button && button.map((cat, i) => (
        <button onClick={() => filter(cat)} className="btntabs active border-none text-black bg-zinc-50 p-2 px-2 mr-5 btn" key={i}>
          {cat}
        </button>
      ))}
    </div>
        </>
    )
}
export default MobileNav