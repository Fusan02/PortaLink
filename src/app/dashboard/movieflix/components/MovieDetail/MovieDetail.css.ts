import { style } from '@vanilla-extract/css';

const movieDetailRoot = style({
  minHeight: '100vh',
  background: '#111',
  color: '#fff',
  position: 'relative'
});

const movieDetailBackdrop = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '70vh',
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.4
});

const movieDetailBackdropGradient = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '70vh',
  zIndex: 1,
  background: 'linear-gradient(to top, #111 60%, transparent 100%)'
});

const movieDetailContainer = style({
  position: 'relative',
  zIndex: 2,
  width: '100vw',
  maxWidth: '100vw',
  margin: 0,
  padding: '100px 100px',
  boxSizing: 'border-box'
});

const movieDetailBacklink = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: '#fff8',
  fontSize: '16px',
  marginBottom: '24px',
  textDecoration: 'none',
  transition: 'color 0.2s',
  selectors: {
    '&:hover': {
      color: '#fff'
    }
  }
});

const movieDetailBacklinkIcon = style({
  marginRight: '8px'
});

const movieDetailGrid = style({
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gap: '40px',
  alignItems: 'start'
});

const movieDetailPosterWrap = style({
  position: 'relative',
  width: '17.54vw',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 32px #000a'
});

const movieDetailPosterImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block'
});

const movieDetailDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  paddingLeft: '2vw'
});

const movieDetailTitle = style({
  fontSize: '18px',
  fontWeight: 600,
  marginBottom: '8px'
});

const movieDetailBadges = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '12px'
});

const badgesIconSvg = style({
  marginRight: '2px',
  verticalAlign: 'middle'
});

const badgesStar = style({
  color: '#ffb400',
  fill: '#ffb400'
});

const movieDetailOverview = style({
  color: '#ccc',
  lineHeight: 1.7
});

const movieDetailGenres = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px'
});

const badgesOutline = style({
  display: 'inline-block',
  border: '1px solid #444',
  borderRadius: '6px',
  padding: '2px 10px',
  fontSize: '13px',
  color: '#fff',
  background: 'transparent'
});

const badgesGenre = style({
  display: 'inline-block',
  background: '#222',
  borderRadius: '6px',
  padding: '2px 10px',
  fontSize: '13px',
  color: '#fff'
});

const movieDetailActions = style({
  display: 'flex',
  gap: '16px',
  paddingTop: '8px'
});

const movieDetailBtn = style({
  fontSize: '16px',
  borderRadius: '6px',
  padding: '10px 22px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  border: 'none',
  background: '#444',
  color: '#fff',
  transition: 'background 0.2s, color 0.2s',
  selectors: {
    '&:hover': {
      background: '#232323',
      color: '#fff'
    }
  }
});

const movieDetailBtnPrimary = style({
  background: '#e50914',
  color: '#fff',
  selectors: {
    '&:hover': {
      background: '#b0060f',
      color: '#fff'
    }
  }
});

const styles = {
  movieDetailRoot,
  movieDetailBackdrop,
  movieDetailBackdropGradient,
  movieDetailContainer,
  movieDetailBacklink,
  movieDetailBacklinkIcon,
  movieDetailGrid,
  movieDetailPosterWrap,
  movieDetailPosterImg,
  movieDetailDetails,
  movieDetailTitle,
  movieDetailBadges,
  badgesIconSvg,
  badgesStar,
  movieDetailOverview,
  movieDetailGenres,
  badgesOutline,
  badgesGenre,
  movieDetailActions,
  movieDetailBtn,
  movieDetailBtnPrimary
};

export default styles;
