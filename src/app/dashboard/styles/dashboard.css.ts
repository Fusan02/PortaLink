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
    selectors: {
        '&:hover': {
            background: '#155c2f',
        },
    }
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
    selectors: {
        '&:hover': {
            background: '#155c2f',
        },
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
};

export default styles;