import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerByName, getNextBeerPage } from '../../api';
import { toggleNextPageLoading } from '../actions';
import { SearchPage } from '../../components/index';

const mapStateToProps = state => {
  return {
    data: state.apiRequestState.data,
    resultSearchBeer: state.apiRequestState.resultSearchBeer,
    nextPageLoading: state.apiRequestState.nextPageLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerByName,
      getNextBeerPage,
      toggleNextPageLoading,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
