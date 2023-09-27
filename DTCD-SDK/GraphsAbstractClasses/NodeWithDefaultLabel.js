import { AbstractNode } from './AbstractNode';

export class NodeWithDefaultLabel extends AbstractNode {
  constructor(yFiles) {
    super(yFiles);
    this.instance.tag.defaultLabel = `$this.props.name$ <br>$this.props.value$`;
    this.instance.tag.defaulInitialtLabel = ``;
  }
}
