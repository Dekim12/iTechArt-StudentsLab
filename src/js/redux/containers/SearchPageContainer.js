import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerByName } from '../../api';
import { SearchPage } from '../../components/index';

const mapStateToProps = state => {
  return {
    data: state.apiRequestState.data,
    resultSearchBeer: state.apiRequestState.resultSearchBeer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerByName,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
