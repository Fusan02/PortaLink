import { style } from '@vanilla-extract/css';
import { shadows } from '../../styles/tokens.css';

export const extends_view = style({
    minHeight: '100vh',
});

export const input = style({
    boxShadow: shadows.lg,
    border: 'none',
    borderRadius: '8px',
    width: '300px',
    padding: '8px 0',
});