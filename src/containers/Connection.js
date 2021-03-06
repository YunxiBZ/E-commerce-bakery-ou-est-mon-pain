import { connect } from 'react-redux';
import Connection from 'src/components/Connection';
import { userLogout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  userName: state.user.infos.firstName,
  isLogged: state.user.infos.logged,
  role: state.user.infos.role,
  cart: state.cartReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogoutBtn: () => {
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
