import { BaseAdapter } from './BaseAdapter';

export class LogSystemAdapter extends BaseAdapter {
  /**
   * @constructor
   * @param {String} version version of system in adapter
   * @param {String} guid guid of plugin instance
   * @param {String} pluginName name of plugin
   */

  constructor(version, guid, pluginName) {
    super();
    this.instance = this.getSystem('LogSystem', version);
    this.guid = guid;
    this.pluginName = pluginName;
  }

  /**
   * This method returns guid of system used in adapter
   * @returns {String} guid of the instance
   */
  getGUID() {
    return super.getGUID(this.instance);
  }

  /**
   * Adds new fatal level log record to the system
   * @param {String} message - log message to record
   * @returns {Boolean} - indicatior of success
   */
  fatal(message) {
    return this.instance.fatal(this.guid, this.pluginName, message);
  }

  /**
   * Adds new error level log record to the system
   * @param {String} message - log message to record
   * @returns {Boolean} - indicatior of success
   */
  error(message) {
    return this.instance.error(this.guid, this.pluginName, message);
  }

  /**
   * Adds new warn level log record to the system
   * @param {String} message - log message to record
   * @returns {Boolean} - indicatior of success
   */
  warn(message) {
    return this.instance.warn(this.guid, this.pluginName, message);
  }

  /**
   * Adds new info level log record to the system
   * @param {String} message - log message to record
   * @returns {Boolean} - indicatior of success
   */
  info(message) {
    return this.instance.info(this.guid, this.pluginName, message);
  }

  /**
   * Adds new debug level log record to the system
   * @param {String} message - log message to record
   * @returns {Boolean} - indicatior of success
   */
  debug(message) {
    return this.instance.debug(this.guid, this.pluginName, message);
  }

  /**
   * Invokes callback if current log level is above or equel to the given, otherwise nothing happens
   * @param {(String|Number)} logLevel - level on what callback should be invoked
   * @param {callback} callback - callback which should be invoked if level is suitable, should return String message!
   * @returns {Boolean} - indicatior of success
   */
  invokeOnLevel(logLevel, callback) {
    return this.instance.invokeOnLevel(this.guid, this.pluginName, logLevel, callback);
  }

  /**
   * Returns current global log level
   * @returns {String} - current global log level
   */
  getGlobalLogLevel() {
    return this.instance.getGlobalLogLevel();
  }

  /**
   * Sets new global log level
   * @param {(String|Number)} logLevel - new log level
   * @returns {Boolean} - indicatior of success
   */
  setGlobalLogLevel(logLevel) {
    this.instance.setGlobalLogLevel(logLevel);
  }

  /**
   * Returns current log level for plugin
   * @returns {String} - current log level of plugin
   */
  getPluginLogLevel() {
    return this.instance.getPluginLogLevel(this.guid, this.pluginName);
  }

  /**
   * Sets new plugin log level
   * @param {(String|Number)} logLevel - new log level
   * @returns {Boolean} - indicatior of success
   */
  setPluginLogLevel(logLevel) {
    return this.instance.setPluginLogLevel(this.guid, this.pluginName, logLevel);
  }

  /**
   * Removes current log level of plugin
   * @returns {Boolean} - indicatior of success
   */
  removePluginLogLevel() {
    return this.instance.removePluginLogLevel(this.guid, this.pluginName);
  }

  /**
   * Sets new interval for sending logs, work only after page reload
   * @param {Number} seconds - interval in seconds
   * @returns {Boolean} - indicatior of success
   */
  setSendInerval(seconds) {
    return this.instance.setSendInerval(seconds);
  }

  /**
   * Sets new buffer size logs, work only after page reload
   * @param {Number} bytes - buffer size in bytes
   * @returns {Boolean} - indicatior of success
   */
  setBufferSize(bytes) {
    return this.instance.setBufferSize(bytes);
  }

  /**
   * Resets current configuration of LogSystem
   */
  resetConfiguration() {
    this.instance.resetConfiguration();
  }

  /**
   * Sets the username for logs based on app authorization
   * @returns {String | null} - current username or null
   */
  async setUsername() {
    return await this.instance.setUsername();
  }

  /**
   * Uploads log buffer to server
   * @returns {Promise} Logs upload request promise
   */
  uploadLogs() {
    return this.instance.uploadLogs();
  }
}
