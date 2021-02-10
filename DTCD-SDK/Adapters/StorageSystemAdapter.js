import {BaseAdapter} from './BaseAdapter';

export class StorageSystemAdapter extends BaseAdapter {
	/**
	 * Initialize StorageSystemAdapter instance.
	 * @constructor
	 */
	constructor() {
		super();
		this.instance = this.getSystem('StorageSystem');
	}

	/**
	 * Create a new record in storage.
	 * @method
	 * @param {string} key Record key name.
	 * @param {*} value Record stored value.
	 * @param {string} storage Storage type.
	 */
	addRecord(key, value, storage) {
		this.instance.addRecord(key, value, storage);
	}

	/**
	 * Replace record value by key or create a new record to storage.
	 * @method
	 * @param {string} key Record key name.
	 * @param {*} value Record stored value.
	 * @param {string} storage Storage type.
	 */
	putRecord(key, value, storage) {
		this.instance.putRecord(key, value, storage);
	}

	/**
	 * Check for a record in the storage.
	 * @method
	 * @param {string} key Record key name.
	 * @param {string} storage Storage type.
	 * @returns {boolean} Returns true if record exists in storage.
	 */
	hasRecord(key, storage) {
		return this.instance.hasRecord(key, storage);
	}

	/**
	 * Get record value from storage by key.
	 * @method
	 * @param {string} key Record key name.
	 * @param {string} storage Storage type.
	 * @returns {*} Storage record value.
	 */
	getRecord(key, storage) {
		return this.instance.getRecord(key, storage);
	}

	/**
	 * Delete record from storage by key.
	 * @method
	 * @param {string} key Record key name.
	 * @param {string} storage Storage type.
	 */
	removeRecord(key, storage) {
		this.instance.removeRecord(key, storage);
	}

	/**
	 * Clear the specified storage type.
	 * @method
	 * @param {string} storage Storage type.
	 */
	clearStorage(storage) {
		this.instance.clearStorage(storage);
	}
}
