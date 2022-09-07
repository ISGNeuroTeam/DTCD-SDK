import { PanelPlugin } from './PanelPlugin';
import { AbstractMethodImplementError } from './../Errors/AbstractClassErrors';

export class AppPanelPlugin extends PanelPlugin {
  constructor(guid, selector) {
    super();
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
