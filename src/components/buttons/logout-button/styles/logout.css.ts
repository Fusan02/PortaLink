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
    transition: '0.8s',
    overflow: 'hidden',
    selectors: {
        '&:before': {
            content: '',
            position: 'absolute',
            background: 'rgba(255,255,255,0.5)',
            width: '60px',
            height: '100%',
            left: '0',
            top: '0',
            opacity: '.5',
            filter: 'blur(30px)',
            transform: 'translateX(-100px) skewX(-15deg)',
        },
        '&:after': {
            content: '',
            position: 'absolute',
            background: 'rgba(255,255,255,0.2)',
            width: '30px',
            height: '100%',
            left: '30px',
            top: '0',
            opacity: '0',
            filter: 'blur(5px)',
            transform: 'translateX(-100px) skewX(-15deg)',
        },
        '&:hover': {
            background: '#803333ff',
            cursor: 'pointer',
        },
        '&:hover::before': {
            transform: 'translateX(200px)  skewX(-15deg)',
            opacity: '0.6',
            transition: '1.5s',
        },
        '&:hover::after': {
            transform: 'translateX(200px)  skewX(-15deg)',
            opacity: '1',
            transition: '1.5s',
        }
    }
});

const styles = {
    logout,
};

export default styles;