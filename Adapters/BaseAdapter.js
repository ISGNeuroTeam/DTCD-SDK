export class BaseAdapter {
	/**
	 * Getting instances of systems in the constructor
	 * @constructor
	 */
	constructor() {
		// Next-line is temporary decision
		this.systemGUID = document._DataCAD.systemGUID;
	}
	/**
	 * This method returns an instance of the required system
	 * @param {String} instanceName Name of getting system
	 * @returns {Object} Instance of system
	 */
	getInstance(instanceName) {
		return this.systemGUID.getInstanceByName(instanceName);
	}
}
