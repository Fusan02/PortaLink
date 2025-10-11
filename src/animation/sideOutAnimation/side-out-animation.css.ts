import { keyframes, style } from '@vanilla-extract/css';

const fadeOutKeyframes = keyframes({
  '0%': {
    opacity: '1',
  },
  '100%': {
    opacity: '0',
    pointerEvents: 'none',
  },
});

const fadeOutAnimation = style({
  animationName: fadeOutKeyframes,
  animationDuration: '1s',
  animationFillMode: 'forwards',
});

const styles = {
  fadeOutAnimation,
};
export default styles;
