import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBeers } from '../../api';
import { App } from '../../components';

const mapStateToProps = state => ({
  isLoading: state.apiRequestState.isLoading,
  data: state.apiRequestState.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllBeers,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
