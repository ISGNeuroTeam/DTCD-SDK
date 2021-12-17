import {AbstractPlugin} from './AbstractPlugin';
import {AbstractMethodImplementError} from './../Errors/AbstractClassErrors';

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
    throw new AbstractMethodImplementError('Implement the getExtensionInfo static method!');
  }
}
