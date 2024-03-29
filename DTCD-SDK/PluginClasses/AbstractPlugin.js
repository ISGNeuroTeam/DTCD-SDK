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
   * Installing system
   * @method
   * @param {String} name
   * @param {String} version
   * @param {String} guid
   * @return {Object} Returns instance of plugin
   */
  installSystem({ name, version, guid }) {
    return Application.installSystem({ name, version, guid });
  }

  /**
   * Installing panel
   * @method
   * @param {String} name
   * @param {String} version
   * @param {String} guid
   * @param {String} selector
   * @return {Object} Returns instance of plugin
   */
  installPanel({ name, version, guid, selector }) {
    return Application.installPanel({ name, version, guid, selector });
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
   * Getting module from dependencies
   * @method
   * @param {String} name
   * @param {String} type
   * @param {String} version
   * @returns {Object[]}
   */
  getDependence(name, type, version) {
    return Application.getDependence(name, type, version);
  }

  /**
   * Add new dependence
   * @method
   * @param {String} name Dependence name
   * @param {String} type Dependence type
   * @param {String} version Dependence version
   * @param {*} moduleOrPath Path to dependence location (as string) or dependence data
   */
  async installDependence(name, type, version, moduleOrPath) {
    await Application.installDependence(name, type, version, moduleOrPath);
  }

  /**
   * Getting specified plugin
   * @param {String} name Plugin name
   * @param {String} version Plugin version
   * @param {Number} octetCount Possible number of second octets higher than specified or less than 0 to get latest version
   * @returns {Object} Returns instance of plugin
   */
  getPlugin(name, version, octetCount) {
    return Application.getPlugin(name, version, octetCount);
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
  getSystem(name, version) {
    return Application.getSystem(name, version);
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

  findInstances(name, version) {
    return Application.findInstances(name, version);
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

  /**
   * Resets systems if they has resetSystem method
   * @method
   */
  resetSystems() {
    return Application.resetSystems();
  }

  /**
   * This method will be executed before uninstall plugin.
   */
  beforeUninstall() {}
}
