import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeerById } from '../../api';
import { BeerPage } from '../../components';

const mapStateToProps = state => {
  return {
    beersData: state.apiRequestState.data,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeerById,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerPage);
