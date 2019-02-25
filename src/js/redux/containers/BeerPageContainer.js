import { connect } from 'react-redux';
import { BeerPage } from '../../components';

const mapStateToProps = state => ({
  beerPageData: state.pagesState.beerPageData,
});

export default connect(mapStateToProps)(BeerPage);
