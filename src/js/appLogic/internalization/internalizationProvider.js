import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';

export const getTranslatedText = contentKey => {
  const { t } = useTranslation();
  return t(contentKey);
};

export const Translation = BaseComponent => {
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
