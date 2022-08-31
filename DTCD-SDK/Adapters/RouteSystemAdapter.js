import { BaseAdapter } from './BaseAdapter';

export class RouteSystemAdapter extends BaseAdapter {
  /**
   * @constructor
   * @param {String} version version of system in adapter
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('RouteSystem', version);
  }

  async navigate(path) {
    await this.instance.navigate(path);
  }

  getRouteTitle() {
    return this.instance.getRouteTitle();
  }
}
