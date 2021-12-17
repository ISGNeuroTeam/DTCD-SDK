import { BaseAdapter } from './BaseAdapter';

/**
 * DataSourceSystem adapter class.
 * @class @extends BaseAdapter
 */
export class DataSourceSystemAdapter extends BaseAdapter {
  /**
   * Initialize DataSourceSystemAdapter instance.
   * @constructor
   */
  constructor() {
    super();
    this.instance = this.getSystem('DataSourceSystem');
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
   * @param {string} type DataSource type name.
   * @returns {Object} DataSource class instance.
   */
  createDataSource(type) {
    return this.instance.createDataSource(type);
  }

  editDataSource(name, params) {
    return this.instance.editDataSource(name, params);
  }

  runDataSource(name) {
    return this.instance.runDataSource(name);
  }

  getDataSource(name) {
    return this.instance.getDataSource(name);
  }

  removeDataSource(name) {
    return this.instance.removeDataSource(name);
  }

  getDataSourceList() {
    return this.instance.getDataSourceList();
  }
}
