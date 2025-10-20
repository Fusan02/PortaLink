import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', { boxSizing: 'border-box', margin: 0, padding: 0 });

globalStyle('html', {
    minHeight: '100%',
    backgroundColor: '#09171F',
    
});

globalStyle('body', {
    minHeight: '100vh',
    background: 'radial-gradient(circle at top left, #3e4e5a60, #09171F, #3E4E5A60)',
    color: '#EAEAEA',
    
});

globalStyle('h1', {
    color: '#F0F4F8',
    fontFamily: 'sans-serif',
});

globalStyle('h2', {
    color: '#F0F4F8',
    fontFamily: 'sans-serif',
});

globalStyle('p', {
    fontFamily: 'sans-serif',
});
