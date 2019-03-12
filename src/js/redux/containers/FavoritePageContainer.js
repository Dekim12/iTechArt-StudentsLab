import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavoriteBeerById } from '../../api';
import { changeFavoriteList } from '../actions';
import { FavoritesPage } from '../../components';
import { findMissingItems } from '../../appLogic';

const mapStateToProps = state => {
  return {
    allBeers: state.apiRequestState.allBeers,
    isLoading: state.apiRequestState.isLoading,
    favoriteBeer: state.favoriteBeerState.favoriteBeer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFavoriteBeerById,
      changeFavoriteList,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps) => {
  const { allBeers, isLoading, favoriteBeer } = stateProps;
  const missingBeers = findMissingItems(allBeers, favoriteBeer);

  if (!favoriteBeer.length || !allBeers.length || isLoading) {
    return {
      ...stateProps,
      favoriteBeer,
      isEmpty: true,
      changeFavorite: dispatchProps.changeFavoriteList,
    };
  }

  if (missingBeers.length) {
    dispatchProps.getFavoriteBeerById(missingBeers);
    return {
      allBeers,
      favoriteBeer,
      isEmpty: true,
      changeFavorite: dispatchProps.changeFavoriteList,
    };
  }

  return {
    allBeers,
    favoriteBeer,
    isEmpty: false,
    changeFavorite: dispatchProps.changeFavoriteList,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FavoritesPage);
