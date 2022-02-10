import { BaseAdapter } from './BaseAdapter';

export class EventSystemAdapter extends BaseAdapter {
  #guid;
  #instance;

  /**
   * @constructor
   * @param {String} version version of system in adapter
   * @param {String} guid guid of plugin, in which the adapter instance will be inited
   */
  constructor(version, guid) {
    super();
    this.#guid = guid;
    this.#instance = this.getSystem('EventSystem', version);
  }
  /**
   * This method returns guid of system used in adapter
   * @returns {String} guid of the instance
   */
  getGUID() {
    return super.getGUID(this.instance);
  }

  /**
   * Configure state of EventSystem by object
   * @method
   * @param {*} conf Config object
   * @returns {Boolean} true, if everything is ok
   */
  setPluginConfig(conf) {
    return this.#instance.setPluginConfig(conf);
  }

  /**
   * Getting state of EventSystem
   * @method
   * @returns {*} State of system by object
   */
  getPluginConfig() {
    return this.#instance.getPluginConfig();
  }

  resetSystem() {
    this.#instance.resetSystem();
  }

  // ---- getters ----
  get events() {
    return this.#instance.events;
  }

  get actions() {
    return this.#instance.actions;
  }

  get subscriptions() {
    return this.#instance.subscriptions;
  }

  /**
   * Register methods of instance as actions in EventSystem. Register events of instance by names.
   * @method
   * @param {*} obj An instance of the plugin being registered
   * @param {String[]} eventList Array of eventNames of plugin that being registered
   * @param {String} customGUID instance guid of plugin that will register
   * @returns {Boolean} true, if everything is ok
   */
  registerPluginInstance(obj, eventList, customGUID) {
    if (typeof customGUID === 'undefined')
      return this.#instance.registerPluginInstance(this.#guid, obj, eventList);
    else return this.#instance.registerPluginInstance(customGUID, obj, eventList);
  }

  /**
   * Adding event type to event list into eventSystem (register them)
   * @method
   * @param {String} eventName event name
   * @returns {Boolean} true, if everything is ok
   */
  registerEvent(eventName, ...args) {
    return this.#instance.registerEvent(this.#guid, eventName, ...args);
  }

  /**
   * Register new action
   * @method
   * @param {String} actionName action name
   * @param {Function} callback callback whitch invoked on event
   * @returns {Boolean} true, if everything is ok
   */
  registerAction(actionName, callback) {
    return this.#instance.registerAction(this.#guid, actionName, callback);
  }

  /**
   * Register new custom action
   * @method
   * @param {String} actionName action name
   * @param {Function} callback callback whitch invoked on event
   * @returns {Boolean} true, if everything is ok
   */
  registerCustomAction(actionName, callback) {
    return this.#instance.registerCustomAction(actionName, callback);
  }
  /**
   * Removes custom actions from EventSystem
   * @method
   * @param {String} customActionName custom action name
   */
  removeCustomAction(customActionName) {
    return this.#instance.removeCustomAction(customActionName);
  }

  /**
   * Publishes event from instance by name
   * @method
   * @param {String} eventName event name
   * @param {*} args ...
   * @returns {Boolean} true, if everything is ok
   */
  publishEvent(eventName, args) {
    return this.#instance.publishEvent(this.#guid, eventName, args);
  }

  /**
   * Subscribing
   * @method
   * @param {String} eventGUID instance guid of firing plugin
   * @param {String} eventName name of event
   * @param {String} actionsGUID instance guid of plugin whom invoke callback
   * @param {String} actionName name of action
   * @param {Array} args arguments of event
   * @returns {Boolean} true, if everything is ok
   */
  subscribe(eventGUID, eventName, actionGUID, actionName, ...args) {
    return this.#instance.subscribe(eventGUID, eventName, actionGUID, actionName, ...args);
  }

  /**
   * Unsubscribing
   * @method
   * @param {String} eventGUID instance guid of firing plugin
   * @param {String} eventName name of event
   * @param {String} actionsGUID instance guid of plugin whom invoke callback
   * @param {String} actionName name of action
   * @param {Array} args arguments of event
   * @returns {Boolean} true, if everything is ok
   */
  unsubscribe(eventGUID, eventName, actionGUID, actionName, ...args) {
    return this.#instance.unsubscribe(eventGUID, eventName, actionGUID, actionName, ...args);
  }
}
