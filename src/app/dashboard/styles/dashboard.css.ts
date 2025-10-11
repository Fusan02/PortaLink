import { style } from '@vanilla-extract/css';

const pageAdd = style({
    minHeight: '75vh',
});

const sideMenu = style({
    position: 'fixed',
    left: '20px',
    top: '20px',
    zIndex: '10',
})

const menuButton = style({
    width: '50px',
    height: '50px',
    backgroundColor: '#106f4cff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    padding: '8px',
    selectors: {
        '&:hover': {
            backgroundColor: '#067b30ff',
        }
    }
})

const menuBar = style({
    width: '24px',
    height: '3px',
    backgroundColor: '#EAEAEA',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
})

const sideMenuModal = style({
    zIndex: '10',
})

const hide = style({
    opacity: '0',
    pointerEvents: 'none',
})

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
    sideMenu,
    menuButton,
    menuBar,
    sideMenuModal,
    hide,
    LinkSetting,
    username,
    icon,
    contents,
    prifileBox,
    services,
    serviceBox,
};

export default styles;