export default class AbstractGraphElement {
  #yFiles;

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }
}