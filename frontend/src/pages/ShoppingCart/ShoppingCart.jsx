import React, { useEffect } from 'react';
import './ShoppingCart.css';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { useHistory, useLocation, useParams } from 'react-router';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const checkOutHandler = () => {
    history.push('/signin?redirect=shipping');
  };

  if (cartItems.length < 1) return <EmptyCart />;
  return (
    <>
      <div className='small-container cart-page'>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>

          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <div className='cart-info'>
                    <img src={item.image} alt='' />
                    <div className='checkout-items'>
                      <Link to={'/product/' + item.product}>
                        <p>{item.title}</p>
                      </Link>

                      <p>Price: Ksh {item.price}</p>
                      <Rating />
                      <button
                        className='btn'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <select
                    className='quantity'
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td>Ksh {item.price}</td>
              </tr>
            );
          })}
        </table>

        <div className='total-price'>
          <table>
            <tbody>
              <tr>
                <td>Total Items</td>
                <td>{cartItems.reduce((a, c) => a + c.quantity, 0)}</td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td>
                  Ksh {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </td>
              </tr>
            </tbody>
          </table>

          <button className='checkout-btn btn' onClick={checkOutHandler}>
            Checkout &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
