import React, { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

//import ReactDOM from 'react-dom';

//const categories = ['suspenso', 'aventura', 'comedia']

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch"
  ]);

  // const handerAdd = () => {
  //    // setCategories( [...categories, newCategory] )
  //    setCategories(cats => [...cats, newCategory])

  //}

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory = {setCategories} />
      <hr></hr>
     <>
     
      {
          categories.map( category => <GifGrid 
            key = { category }
            category = { category }/> )
      }

     
     </>
     


    </>
  );
};

export default GifExpertApp;
