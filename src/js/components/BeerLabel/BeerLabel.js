import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../index';
import { addToLocalStorage, beerIsFavorite } from '../../appLogic';
import { FAVORITE_CHECKED } from '../../constants';
import './beerLabel.scss';

class BeerLabel extends React.Component {
  state = {
    isChecked: beerIsFavorite(this.props.id),
  };

  addToFavorite = () => {
    const { id } = this.props;
    const isFavorite = addToLocalStorage(id);

    if (isFavorite) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  };

  render() {
    const { url, name, tagline, id } = this.props;
    const { isChecked } = this.state;

    return (
      <article className='beer-label'>
        <div className='label-info-wrapper'>
          <img className='beer-logo' src={url} alt={`beer ${name}`} />
          <h3>{name}</h3>
          <p>{tagline}</p>
        </div>
        <div className='button-wrapper'>
          <Link to={`/beer/${id}`} from='/search' className='open-page-link'>
            open
          </Link>
          <Button
            className={`favorite-btn ${isChecked ? FAVORITE_CHECKED : ''}`}
            makeChanges={this.addToFavorite}
          >
            <i className='fa fa-star' aria-hidden='true' />
          </Button>
        </div>
      </article>
    );
  }
}

BeerLabel.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
  id: PropTypes.number,
};

BeerLabel.defaultProps = {
  url: '',
  name: '',
  tagline: '',
  id: 1,
};

export default BeerLabel;
