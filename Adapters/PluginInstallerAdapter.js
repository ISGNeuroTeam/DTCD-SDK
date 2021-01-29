import {BaseAdapter} from './BaseAdapter';

export class PluginInstallerAdapter extends BaseAdapter {
	/**
	 * @constructor
	 */
	constructor() {
		super();
		this.instance = this.getSystem('PluginInstaller');
		/**
		 * Array of exists plugins in the application
		 * @property {Array}
		 */
		this.plugins = this.instance.plugins;
	}

	/**
	 *
	 * @param {String} pluginName Name of plugin for installing
	 * @param  {...any} args Aruments passed to the constructor of plugin
	 * @returns {Object} Instance of installed plugin
	 */
	install(pluginName, ...args) {
		this.instance(pluginName, ...args);
	}
}
