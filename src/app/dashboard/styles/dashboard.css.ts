import { style } from '@vanilla-extract/css';

const pageAdd = style({
    minHeight: '75vh',
});

const LinkSetting = style({
    color: '#EAEAEA',
    textDecoration: 'none',
});

const icon = style({
    height: '40px',
    color: '#CFCFCF',
});

const contents = style({
    display: 'flex',
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
    width: '150px',
    height: '200px',
    backgroundColor: '#333333',
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
    width: '150px',
    height: '200px',
    backgroundColor: '#333333',
    borderRadius: '12px',    
});

const styles = {
    pageAdd,
    LinkSetting,
    icon,
    contents,
    prifileBox,
    services,
    serviceBox,
};

export default styles;