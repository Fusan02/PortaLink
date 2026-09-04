import { style } from '@vanilla-extract/css';

const layoutWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
});

const content = style({
    flex: '1'
});

const styles = {
    layoutWrapper,
    content
};

export default styles;
