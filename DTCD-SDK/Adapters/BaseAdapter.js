export class BaseAdapter {
	/**
	 * Getting instances of systems in the constructor
	 * @constructor
	 */
	constructor() {
		this.app = Application;
	}
	/**
	 * This method returns an instance of the required system
	 * @param {String} name Name of getting system
	 * @returns {Object} Instance of system
	 */
	getSystem(name) {
		return this.app.getSystem(name);
	}
}
