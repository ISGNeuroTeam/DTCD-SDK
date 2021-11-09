import { AbstractMethodImplementError } from './../Errors/AbstractClassErrors';
/**
 * @typedef {Object} PluginMeta
 * @property {String} title
 * @property {String} name
 * @property {String[]} actions
 * @property {String[]} events
 * @property {String[]} requirements
 */
export class AbstractPlugin {
  /**
   * Static method of AbstractPlugin class which need to reload!
   * @static
   * @returns {PluginMeta}
   * @return {String} meta.title
   * @return {String} meta.name
   * @return {String[]} meta.actions
   * @return {String[]} meta.events
   * @return {String[]} meta.dependencies
   */
  static getRegistrationMeta() {
    throw new AbstractMethodImplementError('Implement the getRegistrationMeta static method!');
  }

  /**
   * Getting module from dependencies
   * @method
   * @param {String} name
   * @returns {Object[]}
   */
  getDependence(name) {
    return Application.getDependence(name);
  }

  /**
   * Getting all extensions for plugin by name
   * @method
   * @param {String} name
   * @return {Object[]}
   */
  getExtensions(name) {
    return Application.getExtensions(name);
  }

  /**
   * Getting list of all awailable panels
   * @method
   * @return {Object[]}
   */
  getPanels() {
    return Application.getPanels();
  }

  /**
   * Getting system by name
   * @method
   * @param {String} name
   * @return {Object}
   */
  getSystem(name) {
    return Application.getSystem(name);
  }

  /**
   * Installing plugin by name
   * @method
   * @param {String} name
   * @return {Object} Returns instance of plugin
   */
  installPlugin(name, ...args) {
    return Application.installPlugin(name, ...args);
  }

  /**
   * Install extension by target and name
   * @method
   * @param {String} target
   * @param {String} pluginName
   * @return {Object} Returns instance of plugin
   */
  installExtension(target, pluginName, ...args) {
    return Application.installExtension(target, pluginName, ...args);
  }

  /**
   * Uninstall plugin from Application by instance
   * @method
   * @param {Object} instance
   * @returns {Boolean}
   */
  uninstallPluginByInstance(instance) {
    return Application.uninstallPluginByInstance(instance);
  }

  /**
   * Uninstall plugin from Application by unique identifier (GUID)
   * @method
   * @param {String} guid Unique identifier of the instance to be uninstalled
   * @returns {Boolean}
   */
  uninstallPluginByGUID(guid) {
    return Application.uninstallPluginByGUID(guid);
  }

  /**
   * Getting instance by GUID
   * @method
   * @param {String} guid
   * @returns {Object}
   */
  getInstance(guid) {
    return Application.getInstance(guid);
  }

  /**
   * Getting GUID by instance of plugin
   * @method
   * @param {Object} instance
   * @returns {Object}
   */
  getGUID(instance) {
    return Application.getGUID(instance);
  }

  /**
   * Getting list of all GUID's
   * @method
   * @returns {String[]}
   */
  getGUIDList() {
    return Application.getGUIDList();
  }

  getPlugin(name, type = false) {
    return Application.getPlugin(name, type);
  }
}
