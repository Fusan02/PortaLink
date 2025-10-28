import { style } from '@vanilla-extract/css';

const container = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
});

const timer = style({
        fontSize: '72px',
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'monospace',
        letterSpacing: '4px',
});

const bigTimer = {
    container,
    timer,
};

export default bigTimer;