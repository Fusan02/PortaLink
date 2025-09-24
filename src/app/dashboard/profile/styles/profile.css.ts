import { style } from '@vanilla-extract/css';

const title = style({
    margin: '20px 0',
});

const subTitle = style({
    fontSize: '16px',
    fontWeight: 'bold',
});

const name = style({
    margin: '10px 0',
    fontSize: '32px'
});

const time = style({
    textAlign: 'right',
    width: '100%',
    color: '#a5a5a5ff'
});

const button = style({
    marginTop: '10px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    selectors: {
        '&:hover': {
            backgroundColor: '#cececeff',
        }
    }
});

const styles = {
    title,
    subTitle,
    name,
    time,
    button
};

export default styles;