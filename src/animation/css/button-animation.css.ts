import { style } from '@vanilla-extract/css';

export const boxAnimation = style({
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
            transform: 'translateX(-150px) skewX(-15deg)',
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
            transform: 'translateX(-150px) skewX(-15deg)',
        },
        '&:hover::before': {
            transform: 'translateX(300px)  skewX(-15deg)',
            opacity: '0.6',
            transition: '1.5s',
        },
        '&:hover::after': {
            transform: 'translateX(300px)  skewX(-15deg)',
            opacity: '1',
            transition: '1.5s',
        }                        
    }
});