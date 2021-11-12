import { BaseAdapter } from './BaseAdapter';

export class WorkspaceSystemAdapter extends BaseAdapter {
  /**
   * Initialize WorkspaceSystemAdapter instance.
   * @constructor
   */
  constructor() {
    super();
    this.instance = this.getSystem('WorkspaceSystem');
  }

  /**
   * Setting new workspace state from config
   * @method
   * @returns {Boolean} true, if everything is ok
   */
  setPluginConfig(conf) {
    return this.instance.setPluginConfig(conf);
  }

  /**
   * Getting current workspace state
   * @method
   * @returns {*} workspace state
   */
  getPluginConfig(conf) {
    return this.instance.setPluginConfig(conf);
  }

  /**
   * Delete workspace configuration with the given id
   * @method
   * @param {number} id identifier of configuration
   * @returns {Boolean} true, if everything is ok
   */
  async deleteConfiguration(id) {
    return await this.instance.deleteConfiguration(id);
  }

  /**
   * Return list of available configurations
   * @method
   * @returns {Array} array of configurations
   */
  async getConfigurationList() {
    return await this.instance.getConfigurationList();
  }

  /**
   * Changes title of configuration with given id
   * @method
   * @param {number} id identifier of configuration
   * @param {string} newTitle new title to set
   */
  async changeConfigurationTitle(id, newTitle) {
    return await this.instance.changeConfigurationTitle(id, newTitle);
  }

  /**
   * Creates empty workspace configuration
   * @method
   * @param {string} configurationTitle title to set to new configuration
   */
  async createEmptyConfiguration(configurationTitle) {
    return await this.instance.createEmptyConfiguration(configurationTitle);
  }

  /**
   * Saves current workspace configuration
   * @method
   */
  async saveConfiguration() {
    return await this.instance.saveConfiguration();
  }

  /**
   * Sets new workspace configuration with given id
   * @method
   * @param {number} id identifier of configuration
   */
  setConfiguration(id) {
    return this.instance.setConfiguration(id);
  }

  /**
   * Sets defaults configuration of workspace
   * @method
   */
  setDefaultConfiguration() {
    return this.instance.setDefaultConfiguration();
  }

  /**
   * Compacts panels to top left corner of screen
   * @method
   */
  compactAllPanels() {
    return this.instance.compactAllPanels();
  }

  /**
   * Changes current workspace mode
   * @method
   */
  changeMode() {
    return this.instance.changeMode();
  }

  /**
   * Creates empty cell widget on workspace
   * @method
   */
  createEmptyCell(...args) {
    return this.instance.createEmptyCell(...args);
  }

  /**
   * Settting new column count
   * @method
   * @param {Number} newColumn new count of column in grid
   */
  setColumn(newColumn) {
    return this.instance.setColumn(newColumn);
  }

  /**
   * Deleting cell of workspace
   * @method
   * @param {String} cellID id of cell in grid
   */
  deleteCell(cellID) {
    return this.instance.deleteCell(cellID);
  }
}
