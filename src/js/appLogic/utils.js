import { useTranslation } from 'react-i18next';

export const defineClassName = (indicator, className) => {
  if (indicator) {
    return className;
  }
  return '';
};

export const getTranslatedText = contentKey => {
  const { t } = useTranslation();
  return t(contentKey);
};
