import { connect } from 'react-redux';
import { BeerPage } from '../../components';

const mapStateToProps = state => {
  return {
    beersData: state.apiRequestState.data,
    isLoading: state.apiRequestState.isLoading,
  };
};

export default connect(mapStateToProps)(BeerPage);
