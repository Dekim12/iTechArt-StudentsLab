import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerById } from '../../api';
import { BeerPage } from '../../components';
import { selectionNecessaryData, beerIsFavorite } from '../../appLogic';

const mapStateToProps = state => {
  return {
    beersData: state.apiRequestState.allBeers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerById,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { match } = ownProps;
  const { beersData } = stateProps;

  if (!beersData || match.params.id < 1) {
    return { isEmpty: true };
  }

  const beer = selectionNecessaryData(beersData, match.params.id);

  if (!beer) {
    dispatchProps.getBeerById(match.params.id);
    return { isEmpty: false, isLoading: true };
  }

  const isChecked = beerIsFavorite(beer.id);

  return { isEmpty: false, isLoading: false, beer, isChecked };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BeerPage);
