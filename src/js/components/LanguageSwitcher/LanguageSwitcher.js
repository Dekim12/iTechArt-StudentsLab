import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import uuid from 'uuid/v1';
import { Button } from '../index';
import { defineClassName } from '../../appLogic';
import { ACTIVE_LANGUAGE, LANGUAGES } from '../../constants';
import './languageSwitcher.scss';

class LanguageSwitcher extends React.Component {
  state = { activeLanguage: 'en' };

  switchLanguage = languageKey => {
    this.props.i18n.changeLanguage(languageKey);
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
          {this.props.t(elem.language)}
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
  i18n: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(LanguageSwitcher);
