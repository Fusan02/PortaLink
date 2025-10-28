import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const container = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const goalTime = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
});

const presets = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    marginBottom: '16px',
});

const presetButton = recipe({
    base: {
        padding: '12px',
        fontSize: '14px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    variants: {
        goalTime: {
            true: {
                backgroundColor: '#4CAF50',
                color: 'white',
            },
            false: {
                backgroundColor: '#F5F5F5',
                color: '#333',
            },
        },
    },
    defaultVariants: {
        goalTime: false,
    },
});

const customLabel = style({
    display: 'block',
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
});

const customInput = style({
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    outline: 'none',
});

const goalInput = {
    container,
    goalTime,
    presets,
    presetButton,
    customLabel,
    customInput,
};

export default goalInput;