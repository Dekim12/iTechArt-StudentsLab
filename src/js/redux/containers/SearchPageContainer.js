import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBeerData } from '../actions';
import { SearchPage } from '../../components/index';

const mapStateToProps = state => ({
  data: state.apiRequestState.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setBeerData,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
