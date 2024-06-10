import React, { useState,useEffect } from 'react';
import Home from "./Home.jsx";

import Hero from "./Hero.jsx";
const Merge=()=> {
    let heroData=[
        {text1:"Dive into",text2:"what you love"},
        {text1:"Indulge",text2:"your passions"},
        {text1:"Give in to",text2:"what you love"},
    ]
    const [heroCount,setHeroCount]=useState(1);
    const[playStatus,setPlayStatus]=useState(false);
    useEffect(()=>{
      setInterval(() =>{
        setHeroCount((count)=>{return count===2?0:count+1})
      },3000);
    },[])
  return (
    <div>
         <Home playStatus={playStatus} heroCount={heroCount}/>
         
         <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
         />
    </div>
  )
}

export default Merge