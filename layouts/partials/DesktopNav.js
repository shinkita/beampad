import React, { useContext } from "react";
import config from "@config/config.json";
import MyContext from "./MyContext";
const DesktopNav=()=>{
    return(
        <>
<div className="ltabs">
    <h1>Desktop</h1>
    const {button} = useContext(MyContext);
    const {filter} = useContext(MyContext);
{button && button.map((cat, i) => (
        <button onClick={() => filter(cat)} className="btntabs active border-none text-black bg-zinc-50 p-2 px-2 mr-5 btn" key={i}>
          {cat}
        </button>
      ))}
    </div> 
        </>
    )
}
export default DesktopNav