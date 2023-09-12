import React from 'react'

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


// 🍀props
const Rating =({ value, text, color }) => {


  // 🍀rating code with material ui icon
  const starArray = [];
  const maxStars = 5;

  for (let i = 1; i <= maxStars; i++) {
    if (i <= value) {
      starArray.push(<StarIcon key={i} />);
    } else if (i - 0.5 <= value) {
      starArray.push(<StarHalfIcon key={i} />);
    } else {
      starArray.push(<StarOutlineIcon key={i} />);
    }
  }

  return (
    <div className='rating'>

    {/* 👉rating code with material ui icon */}
      {starArray}

      {/* 🦄conditional rendering */}
      <span>{text && text}</span>

      <i class="fa-solid fa-star"></i>
    </div>
  )
}

// 🦄js30  defalutProps , color
// 여기에서 defalutProps , color지정함
Rating.defaultProps = {
  color: "#FFA41C",
};




export default Rating