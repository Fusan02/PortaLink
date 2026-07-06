import { style } from '@vanilla-extract/css';

const wrapper = style({
  position: 'relative'
});

const arrow = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  zIndex: 5,
  width: '2.6vw',
  background: 'rgba(0, 0, 0, 0)',
  color: '#fff',
  border: 'none',
  fontSize: '2.5vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.2s, font-size 0.2s',
  cursor: 'pointer',
  ':hover': {
    fontSize: '3.5vw',
    background: 'radial-gradient(ellipse, rgba(62, 62, 62, 0.7) 0%, transparent 70%)'
  },
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 1
    }
  }
});

const arrowLeft = style({
  left: '-2.6vw'
});

const arrowRight = style({
  right: '-2.6vw'
});

const styles = {
  wrapper,
  arrow,
  arrowLeft,
  arrowRight
};

export default styles;
