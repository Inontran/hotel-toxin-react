import DiagramProps from './DiagramProps';

interface DiagramDefaultProps extends DiagramProps {
  chartNumAwesome: number,
  chartNumGood: number,
  chartNumNotbad: number,
  chartNumDisappointed: number,
  labelAwesome: string,
  labelGood: string,
  labelNotbad: string,
  labelDisappointed: string,
  chartCountAllText: string,
}

export default DiagramDefaultProps;
