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

  /**
   *
   * @param {String} path - path to go
   * @param {*} replace - boolean flag to replace or not current state without pushing
   */
  async navigate(path, replace) {
    await this.instance.navigate(path, replace);
  }

  /**
   * @returns {String} - current route title
   */
  getRouteTitle() {
    return this.instance.getRouteTitle();
  }

  /**
   *
   * @param {String} path - path to go
   */
  async replace(path) {
    await this.instance.replace(path);
  }
}
