import { style } from '@vanilla-extract/css';

const page = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
});

const styles = {
    page,
};

export default styles;
