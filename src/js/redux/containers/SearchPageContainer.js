import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerByName } from '../../api';
import { resetFilterData, resetSearchData } from '../actions';
import { SearchPage } from '../../components/index';

const mapStateToProps = state => {
  return {
    resultSearchBeer: state.apiRequestState.resultSearchBeer,
    filterResult: state.filterState.filterResult,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerByName,
      resetFilterData,
      resetSearchData,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { resultSearchBeer, filterResult } = stateProps;

  if (!filterResult) {
    return { resultSearch: resultSearchBeer, ...ownProps, ...dispatchProps };
  }

  return { resultSearch: filterResult, ...ownProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SearchPage);
