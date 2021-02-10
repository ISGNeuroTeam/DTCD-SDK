import {AbstractPlugin} from './AbstractPlugin';

/**
 * @typedef {Object} ExtensionInfo
 * @property {String} plugin
 * @property {*} data
 */
export class ExtensionPlugin extends AbstractPlugin {
	/**
	 * @static
	 * @return {ExtensionInfo} information about extension
	 */
	static getExtensionInfo() {
		throw new Error('Implement the getExtensionInfo static method!');
	}
}
