import styled from 'styled-components';

interface IGridProps {
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
  gridTemplateAreas?: string;
  alignItems?: string;
}

interface IGridItemProps {
  gridArea?: string;
  gridRowStart?: number;
  gridColumnStart?: number;
  gridRowEnd?: number;
  gridColumnEnd?: number;
}

interface IBoxProps {
  border?: string;
  borderRadius?: string;
  color?: string;
  padding?: string;
  margin?: string;
  width?: string | number;
  height?: string | number;
  position?: 'relative' | 'absolute' | 'fixed' | 'static';
  boxShadow?: string;
  center?: boolean;
  cursor?: string;
  background?: string;
}

export const Box = styled('div')<IBoxProps>`
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || 0};
  color: ${props => props.color};
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  position: ${props => props.position};
  box-shadow: ${props => props.boxShadow};
  line-height: ${props => (props.center ? props.height : null)};
  text-align: ${props => (props.center ? 'center' : null)};
  cursor: ${props => props.cursor};
  background: ${props => props.background};
`;

export const Grid = styled(Box)<IGridProps & IGridItemProps>`
  display: grid;
  grid-gap: ${props => props.gap || 'normal'};
  grid-template-rows: ${props => props.gridTemplateRows};
  grid-template-columns: ${props => props.gridTemplateColumns};
  grid-row-gap: ${props => props.rowGap};
  grid-column-gap: ${props => props.columnGap};
  grid-template-areas: ${props => props.gridTemplateAreas || ''};
  grid-area: ${props => props.gridArea};
  grid-auto-flow: dense;
  align-items: ${props => props.alignItems};
`;

export const GridItem = styled(Box)<IGridItemProps>`
  grid-row-start: ${props => props.gridRowStart};
  grid-column-start: ${props => props.gridColumnStart};
  grid-row-end: ${props => props.gridRowEnd};
  grid-column-end: ${props => props.gridColumnEnd};
  grid-area: ${props => props.gridArea};
`;
