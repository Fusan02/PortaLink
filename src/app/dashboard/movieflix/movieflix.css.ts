import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  background: 'hsl(0, 0%, 9%)',
  margin: 0,
  width: '100%',
  overflowX: 'hidden'
});

globalStyle('button', {
  cursor: 'pointer'
});

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

const mainWrapper = style({
  width: '100%',
  overflow: 'hidden',
  color: '#fff'
});

const heroSection = style({
  position: 'relative'
});

const heroSectionBg = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  filter: 'brightness(0.55)'
});

const heroSectionGradient = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, transparent 50%, hsl(0, 0%, 9%) 100%)',
  zIndex: 1
});

const heroSectionContent = style({
  position: 'absolute',
  bottom: '20%',
  left: '3.5vw',
  zIndex: 2,
  maxWidth: '35.3vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2vw'
});

const heroSectionTitle = style({
  fontSize: '2.5vw',
  fontWeight: 800,
  margin: '0 0 0.5vw 0',
  letterSpacing: '0.1vw'
});

const heroSectionBadges = style({
  display: 'flex',
  gap: '0.75vw',
  marginBottom: '0.74vw'
});

const heroSectionBadge = style({
  background: '#232323',
  color: '#fff',
  borderRadius: '0.6vw',
  padding: '0.18vw 1.1vw',
  fontSize: '0.8vw',
  fontWeight: 600,
  letterSpacing: '0.05vw'
});

const heroSectionOverview = style({
  fontSize: '1.3vw',
  color: '#e4e4e4',
  marginBottom: '1.85vw',
  textShadow: '0 0.18vw 1.5vw #000a',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  lineClamp: 4,
  overflow: 'hidden'
});

const heroSectionActions = style({
  display: 'flex',
  gap: '1.05vw'
});

const heroSectionBtn = style({
  fontSize: '1vw',
  fontWeight: 700,
  borderRadius: '0.6vw',
  padding: '1.0vw 1.8vw',
  border: 'none',
  cursor: 'pointer',
  background: '#fff',
  color: '#111',
  display: 'flex',
  gap: '0.6vw',
  lineHeight: 1,
  alignItems: 'center',
  transition: 'background 0.2s, color 0.2s'
});

const heroSectionBtnPrimary = style({
  background: '#e50914',
  color: '#fff',
  selectors: {
    '&:hover': {
      background: '#b0060f',
      color: '#fff'
    }
  }
});

const heroSectionBtnSecondary = style({
  background: '#444',
  color: '#fff',
  selectors: {
    '&:hover': {
      background: '#232323',
      color: '#fff'
    }
  }
});

const styles = {
  movieRowSection,
  movieRowTitle,
  movieRowScroll,
  mainWrapper,
  heroSection,
  heroSectionBg,
  heroSectionGradient,
  heroSectionContent,
  heroSectionTitle,
  heroSectionBadges,
  heroSectionBadge,
  heroSectionOverview,
  heroSectionActions,
  heroSectionBtn,
  heroSectionBtnPrimary,
  heroSectionBtnSecondary
};

export default styles;
