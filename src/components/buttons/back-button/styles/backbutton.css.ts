import { style } from '@vanilla-extract/css';

export const button = style({
    position: 'relative',
    margin: '20px 0',
    background: '#1E362D',
    color: '#cc4b90ff',
    width: '250px',
    height: '50px',
    border: '0',
    fontSize: '14px',
    borderRadius: '5px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    selectors: {
        '&:hover': {
            backgroundColor: '#155c2f',
        }
    }
});