import {BaseAdapter} from './BaseAdapter';

export class InteractionSystemAdapter extends BaseAdapter {
	/**
	 * @constructor
	 */
	constructor() {
		super();
		this.instance = this.getInstance('InteractionSystem');
	}

	/**
	 * Sends GET request to the given url
	 * @param {String} url url of API endpoint
	 * @returns {Object} response with data
	 */
	GETRequest(url) {
		return this.instance.GETRequest(url);
	}
}
