import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import Listing from "./Listing";
import Listingtabs from "./Listingtabs";
const Posts = ({ posts }) => {
  // const [item, setItem] = useState(config.listingdata);
  const { blog_folder, summary_length } = config.settings;
  const [openTab, setOpenTab] = React.useState(1);

  // const filterItem = (curcat) => {
  //   const newItem = config.menuItems.filter((newVal) => {
  //     return newVal.category === curcat;
  //   });
  //   setItem(newItem);
  // };
  // const filteredItems = config.menuItems.filter((item) => {
  //   if (activeTab === 'all') {
  //     console.log("All")
  //     return true;

  //   } else {
  //     return item.categoryTitle === activeTab;
     
  //   }
  // });

  const allCategories = ['All', ...new Set(config.listingdata.map(item => item.listing_type))];
const items =config.listingdata;
  console.log(allCategories);
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(items);
      return;
    }
  
    const filteredData = items.filter(item => item.listing_type === button);
    setMenuItem(filteredData);
  };
  
  useEffect(() => {
    console.log(menuItem);
  }, [menuItem])

  return (
    <div className="container pb-0">
     <div className="row pt-10">
     {/* <Listingtabs activeTab={activeTab} onTabClick={setActiveTab} /> */}

    <Listingtabs  button={buttons} filter={filter}/>
          {/* <Listingtabs
            filterItem={filterItem}
            setItem={setItem}
            menuItems={config.menuItems}
          /> */}
          </div>
          <div className="row ListingData pt-5">
      
        <Listing menuItem={menuItem} />  
          {/* {posts.slice(1).map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
            />
          )}
          <h2 className="h3 mb-2 mt-4">
            <Link
              href={`/${blog_folder}/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <p className="text-text">{post.frontmatter.desc}</p>
          <Link
            className="btn btn-primary mt-4"
            href={`/${blog_folder}/${post.slug}`}
            rel=""
          >
            Read More
          </Link>
        </div>
      ))}  */}
     
     </div>
   
    
   
    </div>
  );
};

export default Posts;
