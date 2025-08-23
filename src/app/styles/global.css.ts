import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', { boxSizing: 'border-box', margin: 0, padding: 0 });

globalStyle('body', { minHeight: '100vh', fontFamily: 'system-ui, sans-serif'});
globalStyle('body', { backgroundColor: '#f0f0f0', color: '#171717'});