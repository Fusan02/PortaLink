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

const session = style({
    textAlign: 'center',
    padding: '40px',
    color: '#999',
});

const index = {
    page,
    h1,
    session,
};

export default index;