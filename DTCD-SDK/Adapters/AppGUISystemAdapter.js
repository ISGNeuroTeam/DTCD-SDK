import { BaseAdapter } from './BaseAdapter';

export class AppGUISystemAdapter extends BaseAdapter {
  /**
   * @constructor
   * @param {String} version version of system in adapter
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('AppGUISystem', version);
  }

  applyPageConfig(config = {}) {
    this.instance.applyPageConfig(config);
  }
}
