import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProduct } from '../../actions/productActions';

const ProductEditPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //cleanup
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        title,
        price,
        image,
        stock,
        brand,
        category,
        description,
      })
    );
  };

  return (
    <section className='signin-page'>
      <div className='account-page'>
        <div className='form-container'>
          <div className='form-btn'>
            <button className='account-btns'>Create Product</button>
          </div>
          <form onSubmit={submitHandler} className='lo'>
            <input
              type='text'
              placeholder='Title'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type='text'
              placeholder='Price'
              name='price'
              id='price'
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type='text'
              placeholder='Image'
              name='image'
              id='image'
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type='text'
              placeholder='In-Stock'
              name='stock'
              id='stock'
              onChange={(e) => setStock(e.target.value)}
            />

            <input
              type='text'
              placeholder='Brand'
              name='brand'
              id='brand'
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type='text'
              placeholder='Category'
              name='catgories'
              id='catgories'
              onChange={(e) => setCategory(e.target.value)}
            />

            <textarea
              type='text'
              placeholder='Description'
              name='description'
              id='description'
              onChange={(e) => setDescription(e.target.value)}
            />

            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>Error saving Product</div>}
            <button type='submit' className='btn '>
              Create
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductEditPage;
