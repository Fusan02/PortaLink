import { style } from '@vanilla-extract/css';

const movieRowSection = style({
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  marginTop: '-5vw',
  position: 'relative',
  paddingLeft: '3.5vw',
  paddingRight: '3.5vw',
  marginBottom: '14vw',
  zIndex: 10
});

const movieRowTitle = style({
  color: '#fff',
  fontSize: '1.56vw',
  fontWeight: 700,
  letterSpacing: '0.1vw'
});

const movieRowScroll = style({
  display: 'flex',
  gap: '2.2vw',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});

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
  movieRowSection,
  movieRowTitle,
  movieRowScroll,
  wrapper,
  arrow,
  arrowLeft,
  arrowRight
};

export default styles;
