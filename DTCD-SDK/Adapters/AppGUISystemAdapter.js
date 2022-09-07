import { BaseAdapter } from './BaseAdapter';

export class AppGUISystemAdapter extends BaseAdapter {
  /**
   * @constructor
   * @param {String} version Version of system in adapter.
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('AppGUISystem', version);
  }

  /**
   * Apply page configuration template.
   * @param {Object} config Config object.
   */
  applyPageConfig(config = {}) {
    this.instance.applyPageConfig(config);
  }

  /**
   * Toggle sidebar visibility.
   * @param {String} side Sidebar side name.
   * @param {Boolean} open Toggle visibility manually (true => open, false => close).
   * @returns {Boolean} Sidebar visibility.
   */
  toggleSidebar(side, open) {
    return this.instance.toggleSidebar(side, open);
  }
}
