import { BaseAdapter } from './BaseAdapter';

export class NotificationSystemAdapter extends BaseAdapter {
  /**
   * @constructor
   * @param {String} version version of system in adapter
   */
  constructor(version) {
    super();
    this.instance = this.getSystem('NotificationSystem', version);
  }

  /**
   * Create notification
   * @param {String} title - title
   * @param {String} body - message
   * @param {Object} options - options for notification
   * options properties {
   *   floatMode: Boolean,
   *   floatTime: Number, // show time in seconds
   *   type: String, // can use: info/success/warning/error
   *   action: function, // the function that will be called by clicking on the notification title
   *   tag: String, // use the tag to group notifications in OS
   * }
   * @return string - id notification
   */
  create(title, body, options = {}) {
    return this.instance.create(title, body, options);
  }

  /**
   * Remove notification by id
   * @param {String} id - id notification
   * @return boolean
   */
  remove(id) {
    return this.instance.remove(id);
  }

  /**
   * Get list notifications
   * @return array
   */
  getList() {
    return this.instance.getList();
  }

  /**
   * Clear the list notifications
   * @return boolean
   */
  clearList() {
    return this.instance.clearList();
  }
}
