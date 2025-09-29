import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', { boxSizing: 'border-box', margin: 0, padding: 0 });

globalStyle('html', {
    minHeight: '100%',
    backgroundColor: '#09171F',
    overflow: 'hidden'
});

globalStyle('body', {
    minHeight: '100vh',
    fontFamily: 'system-ui, sans-serif',
    background: 'radial-gradient(circle at top left, #09171F, #3E4E5A, #09171F)',
    color: '#EAEAEA',
    overflow: 'hidden'
});