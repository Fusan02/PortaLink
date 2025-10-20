import { style } from '@vanilla-extract/css';

const page = style({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
});

const mainContetns = style({
    flex: '1',
    paddingBottom: '80px',
});

const pageStyles = {
    page,
    mainContetns,
};

export default pageStyles;