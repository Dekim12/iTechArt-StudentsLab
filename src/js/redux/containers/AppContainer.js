import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiSelector } from '../selectors';
import { asyncApiRequest } from '../../api';
import { App } from '../../components';

const mapStateToProps = state => ({
  isLoading: apiSelector(state).isLoading,
  data: apiSelector(state).data,
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
