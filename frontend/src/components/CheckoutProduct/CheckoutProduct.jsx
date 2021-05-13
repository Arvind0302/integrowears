import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({
  id,
  image,
  title,
  price,
  rating,
  value,
  hideButton,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', id: id });
  };
  return (
    <>
      <tr>
        <td>
          <div className='cart-info'>
            <img src={image} alt='' />
            <div className='checkout-items'>
              <p>{title}</p>
              <p>Price: Ksh {price}</p>
              <div className='rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <i>{<FaStar />}</i>
                  ))}
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              {!hideButton && (
                <button className='btn' onClick={removeFromBasket}>
                  Remove
                </button>
              )}
            </div>
          </div>
        </td>
        <td>
          <input type='number' value={value} />
        </td>
        <td>Ksh {price}</td>
      </tr>
    </>
  );
};

export default CheckoutProduct;
