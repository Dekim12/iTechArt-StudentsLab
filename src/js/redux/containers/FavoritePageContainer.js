import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavoriteBeerById } from '../../api';
import { FavoritesPage } from '../../components';
import { findMissingItems, getDataFromLocalStorage } from '../../appLogic';

const mapStateToProps = state => {
  return {
    allBeers: state.apiRequestState.allBeers,
    isLoading: state.apiRequestState.isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFavoriteBeerById,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps) => {
  const { allBeers, isLoading } = stateProps;
  const favoriteBeers = getDataFromLocalStorage();
  const missingBeers = findMissingItems(allBeers, favoriteBeers);

  if (allBeers.length && !isLoading) {
    if (missingBeers.length) {
      dispatchProps.getFavoriteBeerById(missingBeers);
    }
  }

  return { ...stateProps, favoriteBeers };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FavoritesPage);
