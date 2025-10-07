import { style } from '@vanilla-extract/css';

const pageAdd = style({
    minHeight: '75vh',
});

const LinkSetting = style({
    color: '#EAEAEA',
    textDecoration: 'none',
});

const username = style({
    color: '#4CAF50',
    fontWeight: 'bold',
});

const icon = style({
    color: '#EAEAEA',
    width: '50px',
    height: '50px',
});

const contents = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '40px',
    marginBottom: '40px',
});

const prifileBox = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',    
    width: '130px',
    height: '180px',
    backgroundColor: '#1E362D',
    borderRadius: '12px',
    fontFamily: 'sans-serif',
});

const services = style({
    display: 'flex', 
    gap: '20px',
});

const serviceBox = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
    width: '130px',
    height: '180px',
    backgroundColor: '#1E362D',
    borderRadius: '12px',   
    border: '0' ,
    fontFamily: 'sans-serif',
});

const boxAnimation = style({
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
        '&:hover': {
            background: '#155c2f',
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

const styles = {
    pageAdd,
    LinkSetting,
    username,
    icon,
    contents,
    prifileBox,
    services,
    serviceBox,
    boxAnimation,
};

export default styles;