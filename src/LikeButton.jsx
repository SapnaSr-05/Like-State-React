import {useState} from 'react';


export default function LikeButton() {
let [isLiked,setIsLiked]=useState(false);//hook always call function compoent
let [clicks ,setIsClicks]=useState(0);
let toggleLike=()=>{
  setIsLiked(!isLiked);
  setIsClicks(clicks+1);

};
let likeStyle ={color:"red"};

  return (
    <div>
      <h1>States in React</h1>
      <p> Clicks={clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ?(
          <i className='fa-solid fa-heart' style={likeStyle}></i>
        ):(
          <i className='fa-regular fa-heart'></i>
        ) }
        
      </p>
      
    </div>
      );
}

