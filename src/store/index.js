import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import categories from 'src/middlewares/categories';
import products from 'src/middlewares/products';
import signup from 'src/middlewares/signup';
import login from 'src/middlewares/login';
// import middlewares

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(categories, products, signup, login),

// import middlewares
));

export default store;
