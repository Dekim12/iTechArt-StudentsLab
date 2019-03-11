import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerById } from '../../api';
import { BeerPage } from '../../components';
import { changeFavoriteList } from '../actions/favoriteBeerActions';
import { selectionNecessaryData } from '../../appLogic';

const mapStateToProps = state => {
  return {
    beersData: state.apiRequestState.allBeers,
    favoriteBeer: state.favoriteBeerState.favoriteBeer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerById,
      changeFavoriteList,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { match } = ownProps;
  const { beersData, favoriteBeer } = stateProps;

  const changeFavorite = () => {
    dispatchProps.changeFavoriteList(+match.params.id, favoriteBeer);
  };

  if (!beersData || match.params.id < 1) {
    return { isEmpty: true, changeFavorite };
  }

  const beer = selectionNecessaryData(beersData, match.params.id);

  if (!beer) {
    dispatchProps.getBeerById(match.params.id);
    return { isEmpty: false, isLoading: true, changeFavorite };
  }

  const isFavorite = favoriteBeer.indexOf(+match.params.id) > -1;

  return {
    isEmpty: false,
    isLoading: false,
    beer,
    isFavorite,
    changeFavorite,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BeerPage);
