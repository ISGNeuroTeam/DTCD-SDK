import { BaseAdapter } from './BaseAdapter';

/**
 * StorageSystem adapter class.
 * @class @extends BaseAdapter
 */
export class StorageSystemAdapter extends BaseAdapter {
  /**
   * Initialize StorageSystemAdapter instance.
   * @constructor
   * @param {String} version version of system in adapter
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('StorageSystem', version);
  }

  /**
   * This method returns guid of system used in adapter
   * @returns {String} guid of the instance
   */
  getGUID() {
    return super.getGUID(this.instance);
  }

  /**
   * Session module.
   * @property @public
   * @returns {SessionModule} SessionModule instance.
   */
  get session() {
    return this.instance.session;
  }

  /**
   * Browser module.
   * @property @public
   * @returns {BrowserModule} BrowserModule instance.
   */
  get browser() {
    return this.instance.browser;
  }

  /**
   * Token module.
   * @property @public
   * @returns {TokenModule} TokenModule instance.
   */
  get tokenStorage() {
    return this.instance.tokenStorage;
  }
}
