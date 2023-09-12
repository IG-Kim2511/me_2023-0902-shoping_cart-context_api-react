import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Rating = ({ rating }) => {
  const maxStars = 5;
  const starArray = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      starArray.push(<StarIcon key={i} />);
    } else if (i - 0.5 <= rating) {
      starArray.push(<StarHalfIcon key={i} />);
    } else {
      starArray.push(<StarOutlineIcon key={i} />);
    }
  }

  return (
    <div>
      {starArray}
    </div>
  );
};

export default Rating;
