import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Translation from '../Translation/Translation';
import { Button } from '../index';
import { defineClassName } from '../../appLogic';
import { ACTIVE_LANGUAGE, LANGUAGES } from '../../constants';
import './languageSwitcher.scss';

class LanguageSwitcher extends React.Component {
  state = { activeLanguage: 'en' };

  switchLanguage = languageKey => {
    this.props.changeLanguage(languageKey);
    this.setState({ activeLanguage: languageKey });
  };

  generateLanguages = languageList =>
    languageList.map(elem => {
      const isActive = this.state.activeLanguage === elem.language;
      const languageClassName = elem.className.concat(
        ' ',
        defineClassName(isActive, ACTIVE_LANGUAGE)
      );

      const currentSwitch = () => {
        this.switchLanguage(elem.language);
      };

      return (
        <Button
          className={languageClassName}
          makeChanges={currentSwitch}
          key={uuid()}
        >
          {this.props.getTranslatedText(elem.language)}
        </Button>
      );
    });

  render() {
    return (
      <div className='language-switcher'>
        {this.generateLanguages(LANGUAGES)}
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  getTranslatedText: PropTypes.func.isRequired,
};

export default Translation(LanguageSwitcher);
