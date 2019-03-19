import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerByName } from '../../api';
import { resetSearchData } from '../actions';
import { SearchPage } from '../../components/index';

const mapStateToProps = state => {
  return {
    resultSearchBeer: state.apiRequestState.resultSearchBeer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerByName,
      resetSearchData,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
