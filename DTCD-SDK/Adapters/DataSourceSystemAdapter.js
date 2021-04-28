import {BaseAdapter} from './BaseAdapter';

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
    return this.instance.datasourceTypes;
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
}
