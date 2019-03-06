import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNextBeerPage } from '../../api';
import { toggleNextPageLoading } from '../actions';
import { BeerList } from '../../components/index';

const mapStateToProps = state => {
  return {
    data: state.apiRequestState.data,
    nextPageLoading: state.apiRequestState.nextPageLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNextBeerPage,
      toggleNextPageLoading,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);
