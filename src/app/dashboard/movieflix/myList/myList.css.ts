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

const cardWrap = style({
  position: 'relative',
  minWidth: '13.5vw'
});

const removeBtn = style({
  position: 'absolute',
  top: '0.5vw',
  right: '0.5vw',
  zIndex: '3',
  border: 'none',
  borderRadius: '0.5vw',
  padding: '0.35vw 0.8vw',
  fontSize: '0.85vw',
  fontWeight: '600',
  color: '#fff',
  background: 'rgba(0, 0, 0, 0.65)',
  cursor: 'pointer',
  transition: 'background 0.18s',
  selectors: {
    '&:hover': {
      background: '#e50914'
    }
  }
});

const styles = {
  wrapper,
  title,
  flexGrid,
  emptyMessage,
  cardWrap,
  removeBtn
};

export default styles;
