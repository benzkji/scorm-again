// @flow

/**
 * Data Validation Exception
 */
export class ValidationError extends Error {
  /**
   * Constructor to take in an error message and code
   * @param {number} errorCode
   */
  constructor(errorCode: number) {
    super(errorCode);
    this.#errorCode = errorCode;
  }

  #errorCode;

  /**
   * Trying to override the default Error message
   * @return {string}
   */
  get message() {
    return this.#errorCode + '';
  }
}
