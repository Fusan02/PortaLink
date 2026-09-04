import { style } from '@vanilla-extract/css';

const footerWrap = style({
    background: 'hsl(0, 0%, 12%)',
    width: '100%',
    height: '100%',
    padding: '1.5vw 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2vw'
});

const tmdbCredit = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5vw',
    fontSize: '0.8vw'
});

const mfCrefit = style({
    fontSize: '0.8vw'
});

const styles = {
    footerWrap,
    tmdbCredit,
    mfCrefit
};

export default styles;
