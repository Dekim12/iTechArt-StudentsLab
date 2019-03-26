import React from 'react';
import { withTranslation } from 'react-i18next';
import uuid from 'uuid/v1';
import { Button } from '../index';
import { defineClassName } from '../../appLogic';
import { ACTIVE_LANGUAGE, LANGUAGES } from '../../constants';
import './languageSwitcher.scss';

class LanguageSwitcher extends React.Component {
  state = { isEnglishLanguage: true };

  switchLanguage = language => {
    this.props.i18n.changeLanguage(language);
    const isEnglish = language === 'en';
    this.setState({ isEnglishLanguage: isEnglish });
  };

  generateLanguages = languagesList =>
    languagesList.map(elem => {
      const isActiveLanguages =
        elem.language === 'en'
          ? this.state.isEnglishLanguage
          : !this.state.isEnglishLanguage;
      const languagesClassName = elem.className.concat(
        ' ',
        defineClassName(isActiveLanguages, ACTIVE_LANGUAGE)
      );

      const currentSwitch = () => {
        this.switchLanguage(elem.language);
      };

      return (
        <Button
          className={languagesClassName}
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

export default withTranslation()(LanguageSwitcher);
