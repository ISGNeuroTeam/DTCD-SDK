export class AbstractPlugin {
	/**
	 * Static method of AbstractPlugin class which need to reload!
	 * @static
	 */
	static getRegistrationMeta() {
		throw new Error('Impement the static getRegistrationMeta method!');
	}

	/**
	 *
	 * @param {Object} connector I's object with meta information properties about plugin
	 */
	static register(connector) {
		connector.register(this.getRegistrationMeta());
	}
}
