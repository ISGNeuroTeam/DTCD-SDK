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
   * Delete workspace configuration with the given id
   * @method
   * @param {number} id identifier of configuration
   */
  async deleteConfiguration(id) {
    await this.instance.deleteConfiguration(id);
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
    await this.instance.changeConfigurationTitle(id, newTitle);
  }

  /**
   * Creates empty workspace configuration
   * @method
   * @param {string} configurationTitle title to set to new configuration
   */
  async createEmptyConfiguration(configurationTitle) {
    await this.instance.createEmptyConfiguration(configurationTitle);
  }

  /**
   * Saves current workspace configuration
   * @method
   */
  async saveConfiguration() {
    await this.instance.saveConfiguration();
  }

  /**
   * Sets new workspace configuration with given id
   * @method
   * @param {number} id identifier of configuration
   */
  setConfiguration(id) {
    this.instance.setConfiguration(id);
  }

  /**
   * Compacts panels to top left corner of screen
   * @method
   */
  compactAllPanels() {
    this.instance.compactAllPanels();
  }

  /**
   * Changes current workspace mode
   * @method
   */
  changeMode() {
    this.instance.changeMode();
  }

  /**
   * Sets defaults configuration of workspace
   * @method
   */
  setDefaultConfiguration() {
    this.instance.setDefaultConfiguration();
  }
  /**
   * Creates empty cell widget on workspace
   * @method
   */
  createEmptyCell() {
    this.instance.createEmptyCell();
  }
}
