import { style } from '@vanilla-extract/css';

const movieRowSection = style({
  width: '100%',
  boxSizing: 'border-box',
  marginTop: '4vw',
  paddingLeft: '3.5vw',
  marginBottom: '14vw'
});

const movieRowScroll = style({
  marginTop: '1vw',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3.5vw'
});

const styles = {
  movieRowSection,
  movieRowScroll
};

export default styles;
