import {
  AbstractClassInstanceError,
  AbstractMethodImplementError,
} from './../Errors/AbstractClassErrors';

export class BaseDataset {
  constructor() {
    if (this.constructor === BaseDataset) {
      throw new AbstractClassInstanceError(this.constructor.name);
    }
  }

  full() {
    throw new AbstractMethodImplementError('full', this.constructor.name);
  }

  firstLine() {
    throw new AbstractMethodImplementError('firstLine', this.constructor.name);
  }

  lastLine() {
    throw new AbstractMethodImplementError('lastLine', this.constructor.name);
  }

  getLineByNumber() {
    throw new AbstractMethodImplementError('getLineByNumber', this.constructor.name);
  }
}
