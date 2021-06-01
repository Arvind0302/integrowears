import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Rating = (props) => {
  const { rating, reviews } = props;
  return (
    <div className='rating'>
      {rating >= 1 ? (
        <i>{<FaStar />}</i>
      ) : rating >= 0.5 ? (
        <i>{<FaStarHalf />}</i>
      ) : (
        <i>{<FaStarHalf />}</i>
      )}
      {rating >= 2 ? (
        <i>{<FaStar />}</i>
      ) : rating >= 1.5 ? (
        <i>{<FaStar />}</i>
      ) : (
        <i>{<FaStarHalf />}</i>
      )}
      {rating >= 3 ? (
        <i>{<FaStar />}</i>
      ) : rating >= 2.5 ? (
        <i>{<FaStar />}</i>
      ) : (
        <i>{<FaStarHalf />}</i>
      )}
      {rating >= 4 ? (
        <i>{<FaStar />}</i>
      ) : rating >= 3.5 ? (
        <i>{<FaStar />}</i>
      ) : (
        <i>{<FaStarHalf />}</i>
      )}
      {rating >= 5 ? (
        <i>{<FaStar />}</i>
      ) : rating >= 4.5 ? (
        <i>{<FaStar />}</i>
      ) : (
        <i>{<FaStarHalf />}</i>
      )}
      <span>({reviews})</span>
    </div>
  );
};

export default Rating;
