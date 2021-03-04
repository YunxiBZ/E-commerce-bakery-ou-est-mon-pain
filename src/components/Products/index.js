import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Products = ({
  fetchData,
  products,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
}) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          onClickAddQuantityBtn={onClickAddQuantityBtn}
          onClickReduceQuantityBtn={onClickReduceQuantityBtn}
          onChangeQuantityInput={onChangeQuantityInput}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
  fetchData: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
};

Products.defaultProps = {
  products: null,
};

export default Products;
