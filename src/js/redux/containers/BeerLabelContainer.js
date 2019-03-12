import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFavoriteList } from '../actions/favoriteBeerActions';
import { BeerLabel } from '../../components';

const mapStateToProps = state => {
  return {
    favoriteBeer: state.favoriteBeerState.favoriteBeer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeFavoriteList,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isFavorite = stateProps.favoriteBeer.indexOf(ownProps.id) > -1;
  const changeFavorite = () => {
    dispatchProps.changeFavoriteList(ownProps.id, stateProps.favoriteBeer);
  };

  return { changeFavorite, ownProps, isFavorite };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BeerLabel);
