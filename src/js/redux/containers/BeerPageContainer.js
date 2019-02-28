import { connect } from 'react-redux';
import { BeerPage } from '../../components';

const mapStateToProps = state => {
  return {
    beersData: state.apiRequestState.data,
  };
};

export default connect(mapStateToProps)(BeerPage);
