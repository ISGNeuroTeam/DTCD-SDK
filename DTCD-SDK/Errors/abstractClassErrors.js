import { CustomError } from './CustomError';

export class AbstractClassInstanceError extends CustomError {
  constructor (className) {
    super(`Abstract class ${className} cannot have instances`);
  }
}

export class AbstractMethodImplementError extends CustomError {
  constructor (methodName, className) {
    super(
      `The "${methodName}" method must be implemented in the ${className} class`
    );
  }
}
