import React from 'react';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Footer from '../../components/Footer/Footer';

const Payment = () => {
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
        </table>
      </div>

      <div className='small-container cart-page'>
        <form>
          <div className='total-price'>
            <button className='btn'>
              <span>
                <p>Processing</p>
              </span>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Payment;
