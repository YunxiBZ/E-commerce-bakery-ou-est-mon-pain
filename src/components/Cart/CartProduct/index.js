import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const CartProduct = ({
  id,
  title,
  price,
  totalPrice,
  image,
  quantity,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickDeleteBtn,
}) => (
  <div className="product">
    <h3 className="product__name">{title}</h3>
    <Link to={`/product/${id}`}>
      <img className="product__img" src={image} alt={`image_${title}`} />
    </Link>
    <div className="product__bottom">
      <div className="product__quantity">
        <FontAwesomeIcon
          icon="arrow-alt-circle-down"
          className="product__icon product__reduce-icon"
          onClick={() => onClickReduceQuantityBtn(title, price)}
        />
        <input
          className="product__quantity-input"
          placeholder="Quantité"
          type="text"
          value={quantity}
          name="quantity"
          onChange={
            (evt) => {
              const quantityInput = evt.target.value;
              onChangeQuantityInput(title, quantityInput, price);
            }
          }
        />
        <FontAwesomeIcon
          icon="arrow-alt-circle-up"
          className="product__icon product__add-icon"
          onClick={() => onClickAddQuantityBtn(title, price)}
        />
      </div>

      <p className="product__price">Prix: {totalPrice}€ </p>
      <FontAwesomeIcon
        icon="trash-alt"
        className="product__icon product__delete"
        onClick={() => onClickDeleteBtn(title, totalPrice)}
      />
    </div>

  </div>
);

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
};

export default CartProduct;
