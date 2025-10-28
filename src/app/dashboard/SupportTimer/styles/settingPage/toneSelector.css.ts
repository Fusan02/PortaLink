import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const container = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const title = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
});

const toneContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',  
});

const toneContainerLabel = recipe({
    base: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    variants: {
        isSelected: {
            true: {
                border: '2px solid #4CAF50',
                backgroundColor: '#E8F5E9',
            },
            false: {
                border: '2px solid #E0E0E0',
                backgroundColor: 'white',
            },
        },
    },
    defaultVariants: {
        isSelected: false,
    },
});

const toneInput = style({
    marginRight: '12px',
    cursor: 'pointer',
    accentColor: '#4CAF50',
});

const toneLabel = style({
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '4px',
});

const toneDescription = style({
    fontSize: '13px',
    color: '#666',
});

const toneSelector = {
    container,
    title,
    toneContainer,
    toneContainerLabel,
    toneInput,
    toneLabel,
    toneDescription,
};

export default toneSelector;