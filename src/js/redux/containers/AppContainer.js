import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncApiRequest } from '../../api';
import { App } from '../../components';

const mapStateToProps = state => ({
  isLoading: state.apiReqState.isLoading,
  data: state.apiReqState.data,
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
