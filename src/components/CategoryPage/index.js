import React, { useEffect } from 'react';
import ScrollToTop from 'src/hooks/ScrollToTop';
import Product from 'src/components/Products/Product';

import PropTypes from 'prop-types';

const CategoryPage = ({
  fetchData,
  productsByCategory,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
  logged,
}) => {
  useEffect(() => {
    fetchData();
  }, []);
  ScrollToTop();

  return (
    <div className="products">
      {productsByCategory.map((product) => (
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

CategoryPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  productsByCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickAddToCartBtn: PropTypes.func.isRequired,
  logged: PropTypes.bool,
};

CategoryPage.defaultProps = {
  productsByCategory: null,
  logged: null,
};

export default CategoryPage;
