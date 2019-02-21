import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../actions';
import { HamburgerBtn } from '../../components';

const mapStateToProps = state => ({
  isOpen: state.menuState.isOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMenu,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerBtn);
