import { keyframes, style } from '@vanilla-extract/css';

const fadeInKeyframes = keyframes({
  '0%': {
    opacity: '0',
  },
  '100%': {
    opacity: '1',
    pointerEvents: 'auto',
  },
});

const fadeInAnimation = style({
  animationName: fadeInKeyframes,
  animationDuration: '2s',
  animationFillMode: 'forwards',
});

const styles = {
  fadeInAnimation,
};
export default styles;
