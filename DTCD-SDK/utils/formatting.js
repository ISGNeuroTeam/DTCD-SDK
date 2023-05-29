/**
 * Function for formatting of number.
 * @param {Number} number Number to format.
 * @param {String} [targetLocale] Locale to format. Example: 'no', 'auto', 'ru-RU', etc. Default: locale from localStorage (key - 'settings.numberFormat').
 * @returns {String} Formatted number or 'number' parameter.
 */
function formatNumberToLocale(number, targetLocale, maximumFractionDigits) {
  if (typeof number != 'number') return number;

  if (!targetLocale) {
    targetLocale = window.localStorage.getItem('settings.numberFormat') || 'no';
  }
  
  if (typeof maximumFractionDigits === 'number' && maximumFractionDigits > -1 && maximumFractionDigits < 11) {
    number = truncNumber(number, maximumFractionDigits)
  } else {
    maximumFractionDigits = parseInt(window.localStorage.getItem('settings.signsAfterComma')) ?? -1;
    number = maximumFractionDigits !== -1 ? truncNumber(number, maximumFractionDigits) : number;
  }

  if (targetLocale == 'no') return number;

  if (targetLocale == 'auto') {
    return number.toLocaleString(undefined, options);
  } else {
    return number.toLocaleString(targetLocale, options);
  }
};


function truncNumber(number, maximumFractionDigits) {
  return Math.trunc(number*Math.pow(10, maximumFractionDigits))/Math.pow(10, maximumFractionDigits)
}

export {
  formatNumberToLocale,
};
