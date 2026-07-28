import { style } from '@vanilla-extract/css';

const wrapper = style({
  width: '100%',
  boxSizing: 'border-box',
  marginTop: '4vw',
  paddingLeft: '3.5vw',
  paddingRight: '3.5vw',
  marginBottom: '14vw'
});

const title = style({
  color: '#fff',
  fontSize: '1.56vw',
  fontWeight: '700',
  letterSpacing: '0.1vw'
});

const flexGrid = style({
  marginTop: '1vw',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3.5vw'
});

const emptyMessage = style({
  color: '#fff',
  marginTop: '1vw'
});

const styles = {
  wrapper,
  title,
  flexGrid,
  emptyMessage
};

export default styles;
