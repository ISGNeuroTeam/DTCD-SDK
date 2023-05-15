import AbstractGraphElement from './AbstractGraphElement';

export default class AbstractNode extends AbstractGraphElement{
  instance;

  constructor(yFiles) {
    super(yFiles)
    const { SimpleNode } = yFiles.default
    this.instance = new SimpleNode();
      this.instance.tag = {}
  }
}