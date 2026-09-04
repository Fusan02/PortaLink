import { style } from '@vanilla-extract/css';

const movieCard = style({
    display: 'block',
    position: 'relative',
    minWidth: '13.5vw',
    borderRadius: '1.3vw',
    overflow: 'hidden',
    background: '#232323',
    boxShadow: '0 0.18vw 1.6vw rgba(0, 0, 0, 0.22)',
    cursor: 'pointer',
    transition: 'transform 0.18s, box-shadow 0.18s',
    selectors: {
        '&:hover': {
            transform: 'scale(1.07)',
            boxShadow: '0 0.74vw 3.0vw rgba(229, 9, 20, 0.18)',
            zIndex: 2
        }
    }
});

const movieCardImgwrap = style({
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    height: '100%',
    position: 'relative'
});

const movieCardImage = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '1.3vw',
    transition: 'filter 0.18s'
});

const movieCardOverlay = style({
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 60%, transparent 100%)',
    opacity: 0,
    transition: 'opacity 0.18s',
    padding: '1.1rem 1rem 1.3rem 1rem',
    pointerEvents: 'none'
});

const movieCardTitle = style({
    color: '#fff',
    fontSize: '1.2vw',
    fontWeight: 700,
    letterSpacing: '0.05vw',
    margin: 0,
    textShadow: '0 0.18vw 1.1vw rgba(0, 0, 0, 0.32)'
});

const styles = {
    movieCard,
    movieCardImgwrap,
    movieCardImage,
    movieCardOverlay,
    movieCardTitle
};

export default styles;
