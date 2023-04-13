import config from "@config/config.json";
import { IconName } from "react-icons/ri";
import Link from "next/link";
import Header from "@partials/Headeruser"
import Footer from "@partials/Footeruser"
const {investLabel, link } = config.nav_button;
import React, { useState,useEffect } from "react";
import Posts from "../../layouts/partials/Posts"

const invest=()=>{
return(
    <>
    <Header/>
<main>
    <section className="section  bg-gray-100">
   <div className="py-[20px] px-[50px]">
    <h3 className="text-primary">Buy Your First Real Estate in Seconds</h3>
    <p className="leading-6">The world’s first NFT marketplace backed by real-world properties</p>
  </div>
  <div className="d-flex ml-auto  min-w-[200px] items-center justify-start md:ml-[10px] md:flex md:order-2 px-[49px] sm:px-[40px]">
            <Link className="btn btn-primary z-0 py-[10px]" href={link} rel="">
              {investLabel}
            </Link>
          </div>        
          </section>
          <div>
          <Posts/>
          </div>


</main>
    <Footer/>

    </>
)

}
export default invest