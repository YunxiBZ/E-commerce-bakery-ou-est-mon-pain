import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import Product from './Product';
import './styles.scss';

const Products = ({
  fetchData,
  products,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
  logged,
}) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          onClickAddQuantityBtn={onClickAddQuantityBtn}
          onClickReduceQuantityBtn={onClickReduceQuantityBtn}
          onChangeQuantityInput={onChangeQuantityInput}
          onClickAddToCartBtn={onClickAddToCartBtn}
          logged={logged}
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
  onClickAddToCartBtn: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

Products.defaultProps = {
  products: null,
};

export default Products;
