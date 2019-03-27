import React from 'react';
import { withTranslation } from 'react-i18next';

const Translation = BaseComponent => {
  const TranslationHigherOrderComponent = ({ t, i18n, ...property }) => {
    const newTranslateFunction = key => i18n.changeLanguage(key);

    return (
      <BaseComponent
        getTranslatedText={t}
        changeLanguage={newTranslateFunction}
        {...property}
      />
    );
  };

  return withTranslation()(TranslationHigherOrderComponent);
};

export default Translation;
