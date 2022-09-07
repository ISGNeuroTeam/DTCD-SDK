export class BaseAdapter {
  /**
   * Getting instances of systems in the constructor
   * @constructor
   */
  constructor() {
    this.app = Application;
  }
  /**
   * This method returns an instance of the required system
   * @param {String} name Name of getting system
   * @param {String} version version of system in adapter
   * @returns {Object} Instance of system
   */
  getSystem(name, version) {
    return this.app.getSystem(name, version);
  }

  /**
   * This method returns guid of the plugin instance
   * @param {Object} pluginInstance
   * @returns {String} guid of the instance
   */
  getGUID(pluginInstance) {
    return this.app.getGUID(pluginInstance);
  }
}
