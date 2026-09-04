import { style } from '@vanilla-extract/css';

const wrap = style({
    position: 'relative',
    display: 'inline-flex',
    transition: 'opacity 0.25s ease-out'
});

const wrapFolded = style({
    opacity: 0.25
});

const card = style({
    width: '10vw',
    height: '5.6vw',
    borderRadius: '0.5vw',
    border: 'none',
    background: 'none',
    padding: '0',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    display: 'block',
    transition: 'transform 0.25s ease-out',
    selectors: {
        '&:hover': {
            transform: 'scale(1.08)'
        }
    }
});

const hasItems = style({
    selectors: {
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '0.5vw',
            background: '#2a2a2a',
            boxShadow: '0 0.1vw 0.4vw #0006',
            transform: 'translate(0.35vw, 0.35vw) rotate(-1.5deg)',
            transition: 'transform 0.55s ease-out',
            zIndex: -1
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '0.5vw',
            background: '#1e1e1e',
            boxShadow: '0 0.1vw 0.4vw #0006',
            transform: 'translate(0.7vw, 0.7vw) rotate(-3deg)',
            transition: 'transform 0.85s ease-out',
            zIndex: -2
        },
        '&:hover::before': {
            transform: 'translate(0.55vw, 0.55vw) rotate(-3deg)'
        },
        '&:hover::after': {
            transform: 'translate(1.1vw, 1.1vw) rotate(-6deg)'
        }
    }
});

const name = style({
    textAlign: 'left'
});

const cardFace = style({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: '0.5vw',
    background: '#333',
    color: '#fff',
    fontSize: '1vw',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'flex-end',
    padding: '0.6vw',
    transition: 'background 0.25s ease-out'
});

const cardFaceSelected = style({
    background: '#e50914'
});

const deleteBtn = style({
    position: 'absolute',
    top: '0.3vw',
    right: '0.3vw',
    zIndex: 2,
    fontSize: '0.9vw',
    color: '#aaa',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.15s',
    selectors: {
        '&:hover': {
            color: '#fff'
        }
    }
});

const styles = {
    wrap,
    wrapFolded,
    card,
    hasItems,
    name,
    deleteBtn,
    cardFace,
    cardFaceSelected
};

export default styles;
