import {
  AbstractClassInstanceError,
  AbstractMethodImplementError,
} from './../Errors/abstractClassErrors';

export class BaseExternalDatasource {

  constructor () {
    if (this.constructor === BaseExternalDatasource) {
      throw new AbstractClassInstanceError(this.constructor.name);
    }
  }

  init () {
    throw new AbstractMethodImplementError('init', this.constructor.name);
  }

  run () {
    throw new AbstractMethodImplementError('run', this.constructor.name);
  }

  rerun () {
    throw new AbstractMethodImplementError('rerun', this.constructor.name);
  }

}
