import { AbstractPlugin } from './AbstractPlugin';
import { AbstractMethodImplementError } from './../Errors/AbstractClassErrors';

export class PanelPlugin extends AbstractPlugin {
  defaultConfig = {
    title: '',
  }

  defaultFields = [
    {
      component: 'text',
      propName: 'title',
      attrs: {
        label: 'Заголовок',
      },
    },
  ]

  resizeObserver = null

  resizeObserverTarget = null

  constructor(guid, selector) {
    super();
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

  setResizeObserver(element, sizeSetter) {
    if (this.resizeObserverTarget === null) {
      this.resizeObserverTarget = element

      this.resizeObserver = new ResizeObserver((entries) => {
        const {height, width} = entries[0].contentRect
        sizeSetter({
          height,
          width,
        })
      });

      this.resizeObserver.observe(element);
    } else {
      throw new Error(`
      ResizeObserver уже существует, чтобы задать новые параметры
      сначала нужно удалить текущий
      `)
    }
  }

  removeResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.resizeObserverTarget);
      this.resizeObserverTarget = null;
      this.resizeObserver = null;
    }
  }

  /**
   * This method will be executed when the panel changes its visible state (for example, the tab has changed).
   * @param {boolean} isVisible
   */
  setVisible(isVisible) {}
}
