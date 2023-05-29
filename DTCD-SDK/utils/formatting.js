/**
 * Function for formatting of number.
 * @param {Number} number Number to format.
 * @param {String} [targetLocale] Locale to format. Example: 'no', 'auto', 'ru-RU', etc. Default: locale from localStorage (key - 'settings.numberFormat').
 * @param {Object} options The same options as in Number.toLocalString() method.
 * @returns {String} Formatted number or 'number' parameter.
 */
function formatNumberToLocale(number, targetLocale, options = {}) {
  if (typeof number != 'number') return number;

  if (!targetLocale) 
    targetLocale = window.localStorage.getItem('settings.numberFormat') || 'no';
  
  options.maximumFractionDigits = options.maximumFractionDigits || parseInt(window.localStorage.getItem('settings.signsAfterComma') || 20);

  if (targetLocale == 'no') 
    return number.toLocaleString(undefined, {...options, useGrouping: false});

  if (targetLocale == 'auto') 
    return number.toLocaleString(undefined, options);

  return number.toLocaleString(targetLocale, options);
};

export {
  formatNumberToLocale,
};
