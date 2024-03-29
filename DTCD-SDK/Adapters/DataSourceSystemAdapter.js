import { BaseAdapter } from './BaseAdapter';

/**
 * DataSourceSystem adapter class.
 * @class @extends BaseAdapter
 */
export class DataSourceSystemAdapter extends BaseAdapter {
  /**
   * Initialize DataSourceSystemAdapter instance.
   * @constructor
   * @param {String} version version of system in adapter
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('DataSourceSystem', version);
  }

  /**
   * This method returns guid of system used in adapter
   * @returns {String} guid of the instance
   */
  getGUID() {
    return super.getGUID(this.instance);
  }

  /**
   * List of available datasource types.
   * @property @public
   * @returns {string[]} DataSource types list.
   */
  get dataSourceTypes() {
    return this.instance.dataSourceTypes;
  }

  /**
   * Create a datasource of a specific type.
   * @method @public
   * @param {string} name DataSource name.
   * @param {string} type DataSource type.
   * @param {Object} datasourceParams parameters of datasource.
   * @returns {Object} DataSource class instance.
   */
  createDataSource(name, type, datasourceParams) {
    return this.instance.createDataSource(name, type, datasourceParams);
  }

  /**
   * Edits a specific datasource.
   * @method @public
   * @param {string} name DataSource name.
   */
  editDataSource(name, params) {
    return this.instance.editDataSource(name, params);
  }

  /**
   * Execute a specific datasource.
   * @method @public
   * @param {string} name DataSource name.
   */
  runDataSource(name) {
    return this.instance.runDataSource(name);
  }

  /**
   * Returns a specific datasource.
   * @method @public
   * @param {string} name DataSource name.
   * @returns {Object} datasource.
   */
  getDataSource(name) {
    return this.instance.getDataSource(name);
  }

  /**
   * Removes a datasource.
   * @method @public
   * @param {string} name DataSource name.
   */
  removeDataSource(name) {
    return this.instance.removeDataSource(name);
  }

  /**
   * Returns an array of datasources.
   * @method @public
   * @returns {Array} array of datasources.
   */
  getDataSourceList() {
    return this.instance.getDataSourceList();
  }

  oneShotRun(type, datasourceParameters) {
    return this.instance.oneShotRun(type, datasourceParameters);
  }
  get autorun() {
    return this.instance.autorun;
  }

  set autorun(value) {
    this.instance.autorun = value;
  }

  get runOnTokenChange() {
    return this.instance.runOnTokenChange;
  }

  set runOnTokenChange(value) {
    this.instance.runOnTokenChange = value;
  }
}
