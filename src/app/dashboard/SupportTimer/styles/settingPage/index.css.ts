import { style } from '@vanilla-extract/css';

const page = style({
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
});

const h1 = style({
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#333',
});

const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

const button = style({
    padding: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
    transition: 'transform 0.2s',
});

const toast = style({
    position: 'fixed',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 3000,   
});

const index = {
    page,
    h1,
    container,
    button,
    toast,
};

export default index;