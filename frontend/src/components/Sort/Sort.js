import React from 'react';
import './Sort.css';

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <section className='sort-section'>
      <div className='btn-container'>
        <button
          onClick={setGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='sort-input'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
