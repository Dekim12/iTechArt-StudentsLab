import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { errorToggle } from '../actions';
import { Error } from '../../components';

const mapStateToProps = state => ({
  isError: state.apiRequestState.isError,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      errorToggle,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);
