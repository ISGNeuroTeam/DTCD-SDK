import AbstractPlugin from './AbstractPlugin';

export class PanelPlugin extends AbstractPlugin {
	/**
	 * This method will be executed after the style theme of the whole application has changed.
	 * @static
	 * @returns {void}
	 */
	updateTheme() {
		throw new Error('Please implement updateTheme method for updating style properties of this panel');
	}
}
