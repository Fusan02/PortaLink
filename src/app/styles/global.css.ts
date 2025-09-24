import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', { boxSizing: 'border-box', margin: 0, padding: 0 });

globalStyle('body', { minHeight: '100vh', fontFamily: 'system-ui, sans-serif'});
globalStyle('body', { backgroundColor: '#222222', color: '#EAEAEA'});