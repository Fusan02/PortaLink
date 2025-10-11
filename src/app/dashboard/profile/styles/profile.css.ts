import { style } from '@vanilla-extract/css';

const title = style({
    margin: '20px 0',
    fontSize: '48px'
});

const subTitle = style({
    fontSize: '16px',
    fontWeight: 'bold',
});

const name = style({
    margin: '10px 0',
    fontSize: '36px',
    color: '#4CAF50'
});

const time = style({
    textAlign: 'right',
    width: '100%',
    color: '#a5a5a5ff'
});

const button = style({
    position: 'relative',
    marginTop: '50px',
    background: '#1E362D',
    color: '#ccc',
    width: '250px',
    height: '50px',
    border: '0',
    fontSize: '14px',
    borderRadius: '5px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    selectors: {
        '&:hover': {
            backgroundColor: '#155c2f',
        }
    }
});

const contentInfo = style({
    alignSelf: 'flex-start',
    marginLeft: '35vw',
    marginBottom: '20px',
});

const content = style({
    color: '#4CAF50',
    fontSize: '24px'
});

const contentText = style({
    color: '#EAEAEA',
    fontSize: '24px'
});

const icon = style({
    margin: '30px 0',
    border: '8px solid #EAEAEA',
    borderRadius: '50%',
    padding: '40px',
    width: '100px',
    height: '100px',
});

const styles = {
    title,
    subTitle,
    name,
    time,
    button,

    contentInfo,
    content,
    contentText,
    icon,    
};

export default styles;