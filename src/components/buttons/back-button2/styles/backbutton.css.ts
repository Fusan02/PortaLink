import { style } from '@vanilla-extract/css';

export const button = style({
    position: 'absolute',
    margin: '20px 20px',
    background: '#1E362D',
    color: '#cc4b90ff',
    width: '50px',
    height: '50px',
    border: '0',
    fontSize: '20px',
    borderRadius: '50%',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    selectors: {
        '&:hover': {
            backgroundColor: '#155c2f',
        }
    }
});