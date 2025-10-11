import { style } from '@vanilla-extract/css';

const logout = style({
    position: 'relative',
    background: '#333333',
    color: '#ccc',
    width: '100px',
    height: '30px',
    border: '0',
    fontSize: '14px',
    borderRadius: '5px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    selectors: {
        '&:hover': {
            background: '#803333ff',
        },
    }
});

const styles = {
    logout,
};

export default styles;