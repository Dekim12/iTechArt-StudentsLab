import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncApiRequest } from '../../api';
import { App } from '../../components';

const mapStateToProps = state => ({
  isLoading: state.apiRequestState.isLoading,
  data: state.apiRequestState.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      asyncApiRequest,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
