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
	 * @return {void}
	 */
	setGUID(instance, guid) {
		return this.instance.setGUID(instance, guid);
	}

	/**
	 * Get GUID of first instance with name in params
	 * @method
	 * @param {String} name
	 */
	getGUIDByName(name) {
		return this.instance.getGUIDByName(name);
	}

	/**
	 * Getting instance by guid
	 * @method
	 * @param {String} guid
	 */
	getInstance(guid) {
		this.instance.getInstance(guid);
	}

	/**
	 * Get first instance of plugin with name in params
	 * @method
	 * @param {String} name
	 */
	getInstanceByName(name) {
		this.instance.getInstanceByName(name);
	}

	/**
	 * Delete record about instance from GUIDSystem
	 * @method
	 * @param {String} guid
	 */
	removeGUID(guid) {
		this.instance.removeGUID(guid);
	}
}
