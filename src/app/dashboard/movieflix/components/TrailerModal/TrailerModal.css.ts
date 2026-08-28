import { style } from '@vanilla-extract/css';

const overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
});

const content = style({
  position: 'relative',
  width: '70vw',
  aspectRatio: '16 / 9'
});

const iframe = style({
  width: '100%',
  height: '100%',
  border: 'none'
});

const closeBtn = style({
  position: 'absolute',
  top: '-2.5vw',
  right: 0,
  background: 'transparent',
  border: 'none',
  color: '#fff',
  fontSize: '1.5vw',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: 'red'
    }
  }
});

const styles = {
  overlay,
  content,
  iframe,
  closeBtn
};

export default styles;
