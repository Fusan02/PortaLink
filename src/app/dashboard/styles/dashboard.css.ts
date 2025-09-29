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
    height: '40px',
    color: '#CFCFCF',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',    
    width: '130px',
    height: '180px',
    backgroundColor: '#3D033D',
    borderRadius: '12px',
});

const services = style({
    display: 'flex', 
    gap: '20px',
});

const serviceBox = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
    width: '130px',
    height: '180px',
    backgroundColor: '#333333',
    borderRadius: '12px',    
});

const boxAnimation = style({
    transition: '0.8s',
    selectors: {
        '&:before': {
            position: 'absolute',
            background: 'rgba(255,255,255,0.5)',
            width: '60px',
            height: '100%',
        },
        '&:hover': {
            background: '803333ff'
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