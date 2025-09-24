import { style } from '@vanilla-extract/css';

export const button = style({
    margin: '10px 0',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    color: 'red',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    selectors: {
        '&:hover': {
            backgroundColor: '#cececeff',
        }
    }
});