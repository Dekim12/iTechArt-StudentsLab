import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../actions';
import { PopUpMenu } from '../../components';

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
)(PopUpMenu);
