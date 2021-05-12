import {ExtensionPlugin} from './../PluginClasses/ExtensionPlugin';
import {
  AbstractClassInstanceError,
  AbstractMethodImplementError,
} from '../Errors/AbstractClassErrors';

export class BaseExternalDataSource extends ExtensionPlugin {
  constructor() {
    super();
    if (this.constructor === BaseExternalDataSource) {
      throw new AbstractClassInstanceError(this.constructor.name);
    }
  }

  init() {
    throw new AbstractMethodImplementError('init', this.constructor.name);
  }

  run() {
    throw new AbstractMethodImplementError('run', this.constructor.name);
  }

  rerun() {
    throw new AbstractMethodImplementError('rerun', this.constructor.name);
  }
}
