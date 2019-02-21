import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuSelector } from '../selectors';
import { toggleMenu } from '../actions';
import { PopUpMenu } from '../../components/index';

const mapStateToProps = state => ({
  isOpen: menuSelector(state).isOpen,
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
