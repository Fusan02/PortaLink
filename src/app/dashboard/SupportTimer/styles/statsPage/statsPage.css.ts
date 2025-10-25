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

const summaryCard = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '24px',
});

const statsPage = {
    page,
    h1,
    summaryCard,
};

export default statsPage;