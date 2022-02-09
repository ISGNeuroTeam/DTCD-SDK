import { BaseAdapter } from './BaseAdapter';

export class StyleSystemAdapter extends BaseAdapter {
  /**
   * Initialize StyleSystemAdapter instance.
   * @constructor
   * @param {String} version version of system in adapter
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('StyleSystem', version);
  }

  /**
   * This method returns guid of system used in adapter
   * @returns {String} guid of the instance
   */
  getGUID() {
    return this.getGUID(this.instance);
  }

  /**
   * Get object design system.
   * @method
   * @returns {object} current object design system.
   */
  getCurrentTheme() {
    return this.instance.getCurrentTheme();
  }

  /**
   * Setting new current theme
   * @method
   * @param {String} name name of new theme
   * @returns {Boolean}
   */
  setTheme(name) {
    this.instance.setTheme(name);
    return true;
  }

  /**
   * Getting list of all available themes
   * @async
   * @method
   * @returns {Object[]}
   */
  async getThemes() {
    return await this.instance.getThemes();
  }

  /**
   * Set CSS variable for DOM element
   * @method
   * @param {string} element DOM element.
   * @param {object} obj Design object.
   * @param {string} startPrefix Prefix for CSS variable.
   */
  setVariablesToElement(element, obj, startPrefix = '-') {
    this.instance.setVariablesToElement(element, obj, startPrefix);
  }
}
