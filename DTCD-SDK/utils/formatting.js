/**
 * Function for formatting of number.
 * @param {Number} number Number to format.
 * @param {String} [targetLocale] Locale to format. Example: 'no', 'auto', 'ru-RU', etc. Default: locale from localStorage (key - 'settings.numberFormat').
 * @returns {String} Formatted number or 'number' parameter.
 */
function formatNumberToLocale(number, targetLocale) {
  if (typeof number != 'number') return number;

  if (!targetLocale) {
    targetLocale = window.localStorage.getItem('settings.numberFormat') || 'no';
  }

  if (targetLocale == 'no') return number;

  if (targetLocale == 'auto') {
    return number.toLocaleString();
  } else {
    return number.toLocaleString(targetLocale);
  }
};

export {
  formatNumberToLocale,
};
