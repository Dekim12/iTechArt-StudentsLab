import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { BeerListContainer } from '../../redux/containers';
import { Search, SearchBeerList } from '../index';
import './searchPage.scss';

const SearchPage = ({ getBeerByName, resultSearchBeer, resetSearchData }) => {
  const { t } = useTranslation();

  return (
    <section className='page search-page'>
      <h1>{t('main_headline')}</h1>
      <Search
        onSearchPatternChange={getBeerByName}
        resetSearchData={resetSearchData}
      />
      {resultSearchBeer ? (
        <SearchBeerList renderData={resultSearchBeer} />
      ) : (
        <BeerListContainer />
      )}
    </section>
  );
};

SearchPage.propTypes = {
  getBeerByName: PropTypes.func.isRequired,
  resetSearchData: PropTypes.func.isRequired,
  resultSearchBeer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SearchPage.defaultProps = {
  resultSearchBeer: null,
};

export default SearchPage;
