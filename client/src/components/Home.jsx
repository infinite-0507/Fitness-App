import React from 'react'
import '../styles/Home.scss';
import video1 from '../Assets/design/video1.mp4';
import image1 from '../Assets/design/back1.jpg';
import image2 from '../Assets/design/back2.jpg';
import image3 from '../Assets/design/back3.jpg';

const Home=({playStatus,heroCount})=>  {
  if(playStatus){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount===0)
    {
      return <img src={image1} className='background fade-in' alt=""/>
    }
    else if(heroCount===1)
      {
        return <img src={image2} className='background fade-in' alt=""/>
      }
      else if(heroCount===2)
        {
          return <img src={image3} className='background fade-in' alt=""/>
        }  
}

export default Home