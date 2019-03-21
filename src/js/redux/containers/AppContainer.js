import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBeers } from '../../api';
import { errorToggle } from '../actions';
import { App } from '../../components';

const mapStateToProps = state => ({
  isLoading: state.apiRequestState.isLoading,
  data: state.apiRequestState.data,
  isError: state.apiRequestState.isError,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllBeers,
      errorToggle,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
