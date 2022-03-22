import { AbstractPlugin } from './AbstractPlugin';
import { AbstractMethodImplementError } from './../Errors/AbstractClassErrors';

export class PanelPlugin extends AbstractPlugin {
  constructor(guid, selector) {
    // super();
    // const outerWrapper = document.getElementById(selector.slice(1));
    // const innerWrapper = document.createElement('div');
    // outerWrapper.id = '';
    // outerWrapper.innerHTML = '<h1> Test Title </h1>';
    // innerWrapper.id = selector.slice(1);
    // outerWrapper.appendChild(innerWrapper);
  }

  /**
   * This method will be executed after the style theme of the whole application has changed.
   */
  updateTheme() {
    throw new AbstractMethodImplementError(
      'Implement the updateTheme method for updating style properties of this panel'
    );
  }
}
