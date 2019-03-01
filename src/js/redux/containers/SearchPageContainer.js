import { connect } from 'react-redux';
import { SearchPage } from '../../components/index';

const mapStateToProps = state => ({
  data: state.apiRequestState.data,
});
export default connect(mapStateToProps)(SearchPage);
