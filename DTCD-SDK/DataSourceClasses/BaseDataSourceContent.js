import {
  AbstractClassInstanceError,
  AbstractMethodImplementError,
} from '../Errors/AbstractClassErrors';

export class BaseDataSourceContent {
  constructor() {
    if (this.constructor === BaseDataSourceContent) {
      throw new AbstractClassInstanceError(this.constructor.name);
    }
  }

  toDataset() {
    throw new AbstractMethodImplementError('toDataset', this.constructor.name);
  }

  toArray() {
    throw new AbstractMethodImplementError('toArray', this.constructor.name);
  }

  toJSON() {
    throw new AbstractMethodImplementError('toJSON', this.constructor.name);
  }

  toString() {
    throw new AbstractMethodImplementError('toString', this.constructor.name);
  }

  toNumber() {
    throw new AbstractMethodImplementError('toNumber', this.constructor.name);
  }
}
