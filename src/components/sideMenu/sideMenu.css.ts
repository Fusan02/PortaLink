import { style } from '@vanilla-extract/css';

const menuPosition = style({
    position: 'fixed',
    top: '0',
    left: '0',
})

const menuBack = style({
    width: '400px',
    height: '100vh',
    backgroundColor: '#000000ff',
    color: '#ccc',
})

const closeButton = style({
    position: 'fixed',
    bottom: '20px',
    left: '20px',

    padding: '10px 160px',
    backgroundColor: '#333333',
    color: '#EAEAEA',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    selectors: {
        '&:hover': {
            backgroundColor: '#803333ff',
        }
    }
})

const styles = {
    menuPosition,
    menuBack,
    closeButton,
}

export default styles;