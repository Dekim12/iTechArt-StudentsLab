import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterSearchResult, changeRangePosition } from '../actions';
import { Range } from '../../components';
import { FILTER_PROPERTY_TYPE } from '../../constants';

const defineFilterPosition = (type, positions) => {
  switch (type) {
    case FILTER_PROPERTY_TYPE[0]:
      return positions[0];
    case FILTER_PROPERTY_TYPE[1]:
      return positions[1];
    case FILTER_PROPERTY_TYPE[2]:
      return positions[2];
    default:
      return null;
  }
};

const mapStateToProps = state => ({
  resultSearchBeer: state.apiRequestState.resultSearchBeer,
  abvPosition: state.filterState.abvPosition,
  ibuPosition: state.filterState.ibuPosition,
  ebcPosition: state.filterState.ebcPosition,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      filterSearchResult,
      changeRangePosition,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    resultSearchBeer,
    abvPosition,
    ibuPosition,
    ebcPosition,
  } = stateProps;

  const position = defineFilterPosition(ownProps.property.type, [
    abvPosition,
    ibuPosition,
    ebcPosition,
  ]);

  return { beer: resultSearchBeer, position, ...ownProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Range);
