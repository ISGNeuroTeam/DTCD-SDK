import {BaseAdapter} from './BaseAdapter';

export class GUIDSystemAdapter extends BaseAdapter {
	/**
	 * @constructor
	 */
	constructor() {
		super();
		this.instance = this.getSystem('GUIDSystem');
	}

	/**
	 * Create and return string unique identifier
	 * @method
	 * @return {String}
	 */
	createGUID() {
		return this.instance.createGUID();
	}

	/**
	 * Set guid for object in GUIDSystem
	 * @method
	 * @param {Object} instance
	 * @param {String} guid
	 * @return {Boolean}
	 */
	setGUID(instance, guid) {
		return this.instance.setGUID(instance, guid);
	}

	/**
	 * Getting GUID by instance
	 * @method
	 * @param {String} instance
	 * @returns {String}
	 */
	getGUID(instance) {
		return this.instance.getGUID(instance);
	}

	/**
	 * Delete record about instance from GUIDSystem
	 * @method
	 * @param {String} guid
	 * @return {Boolean}
	 */
	removeGUID(guid) {
		return this.instance.removeGUID(guid);
	}

	/**
	 * Getting GUID's/GUID of instances with name in params
	 * @method
	 * @param {String} name
	 * @return {String[]|String|Boolean}
	 */
	getGUIDByName(name) {
		return this.instance.getGUIDByName(name);
	}

	/**
	 * Remove instance from GUIDSystem
	 * @method
	 * @param {Object} instance
	 * @return {Boolean}
	 */
	removeInstance(instance) {
		return this.instance.removeInstance(instance);
	}

	/**
	 * Getting instance by guid
	 * @method
	 * @param {String} guid
	 * @returns {Object}
	 */
	getInstance(guid) {
		return this.instance.getInstance(guid);
	}

	/**
	 * Get first instance of plugin with name in params
	 * @method
	 * @param {String} name
	 * @return {String[]|String|Boolean}
	 */
	getInstanceByName(name) {
		return this.instance.getInstanceByName(name);
	}
}
